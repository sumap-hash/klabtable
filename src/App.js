import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
//import React from 'react'
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';

import axios from 'axios';
import TableView from './Kaaylab';



export default function App(props)
{
  const [tablehead, setTablehead] = useState({columns:[]});
  const [tablebody, setTablebody] = useState();
  const GetserverData = () => {
     if(props.id)  
    axios.get(' http://timeapi.kaaylabs.com/api/v1/project_view/ ')
      
      .then(res => {
         tablehead(res.columns.tablehead);
          tablebody(res.data);
        })
        .catch(err => {
          console.log(err);
        });

 useEffect(() => {
        GetserverData();
         }, [props.id]);
        }

  
  return (
  <TableView data={tablehead} />
  
);
  }
 