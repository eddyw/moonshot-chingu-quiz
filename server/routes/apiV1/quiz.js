const express = require("express");
const { get, getById, post } = require("../../controllers/apiV1/quiz");

const router = express.Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", post);

module.exports = router;
