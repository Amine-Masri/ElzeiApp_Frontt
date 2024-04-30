import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {MatIconModule} from '@angular/material/icon'; // Importez MatIconModule
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MappingComponentComponent} from './components/mapping-component/mapping-component.component';
import {RawoperationlistComponent} from "./components/rawoperationlist/rawoperationlist.component";
import { FichierslistComponent } from './components/fichierslist/fichierslist.component';
import { RawOperationCreateComponent } from './components/rawoperationcreate/rawoperationcreate.component';
import { RawOperationEditComponent } from './components/rawoperationedit/rawoperationedit.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MappingComponentComponent,
    RawoperationlistComponent,
    FichierslistComponent,
    RawOperationCreateComponent,
    RawOperationEditComponent,
    LoginComponent
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
