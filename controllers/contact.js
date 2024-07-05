const Contacts = require('../models/contact');
// GET /contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
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
try{
  const newContacts =  {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      town: req.body.Town,
      age: req.body.age,
      phonenumber: req.body.phonenumber,
  }
  const aNewContact = await Contacts.create(newContacts)
  res.status(201).json({data:aNewContact})
  }catch(err) {
   res.status(500).json({err: "Error occured"})
  }
}

// PUT /contacts/:id
exports.updateContact = async (req, res) => {
try{
    const contactsId = req.params.id;
    console.log(contactsId)
    const body = req.body
    console.log(body)
    const update = Contacts.findByIdAndUpdate(contactsId, body)
     res.status(201).json ({data:update}) 

 
    } catch(err) {
        throw Error("fail to update", err);
    }
}

// DELETE /contacts/:id
exports.deleteContact = async (req, res) => {
try{
      const contactsId = req.params.id;
      console.log(contactsId)
      const body = req.body
      console.log(body)
      const deleteOne = Contacts.findByIdAndDelete(contactsId, body)
       res.status(201).json ({data:deleteOne}) 
  
   
      } catch(err) {
          throw Error("fail to delete", err);
      }
  };