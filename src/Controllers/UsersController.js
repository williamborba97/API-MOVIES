const {hash,compare} = require ("bcryptjs");
const AppError = require ("../utils/appError");
const knex = require("../database/knex")

class UsersControllers{
   async create (request,response){
        const {name,email,password} = request.body;

        if(!name || !email){
            throw new AppError("É necessario preencher todos os campos obrigatorios.");
        }

        const hashedPassword = await hash(password,8);
         await knex("users").insert({
            name,
            email,
            password:hashedPassword
        });

        response.status(201).json()
    };
};

module.exports = UsersControllers;