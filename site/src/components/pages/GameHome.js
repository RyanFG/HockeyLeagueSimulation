import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GameHome(){

    const [fileInfo, setFileInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/getFiles") 
        .then((response) => response.json())
        .then((data) => setFileInfo({files: data}));
    }, [fileInfo]);

    const showFiles = (files) => {
        return (<tr>
            <th scope="row">{files.file_name}</th>
            <td>{files.file_date.slice(0,10)}</td>
            <td>{String(files.active)}</td>
        </tr>);
    };

    return(
        <Row>
            <Col className="down3 text-center" style={{position:'absolute', fontSize:'275%', fontFamily:'Rockwell'}}>    
                <div>
                    Simulation Homescreen
                </div>  
            </Col>
            <Col>    
            <div className="container" style={{fontFamily:'Rockwell'}}>
                    <div className="row"><h2 className="down3 text-center" style={{fontSize:'250%'}}>Available Files</h2></div>
                    <div className="row">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">File Name</th>
                                    <th scope="col">File Date</th>
                                    <th scope="col">Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {fileInfo["files"]?.map(showFiles)}
                            </tbody>
                        </table>
                    </div>
                </div>
        </Col>
        </Row>
    );
}

export default GameHome;