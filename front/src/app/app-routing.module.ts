import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDashboradComponent } from './pages/admin/admin-dashborad/admin-dashborad.component';
import { UpdateComponent } from './pages/admin/update/update.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { QuestionsComponent } from './pages/user/questions/questions.component';
import { StarQuizComponent } from './pages/user/star-quiz/star-quiz.component';
import { UserComponentComponent } from './pages/user/user-component/user-component.component';
import { ViewAllQuizesComponent } from './pages/user/view-all-quizes/view-all-quizes.component';
// import { ViewQuestionsComponent } from './pages/user/questions/view-questions.component';
import { ViewQuizByCategoryComponent } from './pages/user/view-quiz-by-category/view-quiz-by-category.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
const routes: Routes = [

  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full'
  },

  {
    path:'user-dashboard',
    component: UserComponentComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {

        path:'view-all-quizes',
        component:ViewAllQuizesComponent
      },
      {
        path:':cId',
        component:ViewQuizByCategoryComponent
      },
      {
        path:'questions/:qId',
        component:QuestionsComponent
      },

    ]
    

  },
   
  {

    path:'start/:qId',
    component:StarQuizComponent,
    canActivate:[NormalGuard]

  },

  
  {
    path:'admin',
    component: AdminDashboradComponent,
    // Use to protect the API from unauthorize login users
    canActivate:[AdminGuard],
    children:[
      {

        path:'',
        component:WelcomeComponent,

      },
      {
        path:'profile',
        component:ProfileComponent,
        
      },
      {
        path:'update-profile/:id',
        component:UpdateProfileComponent,

      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component:AddCategoryComponent,

      },
      {
        path:'quizes',
        component:ViewQuizesComponent,
      },
      {
        path:'add-quiz',
        component:AddQuizComponent,
      },
      {
        path:'update-quiz/:qId',
        component:UpdateComponent,
      },
      {
        path:'view-question/all/:qId/:title',
        component:ViewQuizQuestionsComponent,
      },
      {
        path:'add-question/:qId/:title',
        component:AddQuestionsComponent,
      }

      
    ],
  },
  

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
   
  },

  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
