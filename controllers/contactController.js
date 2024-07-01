const ObjectId = require("mongodb").ObjectId;
const Contact = require('../models/contact');
const contacts = database.contacts;
// GET /contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSingle = (req, res)=>{
  if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to find a contact.');
      }
  const contactsId = new ObjectId(req.params.id);
  contacts.find({_id: contactsId}).then((contacts) =>{
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(contacts[0])
  }).catch((err) => {
      throw Error("error with getSingle function in the user controller", err);
  })
}

// POST /contacts
exports.createContact =(req, res) =>{
  const newDoc = new contacts({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      town: req.body.town,
      age: req.body.age,
      phonenumber: req.body.phonenumber,
  })


  newDoc.save(newDoc).then((data) => {
      res.send(data);
  }).catch((err) =>{
      throw Error("error occured", err);
  })
}

// PUT /contacts/:id
exports.updateContact = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const contactsId = new ObjectId(req.params.id);
    const newDoc = {}
        if (req.body.firstName !== undefined) newDoc.firstName = req.body.firstName;
        if (req.body.lastName !== undefined) newDoc.lastName= req.body.lastName;
        if (req.body.address !== undefined) newDoc.address = req.body.address;
        if (req.body.town !== undefined) newDoc.town = req.body.town;
        if (req.body.age!== undefined) newDoc.age = req.body.age;
        if (req.body.phonenumber !== undefined) newDoc.phonenumber = req.body.phonenumber;
    

  contacts.updateOne({_id: contactsId}, {$set: newDoc})
    .then((data) => {
        res.send(data);
    }).catch((err) =>{
        throw Error("fail to update", err);
    })
}

// DELETE /contacts/:id
exports.deleteContact = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const userId = new ObjectId(req.params.id);
    contacts.deleteOne({_id: contactsId})
    .then((data) => {
        res.setHeader("Content-Type", "application/json");
        res.send(data);
    }).catch((err) =>{
        throw Error("fail to delete", err);
    })
};

module.exports = {
getAll,
getSingle,
createContact,
updateContact,
deleteContact
};