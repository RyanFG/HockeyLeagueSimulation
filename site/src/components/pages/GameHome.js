import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GameHome(){
    return(
        <Row>
            <Col className="down3 text-center" style={{position:'absolute', fontSize:'275%', fontFamily:'Rockwell'}}>    
                <div>
                    Simulation Homescreen
                </div>  
            </Col>
        </Row>
    );
}

export default GameHome;