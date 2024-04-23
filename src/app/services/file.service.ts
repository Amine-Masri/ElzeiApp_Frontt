import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyFile } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl = 'http://localhost:8080/api/files'; // Update with your backend endpoint

  constructor(private http: HttpClient) {}

  getFiles(): Observable<MyFile[]> {
    return this.http.get<MyFile[]>(this.apiUrl); // Fetch the files from the backend
  }
}
