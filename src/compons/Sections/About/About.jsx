import React from "react";

export default function Formative ({desc, weeks, hours, time, color}){
    return (
        <div className="formative" >
            <div id="horiz">
                <div id="locker" style={{color}}>
                    {desc}
                </div>{ (weeks || hours || time )&& 
                <div id="lockerson" >
                    <div id="locker" style={{color}}>
                        {weeks? weeks : ''}
                    </div>
                    <div id="locker" style={{color}}>
                        {hours? hours : ''}
                    </div>
                    <div id="locker" style={{color}}>
                        {time? time : ''}
                    </div>
                </div>}
            </div>
        </div>
    )
}