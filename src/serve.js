require ("express-async-errors");

const database = require("./database/sqlite");

const AppError = require ("./utils/appError");

const express = require ("express");

const app = express();

const routes = require ("./routes");

app.use(express.json());

app.use(routes);

database();

app.use((error,request,response,next)=>{
    
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status:"error",
            message:error.message})
    }

    console.log(error)

    return response.status(500).json({
        status:"error",
        message:"internal server error"
    })
});


const PORT = 3000;

app.listen(PORT,()=>
console.log(`server is running on port ${PORT}`)
);