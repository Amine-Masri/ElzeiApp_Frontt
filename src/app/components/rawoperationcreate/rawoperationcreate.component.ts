import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RawOperation } from 'src/app/models/rawoperation.model';
import { RawOperationService } from 'src/app/services/rawoperation.service';

@Component({
  selector: 'app-rawoperationcreate',
  templateUrl: './rawoperationcreate.component.html',
  styleUrls: ['./rawoperationcreate.component.css']
})
export class RawOperationCreateComponent {
  newRawOperation: RawOperation = {
    id: 0,
    date: new Date(),
    dateValeur: new Date(),
    libelle: '',
    montant: 0,
    type: '',
    solde: 0,
    justificatif: null
  };

  constructor(
    private rawOperationService: RawOperationService,
    private router: Router
  ) {}

  create(): void {
    this.rawOperationService.create(this.newRawOperation).subscribe(
      (createdOperation) => {
        this.router.navigate(['/rawoperations']); // Redirect to the list view after creation
      },
      (error) => {
        console.error('Error creating raw operation:', error);
      }
    );
  }
}
