import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import {
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonLabel, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-password-lost',
  templateUrl: './password-lost.component.html',
  styleUrls: ['./password-lost.component.scss'],
  imports: [IonToolbar, IonHeader, IonLabel, IonItem, IonInput, IonContent, IonButton, TranslateModule],
})
export class PasswordLostComponent {
  private router = inject(Router);
  private authService = inject(AuthentificationService);
  private modalController = inject(ModalController);

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
  });

  async onCancel() {
    await this.modalController.dismiss();
  }

  onSubmit() {
    if (this.form.valid) {
      // REDIRECT TO HOME PAGE AFTER
      console.log('Form Submitted', this.form.value);
      this.router.navigate(['/home']);
    } else {
      console.error('Form is invalid');
    }
  }
}
