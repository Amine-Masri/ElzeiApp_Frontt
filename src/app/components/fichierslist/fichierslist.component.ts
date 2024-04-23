import { Component, OnInit } from '@angular/core';
import { MyFile } from 'src/app/models/file.model';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-fichierslist',
  templateUrl: './fichierslist.component.html',
  styleUrls: ['./fichierslist.component.css']
})
export class FichierslistComponent implements OnInit {
  files: MyFile[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles(): void {
    this.fileService.getFiles().subscribe((data) => {
      this.files = data; // Load the files into the component's array
    });
  }
}
