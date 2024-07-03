const router = require("express").Router();
const recipeController = require("../controllers/pet");
//const { isAuthenticated } = require("../middleware/authenticate");
//const validator = require("../middleware/recipeValidation")

router.get("/", petsController.getAll);
router.get("/:id", petsController.getSingle);
router.post("/create",isAuthenticated, validator.savePet, petsController.createPet);
router.put("/update/:id",isAuthenticated ,validator.updatePet, petsController.updatePet);
router.delete("/delete/:id",isAuthenticated, petsController.deletePet);

module.exports = router;
