import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PasswordLostComponent } from './password-lost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { Router } from '@angular/router';

describe('PasswordLostComponent', () => {
  let component: PasswordLostComponent;
  let fixture: ComponentFixture<PasswordLostComponent>;
  let authService: AuthentificationService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    authService = jasmine.createSpyObj('AuthentificationService', ['login']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [PasswordLostComponent],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: AuthentificationService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on valid form submission', () => {
    component.form.setValue({ email: 'test@example.com' });

    component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should not navigate on invalid form submission', () => {
    component.form.setValue({ email: 'invalid-email' });

    component.onSubmit();

    expect(router.navigate).not.toHaveBeenCalled();
  });
});
