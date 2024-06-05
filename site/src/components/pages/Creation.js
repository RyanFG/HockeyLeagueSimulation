import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Creation(){
    
    const [boxToggle, setBoxToggle] = React.useState([{id:0, name:"hasDraft" ,status:true}]);

    const fileCreate = async(e) => {
        try{
            console.log(e.target.fileName.value);
            e.preventDefault()
            const data = {
                file_name: e.target.fileName.value,
                league_name: e.target.leagueName.value,
                lg_abrv: e.target.leagueAbrv.value,
                lq_lvl: e.target.compLvl.value.charAt(0),
                numConf: e.target.numConf.value,
                numDiv: e.target.numDiv.value,
                teamPerDiv: e.target.teamPerDiv.value,
                GP_Div: e.target.GP_Div.value,
                GP_Conf: e.target.GP_Conf.value,
                GP_Other: e.target.GP_Other.value,
                sim_method: e.target.sim_method.value,
                PO_team_div: e.target.PO_team_div.value,
                PO_format: e.target.PO_format,
                draft: e.target.hasDraft.value,
                num_draft_rounds: e.target.draft_rounds.value
            };
            console.log(data);

        
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
                console.error('Failed to create file:', response.statusText);
            }
        }catch(error){
            console.log("failed2");
            console.error('Error creating file:', error.message);
        }
        
    };
    
    const hasDraft = (id) => {
        
        setBoxToggle(
            boxToggle.map((box) => box.id === id? {...box, status:!box.status}:box)
        );

        try{
            var checked = document.getElementById("hasDraft")?.checked;
            document.getElementById("draft_rounds").disabled = !checked;
        }catch(error){
            console.log(error);
        }
    }

    return(
        
        <Form style={{fontFamily:'Rockwell'}} onSubmit={fileCreate}>
            <Col className="down3 text-center" style={{fontSize:'275%'}}>    
                Setup Your Simulation
            </Col>

            <Row>
                <Col xs={4} style={{paddingLeft:'10%',fontSize:'125%'}}>
                    <Form.Label>File Name</Form.Label>
                    <Form.Control type="text" name="fileName" placeholder="Enter File Name"/>
                </Col>
            </Row>

            <Col className="down3 text-center" style={{fontSize:'175%'}}>    
                Set League Information
            </Col>

            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={4} style={{paddingLeft:'10%'}}>
                    <Form.Label>League Name</Form.Label>
                    <Form.Control  type="text" name="leagueName" placeholder="Enter League Name"/>
                </Col>
                <Col xs={2}>
                    <Form.Label>League Abbreaviation</Form.Label>
                    <Form.Control  type="text" name="leagueAbrv" placeholder="Enter Abbreaviation"/>
                </Col>
                <Col xs={2}>
                    <Form.Label>Competition Level</Form.Label>
                    <Form.Select  type="text" name="compLvl" aria-label="Select Level">
                        <option value="1">1 - House League</option>
                        <option value="2">2 - Junior League</option>
                        <option value="3">3 - Development League</option>
                        <option value="4">4 - Lower Level Pro League</option>
                        <option value="5">5 - Top Professional League</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={4} style={{paddingLeft:'10%'}}>
                    <Form.Label>Number of Conferences</Form.Label>
                    <Form.Select  type="text" name="numConf" aria-label="Select Value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Label>Number of Divisions Per Conference</Form.Label>
                    <Form.Select  type="text" name="numDiv" aria-label="Select Value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Label>Number of Teams Per Division</Form.Label>
                    <Form.Select  type="text" name="teamPerDiv" aria-label="Select Value">
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

            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={4} style={{paddingLeft:'10%'}}>
                    <Form.Label>Games VS Team in Division</Form.Label>
                    <Form.Select  type="text" name="GP_Div" aria-label="Select Value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Label>Games VS Team in Conference</Form.Label>
                    <Form.Select  type="text" name="GP_Conf" aria-label="Select Value">
                        <option value="1">0</option>
                        <option value="2">1</option>
                        <option value="3">2</option>
                        <option value="4">3</option>
                        <option value="5">4</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Label>Games VS Team in Other Conference</Form.Label>
                    <Form.Select  type="text" name="GP_Other" aria-label="Select Value">
                        <option value="1">0</option>
                        <option value="2">1</option>
                        <option value="3">2</option>
                        <option value="4">3</option>
                        <option value="5">4</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={3} style={{paddingRight:'5%', paddingTop:"2%"}}>
                    {boxToggle.map((box) => {
                        const {id, name, status} = box;
                        return(
                            <>
                                <Form.Check label="Has A Draft" type="checkbox" name="hasDraft" reverse checked={status} onClick={() => hasDraft(id)}/>
                            </>
                        );
                    })}
                    
                </Col>
                <Col xs={3}>
                    <Form.Label>Number of Draft Rounds</Form.Label>
                    <Form.Select  type="text" name="draft_rounds" aria-label="Select Value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Col>
            </Row>
            
            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={4} style={{paddingLeft:'10%'}}>
                    <Form.Label>Number of Playoff Teams Per Division</Form.Label>
                    <Form.Select  type="text" name="PO_team_div" aria-label="Select Value">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">4</option>
                        <option value="4">6</option>
                    </Form.Select>
                </Col>
                <Col xs={3}>
                    <Form.Label>Playoff Format</Form.Label>
                    <Form.Select  type="text" name="PO_format" aria-label="Select Value">
                        <option value="1">Division-1 1 VS Division-1 Botttom</option>
                        <option value="2">Division-1 1 VS Division-2 Bottom</option>
                        <option value="3">League 1 VS League Bottom</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row style={{fontSize:'125%',paddingTop:'1%'}}>
                <Col xs={4} style={{paddingLeft:'10%'}}>
                    <Form.Check label="Default Sim Style" type="switch" name="sim_method" checked="True" disabled/>
                </Col>
            </Row>

            <Row className="down3" xs={6} style={{paddingLeft:'10%',fontSize:'125%'}}>
                <Button href="/confDivSetup" type="submit" variant="primary" size="lg">
                    Submit                        
                </Button>
            </Row>
        </Form>
    );
}

export default Creation;