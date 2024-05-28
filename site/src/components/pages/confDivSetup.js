import React from "react";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function confDivSetup(){

    // const [league, setLeague] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveLeague")
    //     .then((response) => response.json())
    //     .then((data) => setLeague({active: data}));
    // }, [league]);

    const league = {
        numConferences: 2,
        DivsPerConf: 2,
    };

    const disableBtn = (event) => {
        event.currentTarget.disabled = true;
    };

    function showConf(league){
        const confs = [];
        const divs = [];
        for(let i=0; i < parseInt(league.numConferences); i++){
            confs.push(i+1); 
        };
        for(let j=0; j < parseInt(league.DivsPerConf); j++){
            divs.push(j+1);
        };
        console.log(confs,divs);
        return confs.map((id1) => {
            return <Form>
                <Row style={{paddingTop:'1%', fontSize:'125%', fontFamily:'Rockwell'}}>
                    <Col xs={3} >
                        <Form.Label>Conference #{id1} Name</Form.Label>
                        <Form.Control type="text" name="confName" placeholder="Enter Conference Name"/>
                    </Col>
                    <Col>
                        <Button style={{position:'absolute',marginTop:'1.5%'}} type="submit" variant="primary" size="lg" onClick={(e) => disableBtn(e)}>
                            Confirm
                        </Button>                    
                    </Col>
                    <Row>
                        {showDiv(divs)}
                    </Row>
                </Row>
            </Form>
        })
    };

    function showDiv(divs){
        return divs.map((id2) => {
            return <Form style={{paddingTop:'1%',paddingLeft:'4%', fontSize:'100%', fontFamily:'Rockwell'}}>
                <Row>
                    <Col xs={3}>
                        <Form.Label>Division #{id2} Name</Form.Label>
                        <Form.Control type="text" name="divName" placeholder="Enter Division Name"/>
                    </Col>
                    <Col>
                        <Button style={{position:'absolute',marginTop:'1.5%'}} type="submit" variant="primary" size="lg" onClick={(e) => disableBtn(e)}>
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
                    Conference and Division Setup
                </div>  
            </Col>

        </Row>
        <Row style={{paddingLeft:'4%', paddingTop:'5%'}}>
            <div className="down3">
                {showConf(league)}
            </div>
        </Row>
        </div>
    );
}

export default confDivSetup;