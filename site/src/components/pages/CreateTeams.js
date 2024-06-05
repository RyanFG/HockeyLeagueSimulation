import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateTeams(){

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
    ]

    return(
        <Row>
            <Col className="down3 text-center" style={{position:'absolute', fontSize:'275%', fontFamily:'Rockwell'}}>    
                <div>
                    Team Creation
                </div>  
            </Col>
        </Row>
    );
}

export default CreateTeams;