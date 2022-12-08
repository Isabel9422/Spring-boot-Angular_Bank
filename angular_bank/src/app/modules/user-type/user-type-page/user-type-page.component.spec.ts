import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypePageComponent } from './user-type-page.component';

describe('UserTypePageComponent', () => {
  let component: UserTypePageComponent;
  let fixture: ComponentFixture<UserTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
