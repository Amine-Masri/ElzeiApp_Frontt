import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RawoperationlistComponent } from './components/rawoperationlist/rawoperationlist.component';
import { MappingComponentComponent } from './components/mapping-component/mapping-component.component';
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import { FichierslistComponent } from './components/fichierslist/fichierslist.component';
import { RawOperationCreateComponent } from './components/rawoperationcreate/rawoperationcreate.component';
import { RawOperationEditComponent } from './components/rawoperationedit/rawoperationedit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Mapping', component: MappingComponentComponent },
  { path: 'raw-operations', component: RawoperationlistComponent },
  { path: 'file', component: FileUploadComponent },
  { path: 'fileList', component: FichierslistComponent },
  { path: 'ajout', component: RawOperationCreateComponent },
  { path: 'edit/:id', component: RawOperationEditComponent }, // Pass ID to the edit component
  { path: '**', redirectTo: '/login' } // Redirection par défaut
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
