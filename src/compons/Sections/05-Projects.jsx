import React, {useState} from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDeployments } from "../../redux/actions";
import Navsup from "../00-Nav_Sup";
import { findRepsDeployments } from "./Projects/Auxiliar";
import Eachone from "./Projects/Eachone";

export default function Projects(){

    let [enter, setEnter] = useState(false);
    let [filtered, setFiltered] = useState(undefined);
    let [units, setUnits] = useState([]);
    let [deps, setDeps] = useState();

    let dispatch = useDispatch()
    let deployments = useSelector(state => state.deployments);

    useEffect(()=>{  
        if (!Object.keys(deployments).length) dispatch(getDeployments()) 
    });

    console.log(deployments)

    return (
        <div>
            <div onMouseEnter={()=>setEnter(true)}>
                <Navsup ent={enter}/>
            </div>

            {/* Somos los Projects
            {(Object.keys(deployments).length > 0 && ' Deployments cargados') || ' Sin cargar'} */}
            <div className="projects" onClick={()=>setEnter(false)}>
            {
                Object.keys(deployments).length > 0 && 
                // deployments.deployments && 
                    findRepsDeployments(deployments.deployments).map((d,i) => <Eachone 
                    key={i} 
                    name={d.name} 
                    url={d.url} 
                    email={d.creator.email} 
                    githubLogin={d.creator.githubLogin} 
                    inspectorUrl={d.inspectorUrl} 
                    target={d.target} 
                    githubRepo={d.meta.githubRepo} 
                /> )
            }
            </div>
        </div>
    )
}