import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawOperation } from '../models/rawoperation.model';

@Injectable({
  providedIn: 'root'
})
export class RawOperationService {

  private baseUrl = 'http://localhost:8080/api/v1/raw-operations';

  constructor(private http: HttpClient) { }

  getAllRawOperations(): Observable<RawOperation[]> {
    return this.http.get<RawOperation[]>(this.baseUrl);
  }
  getAll(): Observable<RawOperation[]> {
    return this.http.get<RawOperation[]>(this.baseUrl);
  }

  getById(id: number): Observable<RawOperation> {
    return this.http.get<RawOperation>(`${this.baseUrl}/${id}`);
  }

  create(rawOperation: RawOperation): Observable<RawOperation> {
    return this.http.post<RawOperation>(this.baseUrl, rawOperation);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
