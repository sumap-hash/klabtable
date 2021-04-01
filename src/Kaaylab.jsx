
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


export default function TableView(props) {
    const [tablehead, setTablehead] = useState([]);
    const [tablebody, setTablebody] = useState();
   

   
useEffect(() => {
tablehead(props.id);
tablebody(props.id);
}, [props.id]);

// const getdata = (tableData, index) => {
//     return(
//       <tr key = {index}>
//       <td>{table.project_id}</td>
       
//     </tr>
//     )
//   }




  return (
   
    <div className = "TableView">
     <table>
  <thead> 
 {tablehead?.map(item => ( 
        <tr> 
          <th key={item.project_id}>{item.title}
         </th>
        </tr>    
         ))}
  
  </thead> 
 </table> 
 </div>

);
   }










    // useEffect(async () => {
    //     const res = await axios(
    //         'http://timeapi.kaaylabs.com/api/v1/project_view/'
    //     );
    //   tablehead(res.coloums);
    //   });

    //   };

   
    

    
