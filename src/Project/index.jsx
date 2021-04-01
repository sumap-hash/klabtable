import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './table-Header';
import TableBody from './table-Body';
import * as tempData from './data.json'
import axios from 'axios';
const ProjectView = () => {
    const [serverData, setServerData] = useState(tempData);

const getServerData = () => {
     
    axios.get(' http://timeapi.kaaylabs.com/api/v1/project_view/ ')
    //    .then(res => {
    //      console.log(res.data);
    //      setServerData(res.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
      };

 useEffect(() => {
    getServerData();
        }, []);

    return(
        <div>
            <Table striped bordered hover>
                <TableHeader columns={serverData?.metaData?.columns} />
                <TableBody data={serverData?.data} />
            </Table>
        </div>
    )
    };
export default ProjectView;