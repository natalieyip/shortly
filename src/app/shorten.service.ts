import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShortenService {
  baseUrl: string = environment.cleanUriBase;

  constructor(private httpClient: HttpClient) { }

}
