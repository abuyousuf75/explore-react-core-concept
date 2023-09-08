import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const handelAdd = ()=>{
        const newTeam = team+1;
        setTeam(newTeam);
    };
    const handelRemove = ()=>{
        const newTeam = team-1;
        setTeam(newTeam)
    }
    const teamStyle = {
        margin :'20px',
        padding:'20px',
        borderRadius : '20px',
        border: '2px solid purple',
    }
    return (
        <div style={teamStyle}>
            <h2>Players:{team} </h2>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelRemove}>Remove</button>
        </div>
    )
}