const ObjectId = require("mongodb").ObjectId;
const Pets = require('../models/pets');
// GET /pets
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pets.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSingle = async(req, res)=>{
  if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to find a contact.');
      }
  const petsId = new ObjectId(req.params.id);
  pets.find({_id: petsId}).then((pets) =>{
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(pets[0])
  }).catch((err) => {
      throw Error("error with getSingle function in the user controller", err);
  })
}

// POST /pets
exports.createPet =(req, res) =>{
  const newDoc = new pets({
      petName: req.body.petName,
      petColor: req.body.petColor,
      species: req.body.species,
      gender: req.body.gender,
      
  })


  newDoc.save(newDoc).then((data) => {
      res.send(data);
  }).catch((err) =>{
      throw Error("error occured", err);
  })
}

// PUT /pets/:id
exports.updatePet = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const petsId = new ObjectId(req.params.id);
    const newDoc = {}
        if (req.body.petName !== undefined) newDoc.petName = req.body.petName;
        if (req.body.petColor !== undefined) newDoc.petColor= req.body.petColor;
        if (req.body.species !== undefined) newDoc.species = req.body.species;
        if (req.body.gender !== undefined) newDoc.gender = req.body.gender;

    

  pets.updateOne({_id: petsId}, {$set: newDoc})
    .then((data) => {
        res.send(data);
    }).catch((err) =>{
        throw Error("fail to update", err);
    })
}

// DELETE /pets/:id
exports.deletePet = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const petId = new ObjectId(req.params.id);
    pets.deleteOne({_id: petsId})
    .then((data) => {
        res.setHeader("Content-Type", "application/json");
        res.send(data);
    }).catch((err) =>{
        throw Error("fail to delete", err);
    })
};
