import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";

function CreateTeams(){
    const firstNames = [];
    const lastNames = [];


    // const [league, setLeague] = useState([]);
    // const [conf, setConf] = useState([]);
    // const [div, setDiv] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveLeague")
    //     .then((response) => response.json())
    //     .then((data) => setLeague({active: data}));
    // }, [league]);
    const league = [
       {
        league_id: 0,
        leagueName: "NHL",
        numConferences: 2,
        DivsPerConf: 2,
        NumTeams: 32
    }
    ];

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveConf")
    //     .then((response) => response.json())
    //     .then((data) => setConf({active: data}));
    // }, [conf]);
    const conf = [
        {
        Conf_id:0,
        ConfName: "East"
    },
        {
        Conf_id:1,
        ConfName: "West"
    }
    ];

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveDiv")
    //     .then((response) => response.json())
    //     .then((data) => setDiv({active: data}));
    // }, [div]);
    const div = [
        {
            div_id:0,
            Conf_id:0,
            DivName: "Atlantic"
        },
        {
            div_id:1,
            Conf_id:0,
            DivName:"Metro"
        },
        {
            div_id:2,
            Conf_id:1,
            DivName:"Central"
        },
        {
            div_id:3,
            Conf_id:1,
            DivName:"Pacific"
        }
    ];

    function confShow(league,conf,div){

        const teams = [];

        for(let i=0; i < (parseInt(league[0].NumTeams)/((parseInt(league[0].numConferences))*(parseInt(league[0].DivsPerConf)))); i++){
            teams.push(i+1);
        }
        console.log(conf);

        return conf.map((c) => {
           return <div>
                <Row style={{paddingTop:'0%', fontSize:'250%', fontFamily:'Rockwell'}}>
                    {c.ConfName} Conference
                </Row>
                <Row>
                    {divShow(league,div,teams,c)}
                </Row>
            </div>
        });
    };

    function divShow(league,div,teams,c){
        const d = [];
        for(let j = 0; j < ((parseInt(league[0].numConferences))*(parseInt(league[0].DivsPerConf))); j++){
            if(div[j].Conf_id == c.Conf_id){
                d.push(div[j]);
            };
        };
        console.log(d);

        return d.map((d) => {
            return <div style={{paddingTop:'0.5%',paddingLeft:'2%', fontSize:'125%', fontFamily:'Rockwell'}}>
                <Row style={{fontSize:'150%'}}>
                    {d.DivName} Division
                </Row>
                <Row>
                    {createT(teams,d,league)}
                </Row>
            </div>
        });
    };

    function createT(teams,d,league){
        return teams.map((t) => {
            return <Form onSubmit={createTeamQuery}>
                <Row style={{}}>
                    <Col xs={2}>
                        <Form.Label>Team #{t} City</Form.Label>
                        <Form.Control type="text" name="cityName" placeholder="Enter City Name"/>
                    </Col>
                    <Col xs={2}>
                        <Form.Label>Team #{t} Nickname</Form.Label>
                        <Form.Control type="text" name="nickname" placeholder="Enter Nickname"/>
                    </Col>
                    <Col>
                        <Button style={{position:'absolute',marginTop:'1.5%'}} variant="primary" size="lg">
                            Confirm
                        </Button>
                    </Col>
                </Row>
            </Form>
        });
    };

    const createTeamQuery = async(e) => {

    };

    const createPlayerQuery = async(e) => {

    };

    function createTeamPlayers(){
        for(let i=0; i < parseInt(league.NumTeams); i++){
            for(let LW=0; LW < 5; LW++){
                createPlayer("LW",);
            }
            for(let C=0; C < 5; C++){
                createPlayer("C");
            }
            for(let RW=0; RW < 5; RW++){
                createPlayer("RW");
            }
            for(let LD=0; LD < 4; LD++){
                createPlayer("LD");
            }
            for(let RD=0; RD < 4; RD++){
                createPlayer("RD");
            }
            for(let G=0; G < 3; G++){
                createPlayer("G");
            }
        }
    }

    function createPlayer(pos){
        const player = {
            position: pos,
            firstName: firstNames[randomInt(0,firstNames.length-1)],
            lastName: lastNames[randomInt(0,lastNames.length-1)],
            age: randomInt(18,35),
            rating: randomInt(65,95),
            salary: 0,
            years: randomInt(1,5)
        };
    
        if(player.rating < 80 || player.age <= 22){
            player.salary = 750000;
            player.years = 2;
            if(player.years <= 20){
                player.years = 3;
            }
        }else if(player.rating > 79 && player.rating < 82){
            player.salary = 1500000;
        }else if(player.rating > 81 && player.rating < 85){
            player.salary = 3000000;
        }else if(player.rating > 84 && player.rating < 87){
            player.salary = 5000000;
        }else if(player.rating > 86 && player.rating < 90){
            player.salary = 8000000;
        }else{
            player.salary = 10500000;
        }
        createPlayerQuery
    }

    function randomInt(min,max){
        const minCeil = Math.ceil(min);
        const maxFloor = Math.floor(max);
        return Math.floor(Math.random()*(maxFloor-minCeil +1) + minCeil);
    }

    return(
        <div>
            <Row>
                <Col className="text-center" style={{position:'absolute', fontSize:'275%', fontFamily:'Rockwell', paddingTop:'2%'}}>    
                    <div>
                        {league[0].leagueName} Team Setup
                    </div>  
                </Col>
            </Row>
            <Row>
                <Col style={{paddingLeft:'4%', paddingTop:'5%'}}>    
                    <div>
                        {confShow(league,conf,div)}
                    </div>  
                </Col>
                <Col>
                    <Button style={{position:'absolute',marginTop:'1.5%'}} onclick={createTeamPlayers()} variant="primary" size="lg">
                        Complete Team Creation
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default CreateTeams;