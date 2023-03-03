const {Router} = require("express");

const UsersControllers = require("../Controllers/UsersController");

const UsersRoutes = Router();

const usersController = new UsersControllers();



UsersRoutes.post("/",usersController.create);
UsersRoutes.put("/:id",usersController.Update);

module.exports = UsersRoutes;