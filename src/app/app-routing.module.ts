import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RawoperationlistComponent } from './components/rawoperationlist/rawoperationlist.component';
import { MappingComponentComponent } from './components/mapping-component/mapping-component.component';
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import { FichierslistComponent } from './components/fichierslist/fichierslist.component';
import { RawOperationCreateComponent } from './components/rawoperationcreate/rawoperationcreate.component';
import { RawOperationEditComponent } from './components/rawoperationedit/rawoperationedit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Mapping', component: MappingComponentComponent },
  { path: 'raw-operations', component: RawoperationlistComponent },
  { path: 'file', component: FileUploadComponent },
  { path: 'fileList', component: FichierslistComponent },
  { path: 'ajout', component: RawOperationCreateComponent },
  { path: 'edit/:id', component: RawOperationEditComponent }, // Pass ID to the edit component
  { path: '**', redirectTo: 'home' } // Redirection vers 'home' pour les chemins inconnus
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
