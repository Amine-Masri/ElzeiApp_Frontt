import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RawOperation } from 'src/app/models/rawoperation.model';
import { RawOperationService } from 'src/app/services/rawoperation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rawoperationlist',
  templateUrl: './rawoperationlist.component.html',
  styleUrls: ['./rawoperationlist.component.css']
})
export class RawoperationlistComponent implements OnInit {
  rawOperations: RawOperation[] = [];
  filteredRawOperations: RawOperation[] = []; // Liste filtrée
  searchTerm: string = ''; // Terme de recherche

  constructor(private rawOperationService: RawOperationService,
              private router: Router,
              private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getRawOperations();
  }

  getRawOperations(): void {
    this.rawOperationService.getAllRawOperations()
      .subscribe((rawOperations) => {
        this.rawOperations = rawOperations;
        this.filteredRawOperations = rawOperations; // Initialise la liste filtrée
      });
  }

  onSearch(): void {
    const searchTermLower = this.searchTerm.toLowerCase();

    // Filtre par libellé ou date
    if (this.searchTerm.trim()) {
      this.filteredRawOperations = this.rawOperations.filter((op) =>
        op.libelle.toLowerCase().includes(searchTermLower) || // Filtre par libellé
        op.date.toString().toLowerCase().includes(searchTermLower) // Filtre par date
      );
    } else {
      this.filteredRawOperations = this.rawOperations; // Réinitialise la liste filtrée
    }
  }

  navigateToCreate(): void {
    this.router.navigate(['/ajout']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteRawOperation(id: number): void {
    this.rawOperationService.delete(id).subscribe(
      () => {
        this.rawOperations = this.rawOperations.filter((op) => op.id !== id);
        this.onSearch(); // Met à jour la liste filtrée
      },
      (error: any) => {
        console.error('Error deleting raw operation:', error);
      }
    );
  }
}
