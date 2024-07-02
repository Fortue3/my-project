const express = require('express');
const router = express.Router();
//const MongoClient = mongodb.MongoClient;
const uri = process.env.MONGODB_URI;
const ContactController = require('../controllers/contact');

// GET /contacts
router.get('/', ContactController.getAllContacts);
router.get('/', async (req, res) => {
    try {
      const client = await MongoClient.connect(uri);
      const db = client.db();
      const contacts = await db.collection('contacts').find().toArray();
      res.json(contacts);
      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  //get one/ contact
  router.get('/:id', ContactController.getSingle);

// POST /contacts
router.post('/', ContactController.createContact);
router.post('/', async (req, res) => {
    try {
      const client = await MongoClient.connect(uri);
      const db = client.db();
      const newContact = { name: req.body.name, email: req.body.email }; // Assuming name and email are sent in the request body
      const result = await db.collection('contacts').insertOne(newContact);
      res.status(201).json(result.ops[0]);
      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// PUT /contacts/:id
router.put('/:id', ContactController.updateContact);

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      
      const client = await MongoClient.connect(uri);
      const db = client.db();
      const result = await db.collection('contacts').updateOne(
        { _id: mongodb.ObjectID(id) },
        { $set: { name, email } }
      );
      
      if (result.modifiedCount === 0) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      
      res.json({ message: 'Contact updated successfully' });
      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// DELETE /contacts/:id
router.delete('/:id', ContactController.deleteContact);

router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      
      const client = await MongoClient.connect(uri);
      const db = client.db();
      const result = await db.collection('contacts').deleteOne({ _id: mongodb.ObjectID(id) });
      
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      
      res.status(204).end();
      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;

