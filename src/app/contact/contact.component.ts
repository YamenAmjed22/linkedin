import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  model: any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting: boolean = false;
  submittedSuccess: boolean = false;

  @ViewChild('contactForm') contactForm!: NgForm;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Real integration with Formspree (or your custom backend)
      // replace "mjvndlvv" with your actual Formspree ID or backend endpoint
      fetch('https://formspree.io/f/mjvndlvv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.model)
      })
        .then(response => {
          this.isSubmitting = false;
          if (response.ok) {
            this.submittedSuccess = true;
            this.contactForm.resetForm();
            setTimeout(() => this.submittedSuccess = false, 5000);
          } else {
            alert('Something went wrong. Please try again or email me directly.');
          }
        })
        .catch(error => {
          this.isSubmitting = false;
          alert('Could not connect to the server. Please check your internet or try again later.');
        });
    }
  }
}
