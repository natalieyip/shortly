import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'shorten-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shorten-form.component.html',
  styleUrl: './shorten-form.component.scss'
})
export class ShortenFormComponent {

  shortenForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.shortenForm = this.fb.group({
      url: ['', [Validators.required]]
    });
  }

  submitForm() {
  }

}
