// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import React from 'react'
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



const products = [
  
          {
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
        
 
];

const columns = [
  
            {
              "title": "Project Name",
              "onClick": true
            },
            {
              "title": "Description",
              "dataIndex": "description"
            },
            {
              "title": "Start Date",
              "dataIndex": "start_date"
            },
            {
              "title": "End Date",
              "dataIndex": "end_date"
            },
            {
              "title": "Company",
              "dataIndex": "company_name"
            },
            {
              "title": "Project Status",
              "dataIndex": "status"
            },
            {
              "title": "Action",
              "onClickAction": true,
              "dataIndex": ""
            }
          
        
      
];

const projectStatus = {
  0: 'All',
  1: 'In Progress',
  2: 'Completed'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

 function SelectFilter() {
  
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='project_code' isKey>Project Name</TableHeaderColumn>
        <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
        <TableHeaderColumn dataField='start_date'>Start Date</TableHeaderColumn>
        <TableHeaderColumn dataField='end_date'>End Date</TableHeaderColumn>
        <TableHeaderColumn dataField='company_name'>Company</TableHeaderColumn>
        <TableHeaderColumn dataField='status' filterFormatted dataFormat={ enumFormatter } formatExtraData={ projectStatus }
          filter={ { type: 'SelectFilter', options: projectStatus } }>Project Status</TableHeaderColumn>
          <TableHeaderColumn dataField=''>Action</TableHeaderColumn>
      </BootstrapTable>
    );
  }
  export default SelectFilter;