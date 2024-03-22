import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RawOperation } from 'src/app/models/rawoperation.model';
import { RawOperationService } from 'src/app/services/rawoperation.service';

@Component({
  selector: 'app-rawoperationlist',
  templateUrl: './rawoperationlist.component.html',
  styleUrls: ['./rawoperationlist.component.css']
})
export class RawoperationlistComponent implements OnInit {

  rawOperations!: RawOperation[];
  loading: boolean = true; // Add loading property

  constructor(private rawOperationService: RawOperationService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.getRawOperations();
  }

  getRawOperations(): void {
    this.rawOperationService.getAllRawOperations()
      .subscribe(rawOperations => this.rawOperations = rawOperations);
  }

  navigateToAnotherComponent(): void {
    // Navigate to another component using Router
    this.router.navigate(['/path-to-another-component']);
  }
}
