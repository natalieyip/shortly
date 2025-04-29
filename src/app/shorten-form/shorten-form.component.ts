import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShortenService } from '../shorten.service';

@Component({
  selector: 'shorten-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shorten-form.component.html',
  styleUrl: './shorten-form.component.scss'
})
export class ShortenFormComponent {

  shortenForm: FormGroup; 

  constructor(private fb: FormBuilder, private shortenService: ShortenService) {
    this.shortenForm = this.fb.group({
      url: ['', [Validators.required]]
    });
  }

  submitForm() {
    const userInputUrl = this.shortenForm.get('url').value; 
  }

}
