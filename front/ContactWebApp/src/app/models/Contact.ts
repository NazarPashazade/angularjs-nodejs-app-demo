export class Contact {
  constructor(
    public _id: String,
    public firstName: String,
    public lastName: String,
    public phone: string,
    public phoneType: String,
    public createdDate: Date,
    public modifiedDate: Date
  ) {}
  
}
