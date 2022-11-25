import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarQuizComponent } from './star-quiz.component';

describe('StarQuizComponent', () => {
  let component: StarQuizComponent;
  let fixture: ComponentFixture<StarQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
