const {Router} = require("express");

const UsersControllers = require("../Controllers/UsersController");

const usersController = new UsersControllers();

const UsersRoutes = Router();


UsersRoutes.post("/",usersController.create);

module.exports = UsersRoutes;