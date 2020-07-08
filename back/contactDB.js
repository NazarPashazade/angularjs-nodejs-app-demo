const express = require('express')
const router = express.Router();
const Contact = require('./models/contact');



////////////////////// Find All Contacts
router.get('/', async(req, resp) => {
    try {
        const allContacts = await Contact.find();
        resp.json(allContacts)
    } catch (err) {
        resp.json({ message: "Error" })
    }


})



////////////////////// Find Contact By Id
router.get('/:contactId', async(req, resp) => {

    const contact = await Contact.findById({ _id: req.params.contactId })
    try {
        resp.json(contact)
    } catch (err) {
        resp.json({ message: "Error" })
    }
})



////////////////////// Save Contact
router.post('/', async(req, resp) => {

    const newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        phoneType: req.body.phoneType,
        createdDate: req.body.createdDate,
        modifiedDate: req.body.modifiedDate
    })
    try {
        const savedContact = await newContact.save();
        resp.json(savedContact);
    } catch (err) {
        resp.json({ message: "Error" })
    }
})


////////////////////// DELETE Contact By Id
router.delete('/:contactId', async(req, resp) => {
    try {
        const deletedPost = await Contact.remove({ _id: req.params.contactId })
        resp.json({ message: "Success" })
    } catch (err) {
        resp.json({ message: "Error" })
    }
})




// UPDATE Contact By Id
router.put('/:contactId', async(req, resp) => {
    try {
        const updatedContact = await Contact.updateOne({ _id: req.params.contactId }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                phoneType: req.body.phoneType,
                modifiedDate: req.body.modifiedDate
            }
        })
        resp.json(updatedContact)

    } catch (err) {
        resp.json({ message: "Error" })
        console.log(err)
    }
})

module.exports = router;