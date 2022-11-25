import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

// Use for backend Connection
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { authInterceptorproviders } from './services/auth.interceptor';
import { UserComponentComponent } from './pages/user/user-component/user-component.component';
import { AdminDashboradComponent } from './pages/admin/admin-dashborad/admin-dashborad.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateComponent } from './pages/admin/update/update.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { ViewAllQuizesComponent } from './pages/user/view-all-quizes/view-all-quizes.component';
import { ViewQuizByCategoryComponent } from './pages/user/view-quiz-by-category/view-quiz-by-category.component';
// import { ViewQuestionsComponent } from './pages/user/questions/view-questions.component';
import { QuestionsComponent } from './pages/user/questions/questions.component';
import { StarQuizComponent } from './pages/user/star-quiz/star-quiz.component';

// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UserComponentComponent,
    AdminDashboradComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateComponent,
    ViewQuizQuestionsComponent,
    AddQuestionsComponent,
    UpdateProfileComponent,
    UserSidebarComponent,
    ViewAllQuizesComponent,
    ViewQuizByCategoryComponent,
    // ViewQuestionsComponent,
    QuestionsComponent,
    StarQuizComponent,
    // UserDashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    // CKEditorModule
    MatProgressSpinnerModule
    
  ],
  providers: [authInterceptorproviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
