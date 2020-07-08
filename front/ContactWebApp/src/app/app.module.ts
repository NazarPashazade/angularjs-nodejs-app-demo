import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import{FormsModule} from "@angular/forms";
import { MatDialogModule, MatInputModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactDetailsComponent } from "./components/contact-details/contact-details.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { ErrorComponent } from './components/error/error.component';
import { ConfrimDialogComponent } from './components/confrim-dialog/confrim-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    ContactDetailsComponent,
    EditContactComponent,
    ErrorComponent,
    ConfrimDialogComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ContactsComponent,
    ConfrimDialogComponent
  ]
})
export class AppModule {}
