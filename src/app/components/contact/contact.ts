import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact';
import { ContactMe } from '../../models/contactMe.model';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {
  sending = false;
  success = false;
  error: string | null = null;
  form: FormGroup;


  constructor(private fb: FormBuilder, private contactService: ContactService) { 
 this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      _gotcha: ['']   // spam field
    });
  }

  ngOnInit(): void {
   
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Convert value to ContactMe (fixes TS error)
    const formData: ContactMe = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      message: this.form.value.message!,
      gotcha: this.form.value._gotcha || ''
    };

    this.contactService.submit(formData).subscribe({
      next: () => {
        this.sending = false;
        this.success = true;
        this.form.reset();
      },
      error: (err) => {
        this.sending = false;
        console.error('Contact submit error', err);
         this.error = 'Failed to send message. Please try again later.';
      }
    });
  }
}
