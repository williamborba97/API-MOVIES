const {Router} = require("express");

const UsersControllers = require("../Controllers/UsersController");

const UsersRoutes = Router();

const usersController = new UsersControllers();



UsersRoutes.post("/",usersController.create);

module.exports = UsersRoutes;