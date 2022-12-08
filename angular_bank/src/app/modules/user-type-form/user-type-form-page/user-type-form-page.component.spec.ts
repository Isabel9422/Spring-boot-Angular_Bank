import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeFormPageComponent } from './user-type-form-page.component';

describe('UserTypeFormPageComponent', () => {
  let component: UserTypeFormPageComponent;
  let fixture: ComponentFixture<UserTypeFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypeFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTypeFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
