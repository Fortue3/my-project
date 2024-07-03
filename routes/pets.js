const router = require("express").Router();
const petControllers = require("../controllers/pet");


router.get("/", petControllers.getAllPets);
router.get("/:id", petControllers.getSingle);
router.post("/create", petControllers.createPet);
router.put("/update/:id", petControllers.updatePet);
router.delete("/delete/:id", petControllers.deletePet);

module.exports = router;
