import { useState } from "react";

function BlueBox({buttonsClassname}) {
    const [getSzam, setSzam] = useState(0)

    return (
        <>
        <div style={
            {
                backgroundColor: "blue",
                color: "white",
                width: "200px",
                height: "200px"
            }}
            className='p-2 m-5 rounded'>
            <h2 style={{}} >{getSzam}</h2>
        </div>
        <button style={{width : "200px"}} className={buttonsClassname} onClick={() => { setSzam(getSzam + 1)}}>A szám növelése</button><br />
        <button style={{width : "200px"}} className={buttonsClassname} onClick={() => { setSzam(getSzam - 1)}}>A szám csökkentése</button>
        </>
    )
}


export default BlueBox;