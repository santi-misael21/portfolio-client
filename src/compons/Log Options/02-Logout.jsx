import React, { useState } from "react";
import Navsup from "../00-Nav_Sup";

export default function Logout(){
    
    let [enter, setEnter] = useState(false)
    return(
        <div>
            <div onMouseEnter={()=>setEnter(true)}>
                <Navsup ent={enter}/>
            </div>
            Soy Logout
        </div>
    )
}