import { alertOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { PasswordLostComponent } from 'src/app/shared/modal/password-lost/password-lost.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonItem,
    IonList,
    IonTitle,
    IonInput,
    IonHeader,
    IonButton,
    IonToolbar,
    IonContent,
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {

  error = '';
  submitForm = false;
  private localStorage: Storage = window.localStorage;
  private modalCtl = inject(ModalController);
  private router = inject(Router);
  private serviceAuth = inject(AuthentificationService);

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor() {
    addIcons({
      'alert-circle-outline': alertOutline,
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.error = '';
    if (this.form.valid) {
      this.submitForm = true;
      this.serviceAuth
        .login(this.form.value.email, this.form.value.password)
        .subscribe((data: any) => {
          if (data?.error) {
            // this.error = data.message;
          } else {
            this.localStorage.setItem('user', data.user);
            this.localStorage.setItem('token', data.token);
            this.router.navigateByUrl('/home');
          }
          console.log(data);
        });
    }
  }

  async onPasswordLostModal(event: Event) {
    event.preventDefault();  
    const modal = await this.modalCtl.create({
      component: PasswordLostComponent,
    });
    await modal.present();
  }
}
