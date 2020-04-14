const express = require("express");
const router = express.Router();

const userController = require("./../controllers/user-controller");

router.post("/", userController.post);

router.get("/", userController.getAll);

router.get("/:userId", userController.get);

router.put("/:userId", userController.put);

router.delete("/:userId", userController.delete);

module.exports = router;
