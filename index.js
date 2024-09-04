const express = require("express");

const { v4: uuidv4 } = require('uuid');

const app = express()
const cors = require("cors");
const pool = require("./db");
const PORT = 5000;


//Middleware
app.use(cors())
app.use(express.json());


// Routes

// Create a todo
app.post('/todos', async(req, res)=>{
    try{
        const {description} = req.body;
        const id = uuidv4(); 

        res.status(200).json({
            message: `todos are created ${id}, ${description}`
        })
        // const newTodo = await pool.query(
        //     'INSERT INTO todo (description) VALUES($1) RETURNING *', [description]
        // )
        // res.json(newTodo.rows[0])



    }catch(err){
        console.error(err.message);
    }
});

// get all todos

app.get('/todos', async(req, res)=>{
    try{
        
        res.status(200).json({
            message: "users are returned"
        })
        // const allTodo = await pool.query(
        //     'SELECT * FROM todo', [description]
        // )
        // res.json(allTodo.rows)

    }catch(error){
        res.json({
            error : error.message
        })
    }
});

app.listen(PORT,()=>{
    console.log(`kisi sayer ki gajal, jo de ru ko suku ke pal, koi mujko u mila he jece banjaar ko gar ${PORT}`);
})