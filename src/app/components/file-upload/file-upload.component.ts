import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];

    if (this.selectedFile) {
      this.onUpload(); // Démarre le téléchargement immédiatement après la sélection du fichier
    }
  }
  onUpload() {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    this.http.post('http://localhost:8080/api/v1/file/upload', formData, {
      headers: headers,
      responseType: 'text' as 'json' // or 'arraybuffer'
    }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
