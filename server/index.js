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
        const {file_name,league_name,lg_abbrv,lg_lvl,numConf,numDiv,teamPerDiv,GP_div,GP_conf,GP_other,
            sim_method,PO_team_div,PO_format,draft,num_draft_rounds} = req.body;

        // const newFile = await pool.query(
        //     "INSERT INTO world_file (file_name,active,file_date) VALUES ($1,True,'2024-09-01')",
        //     [file_name]
        // );
        // const newLeague = await pool.query(
        //     "INSERT INTO League (file_name,leagueName,LeagueAbrv,DivsPerConf,numConferences,numTeams,) VALUES ($1,$2,$3,$5,$4,$6)",
        //     [file_name,league_name,lg_abbrv,parseInt(numConf),parseInt(numDiv),parseInt(numConf)*parseInt(numDiv)*parseInt(teamPerDiv)]
        // );

        res.json(newFile.rows[0]);
        //res.json(newLeague.rows[0]);

    }catch(err){
        console.error(err.message);
    }
});

app.post("createConf",async(req,res) => {
    try{
        const {leagueID,confName} = req.body;

        const newConf = await pool.query(
            "INSERT INTO Conference (league_id,confName) VALUES ($1,$2)",
            [leagueID,confName]
        );

        res.json(newConf.rows[0]);
    }catch(err){
        console.err0r(err.message);
    }
});
//Get
app.get("/getFiles", async(req,res) => {
    try{
        const files = await pool.query(
            "SELECT * FROM world_file"
        );

        res.json(files.rows);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});

app.get("/getActiveLeague", async(req,res) => {
    try{
        const league = await pool.query("SELECT league_id,NumConferences,DivsPerConf FROM League l, world_files f, WHERE f.active = true AND l.file_name = f.file_name");

        res.json(league.rows);
    }catch{

    }
});

//Update

//Delete


app.listen(3001, () => {
    console.log("Server started on port 3001")
});
