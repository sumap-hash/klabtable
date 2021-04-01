import React, { useState, useEffect } from 'react';

const TableHeader = (props) =>{
    return(
        <thead>
            {props.metadata?.columns?.map(item =>{
               <tr>
               <th key={item.title}>{item.title}</th> 
               </tr> 
             })}
      
      </thead>

    )
}
export default TableHeader;