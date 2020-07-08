import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/services/contacts.service";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';

@Component({
  selector: "app-confrim-dialog",
  templateUrl: "./confrim-dialog.component.html",
  styleUrls: ["./confrim-dialog.component.css"],
})
export class ConfrimDialogComponent implements OnInit {
  constructor(
    private contactService: ContactsService,
    private router: Router,
    private dialog:MatDialog
  ) {}

  ngOnInit() {}

  /// Delete Contact
  confrim() {
    this.router.navigate(["contacts"]);

    this.contactService
      .deleteDataById(this.contactService.selectedId)
      .subscribe(
        (resp) => {
          this.router.navigate([""]);
          this.dialog.ngOnDestroy()
        },
        (err) => {
          alert("Error");
        }
      );
  }
}
