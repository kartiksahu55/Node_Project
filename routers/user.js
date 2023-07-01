const userController = require("../Controller/user");
const express = require("express");
const routers = express.Router();

routers
  .post("/", userController.createuser)
  .get("/", userController.getAllusers)
  .get("/:id", userController.getuser)
  .put("/", userController.replaceuser)
  .patch("/", userController.updateuser)
  .delete("/:id", userController.deleteuser);

exports.routers = routers;
