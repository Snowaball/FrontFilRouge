import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommuneComponent } from './form-commune.component';

describe('FormCommuneComponent', () => {
  let component: FormCommuneComponent;
  let fixture: ComponentFixture<FormCommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
