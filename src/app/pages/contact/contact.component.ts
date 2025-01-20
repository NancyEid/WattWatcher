import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    userMessage: new FormControl(''),
    PhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+20\d{10}$/)]),
  })

  successMessage: string | null = null;
    submit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);

      // Set the success message
      this.successMessage = 'Form submitted successfully!';

      // Optionally, send the form data to an API
      this.sendFormDataToApi(this.form.value);

      // Optionally, reset the form after submission
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  sendFormDataToApi(formData: any) {
    // Your API logic here
  }
}



