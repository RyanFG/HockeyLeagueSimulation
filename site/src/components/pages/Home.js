import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){
    return(
        <Row>
            <Col className="down5 text-center" style={{position:'absolute', fontSize:'275%', fontFamily:'Rockwell'}}>    
                <div>
                    Welcome To Hockey League Simulation
                </div>
                <div>
                    <Button href="/Creation" variant="primary" size="lg">
                        Create Simulation                        
                    </Button>
                </div>
                <div style={{paddingTop:'1%'}}>
                    <Button href="/SaveFiles" variant="primary" size="lg">
                        Load Simulation                        
                    </Button>
                </div>    
            </Col>
        </Row>
    );
}

export default Home;