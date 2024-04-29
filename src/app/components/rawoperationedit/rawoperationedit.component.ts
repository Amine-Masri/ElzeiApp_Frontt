import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawOperationService } from 'src/app/services/rawoperation.service';
import { RawOperation } from 'src/app/models/rawoperation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rawoperationedit',
  templateUrl: './rawoperationedit.component.html',
  styleUrls: ['./rawoperationedit.component.css']
})
export class RawOperationEditComponent implements OnInit {
  rawOperation!: RawOperation;

  constructor(
    private route: ActivatedRoute,
    private rawOperationService: RawOperationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); // Get ID from route parameters
    this.rawOperationService.getById(id).subscribe(
      (operation) => {
        this.rawOperation = operation;
      },
      (error) => {
        console.error('Error fetching raw operation:', error);
      }
    );
  }

  update(): void {
    this.rawOperationService.update(this.rawOperation.id, this.rawOperation).subscribe(
      () => {
        this.router.navigate(['/rawoperations']); // Redirect to the list view after update
      },
      (error) => {
        console.error('Error updating raw operation:', error);
      }
    );
  }
}
