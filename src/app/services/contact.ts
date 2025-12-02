import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMe } from '../models/contactMe.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  // replace with your actual Formspree endpoint
  private endpoint = 'https://formspree.io/f/xgvgyylg';

  constructor(private http: HttpClient) {}

  submit(data: ContactMe): Observable<any> {
    // Formspree prefers form-encoded or JSON. Using JSON and header Accept: application/json
    const headers = new HttpHeaders({ 'Accept': 'application/json' });

    // You can send JSON body
    return this.http.post(this.endpoint, data, { headers });
  }
}
