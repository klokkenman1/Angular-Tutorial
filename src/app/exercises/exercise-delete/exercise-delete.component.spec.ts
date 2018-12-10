import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDeleteComponent } from './exercise-delete.component';

describe('ExerciseDeleteComponent', () => {
  let component: ExerciseDeleteComponent;
  let fixture: ComponentFixture<ExerciseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
