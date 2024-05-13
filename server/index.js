const  express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//Routes (Queries, look at previous db to know more)
//Create
app.post("/createFile", async(req,res) => {
    try{
        console.log("Creation Started");
        const {file_name,league_name,lg_abbrv,numConf,numDiv,teamPerDiv} = req.body;
        const newFile = await pool.query(
            "INSERT INTO world_file (file_name,active,file_date) VALUES ($1,True,'2024-09-01')",
            [file_name,league_name,lg_abbrv,parseInt(numConf),parseInt(numDiv),parseInt(numConf)*parseInt(numDiv)*parseInt(teamPerDiv)]
        );
        console.log("File Created");
        const newLeague = await pool.query(
            "INSERT INTO League (file_name,leagueName,LeagueAbrv,DivsPerConf,numConferences,numTeams,) VALUES ($1,$2,$3,$5,$4,$6)",
            [file_name,league_name,lg_abbrv,parseInt(numConf),parseInt(numDiv),parseInt(numConf)*parseInt(numDiv)*parseInt(teamPerDiv)]
        );

        res.json(newFile.rows[0]);
        res.json(newLeague.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});
//Get

//Update

//Delete


app.listen(3001, () => {
    console.log("Server started on port 3001")
});
