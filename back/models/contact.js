const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    phone: String,
    phoneType: String,
    createdDate: { /// Automatic Initilation cuurent Date
        type: Date,
        default: Date.now()
    },
    modifiedDate: Date
})

const Contact = mongoose.model('Contact', ContactSchema); // create Contact Model

module.exports = Contact;