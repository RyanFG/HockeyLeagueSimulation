import React from "react";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConfDivSetup(){

    // const [league, setLeague] = useState([]);
    // const [conf, setConf] = useState([]);
    const [divBtn,setDivBtn] = useState([{id:1,dis:true},{id:2,dis:true}]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveLeague")
    //     .then((response) => response.json())
    //     .then((data) => setLeague({active: data}));
    // }, [league]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveConf")
    //     .then((response) => response.json())
    //     .then((data) => setConf({active: data}));
    // }, [conf]);

    const league = [
        {
         league_id: 0,
         leagueName: "NHL",
         numConferences: 2,
         DivsPerConf: 2,
         NumTeams: 32
     }
     ];

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

    const disableBtn = (event,id) => {
        event.currentTarget.disabled = true;
        const nextDivBtn = [...divBtn];
        const btn = nextDivBtn.find(
            
        )
        console.log(nextDivBtn);
        setDivBtn(nextDivBtn);
    };

    const disableDivBtn = () => {
        setDivBtn(true);
    };

    const createConf = async(e) => {
        try{
            e.preventDefault();

            const data = {
                leagueID: league[0].league_id.valueOf(),
                confName: e.confName.value
            };

            console.log(data);

            const response = await fetch('http://localhost:3001/createConf', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });
            if(response.ok){
                const newConf = await response.json();
                console.log('New Conference:', newConf);
            }else{
                console.log("failed1");
                console.error('Failed to create conference:', response.statusText);
            }

        }catch(err){
            console.log("failed2");
            console.error('Error creating conference:', err.message);
        };
    };

    createDiv = async (e) => {
        try{
            e.preventDefault();

            const conf_id = 0;
            for(let i=0;i < conf.length;i++){
                if(conf[i].ConfName == e.ConfName.value){
                    conf_id = conf[i].Conf_id;
                }
            }

            const data = {
                leagueID: league[0].league_id.valueOf(),
                divName: e.divName.value,
                confID: conf_id,
                numTeams: ((league[0].NumTeams)/(league[0].DivsPerConf*league[0].numConferences)).valueOf()
            };

            console.log(data);

            const response = await fetch('http://localhost:3001/createDiv', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });
            if(response.ok){
                const newDiv = await response.json();
                console.log('New Division:', newDiv);
            }else{
                console.log("failed1");
                console.error('Failed to create division:', response.statusText);
            }
        }
        catch(err){
            console.log("failed2");
            console.error('Error creating division:', err.message);
        }
    }

    function showConf(league){
        const confs = [];
        const divs = [];
        for(let i=0; i < parseInt(league[0].numConferences); i++){
            confs.push(i+1); 
        };
        for(let j=0; j < parseInt(league[0].DivsPerConf); j++){
            divs.push(j+1);
        };
        console.log(confs,divs);

        return confs.map((id1) => {
            return <Form onSubmit={createConf}>
                <Row style={{paddingTop:'1%', fontSize:'125%', fontFamily:'Rockwell'}}>
                    <Col xs={5}>
                        <Row style={{paddingTop:'3%'}}>
                            <Col>
                                <Form.Label>Conference #{id1} Name</Form.Label>
                                <Form.Control type="text" name="confName" placeholder="Enter Conference Name"/>
                            </Col>
                            <Col style={{paddingLeft:'5%'}}>
                                <Button style={{position:'absolute',marginTop:'1.5%'}} type="submit" variant="primary" size="lg" onClick={(e,id1) => disableBtn(e,id1)}>
                                    Confirm
                                </Button>                    
                            </Col>
                        </Row>
                        <Row>
                            {showDiv(divs,id1)}
                        </Row>
                    </Col>
                </Row>
            </Form>
        })
    };

    function showDiv(divs,id1){
        return divs.map((id2) => {
            return <Form style={{paddingTop:'1%',paddingLeft:'5%', fontSize:'100%', fontFamily:'Rockwell'}} onSubmit={createDiv}>
                <Row>
                    <Col>
                        <Form.Label>Division #{id2} Name</Form.Label>
                        <Form.Control type="text" name="divName" placeholder="Enter Division Name"/>
                    </Col>
                    <Col>
                        <Button style={{position:'absolute',marginTop:'1.5%'}} type="submit" variant="primary" size="lg" onClick={(e) => disableDivBtn(e)} disabled={divBtn[id1-1].dis}>
                            Confirm
                        </Button>
                    </Col>
                </Row>
            </Form>
        });
    };  

    return(
        <div>
        <Row>
            <Col className="text-center" style={{position:'absolute', fontSize:'275%', fontFamily:'Rockwell', paddingTop:'2%'}}>    
                <div>
                    {league.leagueName} Conference and Division Setup
                </div>  
            </Col>
        </Row>

        <Row style={{paddingLeft:'4%', paddingTop:'5%'}}>
            <div className="down3">
                <Form>
                    {showConf(league)}
                </Form>
                <Button href="/CreateTeams" style={{position:'absolute',marginTop:'1.5%'}} type="submit" variant="primary" size="lg">
                    Create Teams
                </Button>
            </div>
        </Row>
        </div>
    );
}

export default ConfDivSetup;