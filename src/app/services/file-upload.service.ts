import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MyFile } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl = 'http://localhost:8080/api/v1/file'; // Mettez votre URL d'API ici

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<MyFile[]> {
    return this.http.get<MyFile[]>(`${this.apiUrl}/all`);
  }

  downloadFile(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${id}`, {
      responseType: 'blob'
    });
  }
}
