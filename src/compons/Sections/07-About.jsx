import React, {useState} from "react";
import Navsup from "../00-Nav_Sup";

export default function About(){

    let [enter, setEnter] = useState(false)

    return (
        <div>
            <div onMouseEnter={()=>setEnter(true)}>
                <Navsup ent={enter}/>
            </div>

            Soy el About me <br />
            {/* Hola me llamo Pisculichi y me gusta el fútbol y el rugby <br /> */}
            Complete the next sentence: <br />
            She <input style={{width: '25px'}} type="text" /> 8 years old
        </div>
    )
}