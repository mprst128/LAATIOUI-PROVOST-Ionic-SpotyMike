import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalController, IonicModule } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-password-lost',
  templateUrl: './password-lost.component.html',
  styleUrls: ['./password-lost.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    ReactiveFormsModule,
    IonicModule
  ],
})
export class PasswordLostComponent {
    passwordResetForm: FormGroup;
  
    constructor(
      private modalController: ModalController,
      private formBuilder: FormBuilder
    ) {
      this.passwordResetForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      });
    }
  
    dismiss() {
      this.modalController.dismiss();
    }
  
    onSubmit() {
      if (this.passwordResetForm.valid) {
        // Handle password reset logic here
        console.log('Reset email:', this.passwordResetForm.value.email);
        this.dismiss();
      }
    }
  }