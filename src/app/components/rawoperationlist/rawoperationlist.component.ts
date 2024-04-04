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

  rawOperations!: RawOperation[];
  loading: boolean = true;

  constructor(private rawOperationService: RawOperationService,
              private router: Router,
              private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {
    this.getRawOperations();
  }
  executeSG(): void {
    this.rawOperationService.executeSG().subscribe(
      response => console.log('SG Analysis executed successfully'),
      error => console.error('Error executing SG Analysis:', error)
    );
  }

  executeBP(): void {
    this.rawOperationService.executeBP().subscribe(
      response => console.log('BP Analysis executed successfully'),
      error => console.error('Error executing BP Analysis:', error)
    );
  }

  executeBNP(): void {
    this.rawOperationService.executeBNP().subscribe(
      response => console.log('BNP Analysis executed successfully'),
      error => console.error('Error executing BNP Analysis:', error)
    );
  }
  getRawOperations(): void {
    this.rawOperationService.getAllRawOperations()
      .subscribe(rawOperations => {
        this.rawOperations = rawOperations
        console.log(this.rawOperations)
      });
  }

  onSelectFile(): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf, .png, .jpg'; // Accept PDF, PNG, and JPG files
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      this.extractTextFromImage(file);
    };
    fileInput.click();
  }

  extractTextFromImage(file: File): void {
    const formData = new FormData();
    formData.append('image', file);

    // Replace 'Azure_OCR_API_Endpoint' with your actual Azure OCR API endpoint
    const apiUrl = 'https://computervisionocrpfe.cognitiveservices.azure.com/';

    // Call Azure OCR API to extract text from the selected image file
    this.http.post<any>(apiUrl, formData).subscribe(
      (response) => {
        // Handle API response (e.g., display extracted text)
        console.log(response);
      },
      (error) => {
        // Handle API error
        console.error(error);
      }
    );
  }
}
