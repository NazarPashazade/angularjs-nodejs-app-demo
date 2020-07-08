import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/services/contacts.service";
import { Contact } from "src/app/models/Contact";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import { ConfrimDialogComponent } from '../confrim-dialog/confrim-dialog.component';

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  constructor(
    private contactService: ContactsService,
    private router: Router,
    public dialog: MatDialog

  ) {}

  contacts: Contact[] = [];

  ngOnInit() {
    this.getContacts();
  }

  //////////////////// GET ALL CONTACTS
  getContacts() {
    this.contactService.getAllData().subscribe(
      (resp) => {
        this.contacts = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /////////////////// OPEN Contact Details Page
  moreInfo(selectedId: String) {
    this.contactService.selectedId = selectedId;
    this.router.navigate(["contactDetails"]);
  }

  //////////////////// OPEN Edit Page
  editContact(selectedId: String) {
    this.contactService.selectedId = selectedId;
    this.router.navigate(["editContact"]);
  }

  //////////////////// DeleteContact
  deleteContact(selectedId: String) {
    this.contactService.selectedId=selectedId;
    this.dialog.open( ConfrimDialogComponent,{width:'300px' , height:'140px'})
  }

  //////////////////// Create New Contact
  createNewContact() {
    this.contactService.selectedId = "";
    this.router.navigate(["editContact"]);
  }
}
