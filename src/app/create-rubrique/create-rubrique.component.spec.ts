import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRubriqueComponent } from './create-rubrique.component';

describe('CreateRubriqueComponent', () => {
  let component: CreateRubriqueComponent;
  let fixture: ComponentFixture<CreateRubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRubriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
