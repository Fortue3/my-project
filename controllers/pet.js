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


exports.getSingle = async (req, res)=>{
    try{
      const petsId = req.params.id;
      console.log(petsId)
      const contact = await Pets.findById(petsId)
    
      res.status(200).json({data:pets})
     
    }
    catch(err) {
      console.log(err,"Could not get pet by id")
    }
    };

// POST /pets
exports.createPet =async(req, res) =>{
try{
    const newPets =  {
    petName: req.body.petName,
    petColor: req.body.petColor,
    species: req.body.species,
    gender: req.body.gender
    }
      const aNewPet = await Pets.create(newPets)
      res.status(201).json({data:aNewPet})
      }catch(err) {
       res.status(500).json({err: "Error occured"})
      }
    };


// PUT /pets/:id
exports.updatePet = async (req, res) => {
    try{
        const petsId = req.params.id;
        console.log(petsId)
        const body = req.body
        console.log(body)
        const update = Pets.findByIdAndUpdate(petsId, body)
         res.status(201).json ({data:update}) 
    
     
        } catch(err) {
            throw Error("fail to update", err);
        }
    };


// DELETE /pets/:id
exports.deletePet = async (req, res) => {
try{
    const petsId = req.params.id;
    console.log(petsId)
    const body = req.body
    console.log(body)
    const deleteOne = Pets.findByIdAndDelete(petsId, body)
    res.status(201).json ({data:deleteOne}) 
    
     
    } catch(err) {
            throw Error("fail to delete", err);
    }
};
