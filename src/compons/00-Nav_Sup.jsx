import React, { useState } from "react";
import { Link } from "react-router-dom";
// import GoogleLogin from "react-google-login";
import '../styles/nav_sup.css';
import logotype from "../images/1454827.png";

export default function Navsup({ent}){

    //LOCAL STATES
    let [enter, setEnter] = useState("")
        //RIGHT-SIDE NAV
    let [menu, displayMenu] = useState(false)
    let [elem, setElem] = useState()    
        //LEFT-SIDE NAV
    let [leftmenu, displayLeftMenu] = useState(false)
    let [elemleft, setElemLeft] = useState()    
    
    //CONDITIONS
    if(!ent && menu) displayMenu(false)
    if(!ent && leftmenu) displayLeftMenu(false)

    //DATA
    let list= ["English", "Español"]
    let routes= ["https://drive.google.com/file/d/1FEayO1DXcdfBJFRTN5pW8yF2CyKCVGy0/view?usp=share_link", "https://drive.google.com/file/d/1MOMqtNJSWi7h5kMAVANOCrkW3lMEmVkI/view?usp=share_link"]
    let sections= [/*"blog", */"projects",/* "contact", */"about"]

    //FUNCTIONS
    function chngInput(e){
        let val= e.target.value
        // console.log(e.target.value, val)
        if (val===""){
            return setEnter("")
        }
        return setEnter(val)
    }

    function onEnter(e){
        let val= e.target.innerText
        list.forEach((l,i)=> {if(l===val) return setElem(i)})
    }
    function onLeave(){
        return setElem()
    }

    function onEnterLeft(e){
        let val= e.target.innerText
        sections.forEach((l,i)=> {if(l.slice(0,1).toLocaleUpperCase()+l.slice(1,l.length)===val) return setElemLeft(i)})        
    }
    function onLeaveLeft(){
        return setElemLeft()
    }

    function f5(){
        console.log(1324)
    }
    // const responseGoogle = (response) => {
    //     console.log(response)
    // }

    return(
        <div className="divnavsup">
            <div id="fixedforslide"><span>↕</span><span className={ent ? 'comedown':''} >{ent && 'Click out to hide'}</span><span>↕</span></div>
            <div className={ent? 'enter':'hide'} onClick={()=>{displayMenu(false); displayLeftMenu(false)}}>
                {ent && 
                <span className="spangeneral">
                    <span className="logo" >
                        <Link to='/' onMouseEnter={()=>f5()}>
                            <img src={logotype} alt="" width='26px' />
                        </Link>
                    </span>
                    <span className="navsupcontent">
                        <span className="left">
                            <label className="menu" 
                            // onClick={()=>{ displayLeftMenu(true); displayMenu(false)}} 
                            onMouseMove={()=>{displayLeftMenu(true); displayMenu(false)}} 
                            // onMouseLeave={()=>displayMenu(false)}
                            >
                                Sections
                                {/* <input type='search' list="log" placeholder="Enter a phrase for help"/> */}
                            </label>
                            {leftmenu && <div className="divoflist" 
                            // onMouseEnter={()=>displayMenu(true)}
                            >
                                {sections.map((l,i)=><Link key={i} to={`/${sections[i]}`}><button className="list" id={elemleft===i? 's':''} onMouseEnter={(e)=>onEnterLeft(e)} 
                                onMouseLeave={()=>onLeaveLeft()} >{l.slice(0,1).toLocaleUpperCase()+l.slice(1,l.length)}</button></Link>)}
                            </div>}
                        </span>
                        <span className="middle">
                            <label>
                                <input type="text"  className="input" list="frameworks" onChange={(e)=>chngInput(e)} placeholder="Enter a phrase for help"/>
                            </label>{enter!=="" &&
                            <datalist id="frameworks">
                                <option value="Random"></option>
                                <option value="Undefined"></option>
                                <option value="Anotherone"></option>
                            </datalist>}
                        </span>
                        <span className="right">
                            <label className="menu" 
                            // onClick={()=>{displayMenu(true); displayLeftMenu(false)}} 
                            onMouseMove={()=>{displayMenu(true); displayLeftMenu(false)}} 
                            // onMouseLeave={()=>displayMenu(false)}
                            >
                                {'Resume'}
                                {/* <input type='search' list="log" placeholder="Enter a phrase for help"/> */}
                            </label>
                            {menu && <div className="divoflist" 
                            // onMouseEnter={()=>displayMenu(true)}
                            >
                                {list.map((l,i)=><a key={i} href={routes[i]} target='_blank' rel="noreferrer"><button className="list" id={elem===i? 's':''} onMouseEnter={(e)=>onEnter(e)} 
                                onMouseLeave={()=>onLeave()} >{l}</button></a>)}
                            </div>}
                            <datalist id="log">
                                {list.map((l,i)=><option key={i} value={l}></option>)}
                            </datalist>
                            {/* <GoogleLogin
                                clientId="891166692728-dd16ccbpj6peq9jq18a5moqot74pm3rv.apps.googleusercontent.com"
                                
                                buttonText="Login"
                                onSuccess={(response)=>responseGoogle(response)}
                                onFailure={(response)=>responseGoogle(response)}
                                cookiePolicy={'single_host_origin'}
                            /> */}

                        </span>
                    </span>
                </span>
                }
            </div>
            <br /><br />

            {//acá empieza el quilombo}
            }
        </div>
    )
}