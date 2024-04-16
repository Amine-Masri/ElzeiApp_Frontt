import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file-upload.service';
import { MyFile } from '../../models/file.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  standalone: true,
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  files: MyFile[] = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.loadFiles();
  }


  loadFiles() {
    this.fileService.getAllFiles().subscribe(
        (files: MyFile[]) => {
            this.files = files;
        },
        error => {
            console.log('Error loading files:', error);
        }
    );
}

  downloadFile(id: number) {
    this.fileService.downloadFile(id).subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.log('Error downloading file:', error);
      }
    );
  }
}
