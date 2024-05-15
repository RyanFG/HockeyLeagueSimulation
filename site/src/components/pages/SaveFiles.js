import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SaveFiles(){

    const [fileInfo, setFileInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/getFiles") 
        .then((response) => response.json())
        .then((data) => setFileInfo({files: data}));
    }, [fileInfo]);

    const showFiles = (files) => {
        return (<tr>
            <th scope="row">{files.file_name}</th>
            <td>{files.file_date}</td>
            <Button
                onClick={() => updateFile(files.active)}
                variant="primary"
                href="/game_home"
            >
                SELECT FILE
            </Button>
        </tr>);
    };

    const updateFile = async(file_active) => {
        try{
            const response = await fetch(`http://localhost:3001/world_files/${file_active}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json',},
                body: JSON.strongify({}),
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