import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Creation(){
    
    const fileCreate = async(event) => {
        console.log("here");
        event.preventDefeault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        console.log("started");

        try{
            const response = await fetch('http://localhost:3001/createFile', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });
            if(response.ok){
                const newFile = await response.json();
                console.log('New File:', newFile);
            }else{
                console.log("failed1");
                console.error('Failed ot create file:', response.statusText);
            }
        }catch(error){
            console.log("failed2");
            console.error('Error creating file:', error.message);
        }
        
    };
    
    return(
        
        <Form style={{fontFamily:'Rockwell'}} onSubmit={fileCreate}>
            <Col className="down3 text-center" style={{fontSize:'275%'}}>    
                Setup Your Simulation
            </Col>

            <Row>
                <Col xs={4} style={{paddingLeft:'10%',fontSize:'125%'}}>
                    <Form.Label>File Name</Form.Label>
                    <Form.Control placeholder="Enter File Name"/>
                </Col>
            </Row>

            <Col className="down3 text-center" style={{fontSize:'175%'}}>    
                Set League Information
            </Col>

            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={4} style={{paddingLeft:'10%'}}>
                    <Form.Label>League Name</Form.Label>
                    <Form.Control placeholder="Enter League Name"/>
                </Col>
                <Col xs={2}>
                    <Form.Label>League Abbreaviation</Form.Label>
                    <Form.Control placeholder="Enter Abbreaviation"/>
                </Col>
            </Row>

            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={4} style={{paddingLeft:'10%'}}>
                    <Form.Label>Number of Conferences</Form.Label>
                    <Form.Select aria-label="Select Value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Label>Number of Divisions Per Conference</Form.Label>
                    <Form.Select aria-label="Select Value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Label>Number of Teams Per Division</Form.Label>
                    <Form.Select aria-label="Select Value">
                        <option value="1">3</option>
                        <option value="2">4</option>
                        <option value="3">5</option>
                        <option value="4">6</option>
                        <option value="5">7</option>
                        <option value="6">8</option>
                        <option value="7">9</option>
                        <option value="8">10</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row className="down3" xs={6} style={{paddingLeft:'10%',fontSize:'125%'}}>
                <Button variant="success" size="lg">
                    Submit                        
                </Button>
            </Row>
        </Form>
    );
}

export default Creation;