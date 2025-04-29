import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenFormComponent } from './shorten-form/shorten-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShortenFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shortly';
}
