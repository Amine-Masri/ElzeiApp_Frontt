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
    fileInput.accept = '.pdf'; // Accept only PDF files
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      this.extractTextFromPdf(file);
    };
    fileInput.click();
  }

  extractTextFromPdf(file: File): void {
    const formData = new FormData();
    formData.append('file', file);

    // Replace 'Azure_OCR_API_Endpoint' with your actual Azure OCR API endpoint
    const apiUrl = 'https://computervisionocrpfe.cognitiveservices.azure.com/';

    // Call Azure OCR API to extract text from the selected PDF file
    this.http.post<any>(apiUrl, formData).subscribe(
      (response) => {
        // Assuming the response contains extracted text
        const extractedText = response.text;
        // @ts-ignore
        const rawOperation: RawOperation = { id: this.rawOperations.length + 1, extractedText };
        this.rawOperations.push(rawOperation);
      },
      (error) => {
        console.error('Error extracting text from PDF:', error);
      }
    );
  }
}
