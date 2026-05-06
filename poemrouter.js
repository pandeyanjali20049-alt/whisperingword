const express = require("express");
const router = express.Router();
const poemController = require("../controllers/poemcontroller");

router.post("/submit", poemController.addPoem);
router.get("/allpoems", poemController.getPoems);

module.exports = router;