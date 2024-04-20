import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawOperation } from './rawoperation.model';

@Injectable({
  providedIn: 'root'
})
export class RawOperationService {
  private apiUrl = 'http://localhost:8080/api/v1/raw-operations'; // Remplacez cette URL par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  getAllRawOperations(): Observable<RawOperation[]> {
    return this.http.get<RawOperation[]>(this.apiUrl);
  }

  getRawOperationById(id: number): Observable<RawOperation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<RawOperation>(url);
  }

  createRawOperation(rawOperation: RawOperation): Observable<RawOperation> {
    return this.http.post<RawOperation>(this.apiUrl, rawOperation);
  }

  updateRawOperation(id: number, rawOperation: RawOperation): Observable<RawOperation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<RawOperation>(url, rawOperation);
  }

  deleteRawOperation(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
