import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Contact } from "../models/Contact";
import { API_URL } from "../consts/Constants";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  selectedId: String = "";

  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get<Contact[]>(`${API_URL}`);
  }

  getDataById(contactId: String) {
    return this.http.get<Contact>(`${API_URL}/${contactId}`);
  }

  deleteDataById(contactId: String) {
    return this.http.delete(`${API_URL}/${contactId}`);
  }

  addData(newContact: Contact) {
    return this.http.post(`${API_URL}`, newContact);
  }

  updateData(contactId: String, newContact: Contact) {
    return this.http.put(`${API_URL}/${contactId}`, newContact);
  }
}
