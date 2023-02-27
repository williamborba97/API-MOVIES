const AppError = require ("../utils/appError");

class UsersControllers{
    create (request,response){
        const {name,email,password} = request.body;

        if(!name || !email){
            throw new AppError("É necessario preencher todos os campos obrigatorios.");
        }
    
        response.json({name,email,password})
    };
};

module.exports = UsersControllers;