import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/services/contacts.service";
import { Contact } from "src/app/models/Contact";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.css"],
})
export class EditContactComponent implements OnInit {
  selectedContact: Contact = new Contact(
    "",
    "",
    "",
    "",
    "Work",
    new Date(),
    new Date()
  );

  isShowDate: Boolean = true;
  infoMessage: String = "";
  welcomeMessage: String = "";
  createdDate:String="";
  modifiedDate:String="";

  constructor(
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.contactService.selectedId) {
      this.welcomeMessage = "Edit Contact Page";
      this.getContactById();
    } else {
      this.welcomeMessage = " New Contact Page";
      this.isShowDate = false;
    }
  }


  //////////////////   SAVE Button Click
  save() {
    let regexpNumber = new RegExp(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/); ///// REGAX --- (055) 236-5265

    if (regexpNumber.test(this.selectedContact.phone)) {
      if (
        this.selectedContact.firstName &&
        this.selectedContact.lastName &&
        this.selectedContact.phone &&
        this.selectedContact.phoneType
      ) {
        if (this.contactService.selectedId == "") {
          ///////////////////////////////////////////////////   Create New Contact
          this.contactService.addData(this.selectedContact).subscribe(
            (resp) => {
              this.router.navigate([""]);
              alert("Succesfully Added");
            },
            (err) => {
              console.log(err);
            }
          );
        } else {
          ////////////////////////////////////////////////  Update Selected Contact
          this.selectedContact.modifiedDate = new Date(); /// Automatic-generate current Date
          this.contactService
            .updateData(this.contactService.selectedId, this.selectedContact)
            .subscribe(
              (resp) => {
                this.router.navigate([""]);
                alert("Succesfully Update");
              },
              (err) => {
                console.log(err);
              }
            );
        }
      } else {
        this.infoMessage = "Please Fill In Empty Fields";
      }
    } else {
      this.infoMessage = "Invalid Phone Number Format";
    }
  }



  ///////////////////  GET CONTACT BY ID
  getContactById() {
    this.contactService.getDataById(this.contactService.selectedId).subscribe(
      (resp) => {
        this.selectedContact = resp;
        this.createdDate=(resp.createdDate+"").substring(0,10)
        this.modifiedDate=(resp.modifiedDate+"").substring(0,10)
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
