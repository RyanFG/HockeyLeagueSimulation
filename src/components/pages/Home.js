import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){
    return(
        <Col className="down1 text-center">    
            <div>
                Welcome To Hockey League Simulation
            </div>

            <Button href="/Creation" variant="primary" size="lg">
                Create Simulation                        
            </Button>
            <Button href="/SaveFiles" variant="primary" size="lg">
                Load Simulation                        
            </Button>
        </Col>
    );
}

export default Home;