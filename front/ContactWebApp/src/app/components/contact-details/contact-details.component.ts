import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/services/contacts.service";
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"],
})
export class ContactDetailsComponent implements OnInit {

  createdDate:String="";
  modifiedDate:String="";


  constructor(private contactService: ContactsService) {}

  selectedContact: Contact=new Contact("","","","","",new Date(),new Date);

  ngOnInit() {
    this.getContactById();
  }

 ///////////// GET CONTACT BY ID
 getContactById() {
  this.contactService.getDataById(this.contactService.selectedId).subscribe(
    (resp) => {
      this.createdDate=(resp.createdDate+"").substring(0,10)
      this.modifiedDate=(resp.modifiedDate+"").substring(0,10)
      this.selectedContact = resp;
    },
    (err) => {
      console.log(err);
    }
  );
}
}
