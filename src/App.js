//import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import React from 'react'
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';


const dummyTable = [{
        "project_id": 35,
        "project_code": "Traffic JAM",
        "description": "traffic jam",
        "start_date": "2020-06-01",
        "end_date": "2020-12-31",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 34,
        "project_code": "Abstrax",
        "description": "Abstrax",
        "start_date": "2020-06-01",
        "end_date": "2020-12-31",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 33,
        "project_code": "Rivet",
        "description": "Rivet",
        "start_date": "2019-08-14",
        "end_date": "2021-08-14",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 32,
        "project_code": "Adfarm TV App",
        "description": "Adfarm TV App",
        "start_date": "2019-08-10",
        "end_date": "2020-08-14",
        "company_name": "KaayLabs",
        "status": "Completed"
      },
      {
        "project_id": 31,
        "project_code": "Adfarm-Admin",
        "description": "Adfarm-Admin",
        "start_date": "2019-08-14",
        "end_date": "2020-08-14",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 30,
        "project_code": "Adfarm-Connect",
        "description": "Adfarm-Connect",
        "start_date": "2019-08-10",
        "end_date": "2020-08-14",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 29,
        "project_code": "AGM-Chithra",
        "description": "AGM - Chithra",
        "start_date": "2019-08-11",
        "end_date": "2019-09-15",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 28,
        "project_code": "JingleBID",
        "description": "JingleBID",
        "start_date": "2019-07-01",
        "end_date": "2019-12-31",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 27,
        "project_code": "Glofox",
        "description": "Glofox",
        "start_date": "2019-01-01",
        "end_date": "2025-08-09",
        "company_name": "KaayLabs",
        "status": "Completed"
      },
      {
        "project_id": 26,
        "project_code": "Mouser",
        "description": "Mouser ",
        "start_date": "2019-03-01",
        "end_date": "2025-08-09",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 25,
        "project_code": "DataBP",
        "description": "DataBP",
        "start_date": "2019-01-01",
        "end_date": "2023-08-09",
        "company_name": "KaayLabs",
        "status": "In Progress"
      },
      {
        "project_id": 24,
        "project_code": "SMCApp",
        "description": "SMCApp - Web/Android",
        "start_date": "2019-02-26",
        "end_date": "2019-03-26",
        "company_name": "160 Hours",
        "status": "Completed"
      },
      {
        "project_id": 23,
        "project_code": "Adhoc work",
        "description": "Adhoc work",
        "start_date": "2019-01-20",
        "end_date": "2019-06-30",
        "company_name": "160 Hours",
        "status": "Completed"
      },
      {
        "project_id": 22,
        "project_code": "E2E - Web",
        "description": "Welcome to Engineers To Entrepreneurs",
        "start_date": "2019-01-30",
        "end_date": "2019-02-28",
        "company_name": "160 Hours",
        "status": "Completed"
      },
      {
        "project_id": 20,
        "project_code": "AccuRadio",
        "description": "Accuradio has both android and ios apps that has bugs that needs to be fixed.",
        "start_date": "2018-12-01",
        "end_date": "2019-10-31",
        "company_name": "KaayLabs",
        "status": "Completed"
      },
      {
        "project_id": 19,
        "project_code": "FamTyme",
        "description": "FamTyme React Native Mobile App",
        "start_date": "2018-12-27",
        "end_date": "2019-02-08",
        "company_name": "KaayLabs",
        "status": "Completed"
      },
      {
        "project_id": 18,
        "project_code": "Adfarm Uber",
        "description": "AD Management Application",
        "start_date": "2018-12-01",
        "end_date": "2019-01-31",
        "company_name": "160 Hours",
        "status": "Completed"
      },
      {
        "project_id": 17,
        "project_code": "Resident App",
        "description": "Resident Management Application",
        "start_date": "2018-12-01",
        "end_date": "2018-12-31",
        "company_name": "160 Hours",
        "status": "Completed"
      },
      {
        "project_id": 16,
        "project_code": "Vision",
        "description": "Adfarm-Vision",
        "start_date": "2018-11-01",
        "end_date": "2019-01-31",
        "company_name": "160 Hours",
        "status": "Completed"
      },
      {
        "project_id": 15,
        "project_code": "E2E - Mobile",
        "description": "Engineers to Entrepreneurs",
        "start_date": "2018-12-03",
        "end_date": "2019-01-31",
        "company_name": "160 Hours",
        "status": "Completed"
      },
      {
        "project_id": 14,
        "project_code": "Timesheet",
        "description": "Timesheet Application",
        "start_date": "2018-12-01",
        "end_date": "2019-01-15",
        "company_name": "160 Hours",
        "status": "Completed"
      }
    ]
   
    
  const projectStatus ={
    0:'In Progress',
    1:'Completed',
    2:'None'
    
  }


 function KlabProject() {

// const viewData = JSON.parse(JSON.stringify(dummyTable));
// console.log(viewData);


//   const [table, setTable] = useState(viewData);

// }
const [status, setStatus] = useState();
  const getdata = (compdata, index) => {
    return(
      <tr key = {index}>
      <td>{compdata.project_id}</td>
      <td>{compdata.project_code}</td>
      <td>{compdata.start_date}</td>
      <td>{compdata.end_date}</td>
      <td>{compdata.company_name}</td>
      <td>{compdata.status}</td>  
    </tr>
    )
  }

 return (
   <div className = "KlabProject"  style={{ padding: '30px' }}>
     
     {/* <ReactBootstrap.Table striped bordered hover> */}
     <Table striped bordered hover> 
  <thead>
    <tr>
      <th>Project Name</th>
      <th>Description</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Company</th>
      <th>Project Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {dummyTable.map(getdata)}
  </tbody>
 </Table>
{/* </ReactBootstrap.Table> */}
</div>

 );
 }

 export default KlabProject;


