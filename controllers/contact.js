const db = require('../models/index');
const Contacts = db.contacts;
// GET /contacts
exports.getAllContacts = async (req, res) => {
  // try {
  //   const contacts = await Contacts.find();
  //   res.json(contacts);
  // } catch (err) {
  //   res.status(500).json({ error: 'Internal server error' });
  // }
  res.send('message')
};

exports.getSingle = async (req, res)=>{
try{
  const contactsId = req.params.id;
  console.log(contactsId)
  const contact = await Contacts.findById(contactsId)

  res.status(200).json({data:contact})
 
}
catch(err) {
  console.log(err,"Could not get contact by id")
}
};


// POST /contacts
exports.createContact =async(req, res) =>{
  const newContacts =  {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    town: req.body.Town,
    age: req.body.age,
    phonenumber: req.body.phonenumber
  }
try{
 const newContact = new Contacts(req.body)
  const aNewContact = await newContact.save()
  res.status(201).json(aNewContact)
  }catch(err) {
   
   res.status(500).json({err: "Error occured"})
  }
}

// PUT /contacts/:id
exports.updateContact = async (req, res) => {
try{
    const contactsId = req.params.id;
    console.log(contactsId)
    const body = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          address: req.body.address,
          town: req.body.Town,
          age: req.body.age,
          phonenumber: req.body.phonenumber
        }
    console.log(body)
    const update = await Contacts.findByIdAndUpdate(contactsId, body,
      {new: true, runValidators: true}
    )
     res.json({data:update}) 

 
    } catch(err) { 
      console.error(err)
        res.status(500).json({message: "error updating the contact"});
    }
}

// DELETE /contacts/:id
exports.deleteContact = async (req, res) => {
try{
      const contactsId = req.params.id;
      console.log(contactsId)
      const deleteOne = await Contacts.findByIdAndDelete(contactsId)
       res.status(201).json ({data:deleteOne}) 
  
   
      } catch(err) {
          throw Error("fail to delete", err);
      }
  };