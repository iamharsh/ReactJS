import React from 'react'

const cities = [
    {name:"Gurgaon", code:"GGN"},
    {name:"Delhi", code:"DLI"},
    {name:"Hyderabad", code:"HYD"},
    {name:"Noida", code:"NOI"}
    ];

export var City = () =>{
    var clist = cities.map((c)=>{
        return(
            <option value={c.code}>{c.name}</option>
        )
    })
    return(
        <div>
            <select>
                {clist}
            </select>
        </div>
    )
}