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
        // inserting data into database
        const newTodo = await pool.query("INSERT INTO users (id, description) VALUES($1, $2) RETURNING *", [id, description])


      
        res.status(200).json({
            message: `Todo created with ID: ${id}, Description: ${description}`,
            data: newTodo.rows  // 
        });
      



    }catch (err) {
        // Error handling
        console.error(err.message);
        res.status(500).json({
            message: "Failed to create todo",
            error: err.message
        });
    }
});

// get all todos

app.get('/todos', async(req, res)=>{
    try{
        
      
        const allTodo = await pool.query(
            'SELECT * FROM users'
        )
        res.status(200).json({
            message: "users are returned",
            data: allTodo.rows
        })
        

    }catch(error){
        res.json({
            error : error.message
        })
    }
});
app.get('/todos/:id', async(req, res)=>{
    try{
        
      
        const {id} = req.params;
        const todo = await pool.query(
            'SELECT * FROM users WHERE id=$1', [id]
        )
        res.status(200).json({
            message:`specific todos is returned`, data: todo.rows
            
        })
        

    }catch(error){
        res.json({
            error : error.message
        })
    }
});

app.listen(PORT,()=>{
    console.log(`kisi sayer ki gajal, jo de ru ko suku ke pal, koi mujko u mila he jece banjaar ko gar ${PORT}`);
})