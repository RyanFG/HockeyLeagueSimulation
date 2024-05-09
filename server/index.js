const  express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//Routes (Queries, look at previous db to know more)
//Create
app.post("/world_files", async(req,res) => {
    try{

        const {top_league,num_leagues} = req.body;
        const newFile = await pool.query(
            "INSERT INTO world_files (topLeague,num_leagues) VALUES($1)",
            [top_league,num_leagues]
        );

        res.json(newFile.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});
//Get

//Update

//Delete


app.listen(5000, () => {
    console.log("Server started on port 5000")
});
