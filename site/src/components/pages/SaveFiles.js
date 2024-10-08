import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function SaveFiles(){

    const [fileInfo, setFileInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/getFiles") 
        .then((response) => response.json())
        .then((data) => setFileInfo({files: data}));
    }, [fileInfo]);

    const showFiles = (files) => {
        return (
        
        <tr>
            <th scope="row">{files.file_name}</th>
            <td>{files.file_date.slice(0,10)}</td>
            <Button
                variant="primary"
                onClick={() => setFileActive(files.file_name)}
                href="/GameHome"
            >
                SELECT FILE
            </Button>
        </tr>
        
        );
    };

    const setFileActive = async(file_name) => {
        console.log(file_name);
        try{
            const response = await fetch(`http://localhost:3001/world_files/${file_name}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json',},
                body: JSON.stringify({}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); 
            } else {
                console.error('Failed to update file active status:', response.statusText);
            }
        } catch(error) {
            console.error('Error updating file active status:', error.message);
        }
    };
    

    return(
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
    );
}

export default SaveFiles;