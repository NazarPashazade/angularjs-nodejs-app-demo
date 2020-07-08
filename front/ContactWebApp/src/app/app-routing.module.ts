import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { ContactDetailsComponent } from "./components/contact-details/contact-details.component";
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: "contacts", component: ContactsComponent },
  { path: "", component: ContactsComponent },
  { path: "contactDetails", component: ContactDetailsComponent },
  { path: "editContact", component: EditContactComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
