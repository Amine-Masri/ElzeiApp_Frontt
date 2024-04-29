import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RawOperation } from './rawoperation.model';

export class RawOperationService {
  private apiUrl = 'http://localhost:8080/api/v1/raw-operations';

  constructor(private http: HttpClient) {}

  getAllRawOperations(): Observable<RawOperation[]> {
    return this.http.get<RawOperation[]>(this.apiUrl);
  }

  getRawOperationById(id: number): Observable<RawOperation> {
    return this.http.get<RawOperation>(`${this.apiUrl}/${id}`);
  }

  createRawOperation(rawOperation: RawOperation): Observable<RawOperation> {
    return this.http.post<RawOperation>(this.apiUrl, rawOperation);
  }

  update(id: number, rawOperation: RawOperation): Observable<RawOperation> {
    return this.http.put<RawOperation>(`${this.apiUrl}/${id}`, rawOperation);
  }

  deleteRawOperation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
