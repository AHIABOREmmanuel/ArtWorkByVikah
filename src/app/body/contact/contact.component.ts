import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        await this.contactService.sendEmail(this.contactForm.value);
        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        this.submitError = true;
        this.errorMessage = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.';
        console.error('Erreur lors de l\'envoi du message:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
