import React, { useState, useEffect } from 'react';

const TableBody = (props) =>{
    return(
        <tbody>
            {props.data?.map((item, index) => {
           <tr>
           <td>{item?.project_code}</td>
           <td>{item?.description}</td>
           <td>{item?.start_date}</td>
           <td>{item?.end_date}</td>
           <td>{item?.company_name}</td>
           <td>{item?.status}</td>
           <td></td>
          
         </tr>
            })}
   
</tbody>

    )
}
export default TableBody;