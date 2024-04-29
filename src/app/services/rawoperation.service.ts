import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawOperation } from '../models/rawoperation.model';

@Injectable({
  providedIn: 'root'
})
export class RawOperationService {
  
  updateRawOperation(id: number, rawOperation: RawOperation) {
    throw new Error('Method not implemented.');
  }
  createRawOperation(rawOperation: RawOperation) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8080/api/v1/raw-operations';

  constructor(private http: HttpClient) { }


  getAllRawOperations(): Observable<RawOperation[]> {
    return this.http.get<RawOperation[]>(this.baseUrl);
  }
   // Get all raw operations
   getAll(): Observable<RawOperation[]> {
    return this.http.get<RawOperation[]>(this.baseUrl);
  }

  // Get raw operation by ID
  getById(id: number): Observable<RawOperation> {
    return this.http.get<RawOperation>(`${this.baseUrl}/${id}`);
  }

  // Create a raw operation
  create(rawOperation: RawOperation): Observable<RawOperation> {
    return this.http.post<RawOperation>(this.baseUrl, rawOperation);
  }

  // Update a raw operation
  update(id: number, rawOperation: RawOperation): Observable<RawOperation> {
    return this.http.put<RawOperation>(`${this.baseUrl}/${id}`, rawOperation);
  }

  // Delete a raw operation
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
