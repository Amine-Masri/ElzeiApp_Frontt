import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onFileSelected(event: any, endpoint: string): void {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      this.onUpload(endpoint); // Upload based on the selected endpoint
    }
  }

  onUpload(endpoint: string): void {
    if (!this.selectedFile) {
        console.error('No file selected.');
        return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let url: string;

    // Correct endpoint based on the input
    switch (endpoint) {
        case 'pdfToTextWithOCR':
            url = 'http://localhost:8080/api/v1/file/uploadSG';
            break;
        case 'OCRUGB':
            url = 'http://localhost:8080/api/v1/file/uploadUGB';
            break;
        case 'uploadGCA':
            url = 'http://localhost:8080/api/v1/file/uploadGCA';
            break;
        case 'OCRBP':
            url = 'http://localhost:8080/api/v1/file/uploadBP'; // Ensure this matches the backend
            break;
        default:
            console.error('Invalid endpoint:', endpoint);
            return; // Early return if the endpoint is invalid
    }

    this.http.post(url, formData, {
        headers,
        responseType: 'text' as 'json', // Ensure correct response type
    }).subscribe(
        (response) => {
            console.log('Upload successful:', response);
        },
        (error) => {
            console.error('Upload failed:', error);
        }
    );
  }
}
