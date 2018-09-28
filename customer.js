import React from 'react'
import {CustData} from './data'

export const Customers = ()=>{
    var name="Harsh";
    var email = "harsh@gmail.com";
    return(
        <Customer name={name} email={email}/>
    );
}
 export const NewCus = ()=>{
     var clist = CustData.map((c)=>{
         return(
             <div>
                 <Customer name={c.name} email={c.email}/>
            </div>
         )
     })
     return(
         <div>
             {clist}
         </div>
     )
 }
export const Customer = (props)=>{
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Email : {props.email}</p>
        </div>
    );
}