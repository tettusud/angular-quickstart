import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  constructor(private http: HttpClient) { }
  get data() {
    return this.http.get('documentation.json');
  }
}
