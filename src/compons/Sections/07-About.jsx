import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDeployments } from "../../redux/actions";
import Navsup from "../00-Nav_Sup";
import Formative from "./About/About";
import { findRepsDeployments } from "./Projects/Auxiliar";

export default function About(){

    let [enter, setEnter] = useState(false)
    let [amount, setAmount] = useState('')

    let dispatch = useDispatch()
    let deps = useSelector(state=> state.deployments)
    
    useEffect(()=>{  
        if (!Object.keys(deps).length) dispatch(getDeployments()) 
    });

    deps.deployments && !amount && setAmount(findRepsDeployments(deps.deployments).length)

    return (
        <div className="general-about">
            <div onMouseEnter={()=>setEnter(true)}>
                <Navsup ent={enter}/>
            </div>
            <div onClick={()=>setEnter(false)} className='about'>
                <div className="career">
                    <h3>Sobre mí</h3>
                    <div id="horiz-resp">
                        <div id="intro">¡Hola! me llamo Santiago Álamos. Realicé la carrera de <i>Desarrollador Web Full Stack</i> en <a href="https://soyhenry.com" target='_blank' rel='noreferrer'>Henry</a>, la cual asciende a <b>+800 horas</b> de estudio conformadas por material teórico y por proyectos web, los cuales pueden verse desplegados en la sección <Link to='/projects' id="link">proyectos</Link>. 
                        <br /> Como background a esta profesión, estudio inglés desde los 8 años, llegando a alcanzar un nivel C2. También estudié electrónica en una escuela técnica, donde adquirí mi primer aprendizaje sobre desarrollo de software, llegando a realizar dos proyectos con Arduino en lenguaje C++: 
                        <br /><a href="https://docs.google.com/document/d/0BzfT5C_u3DitWGNsTUltSzFnX0Q4WWw5UHIzbnVzSDA5TzE0/edit?usp=share_link&ouid=111395990762785644141&resourcekey=0-BD-uhz2mf9y6H_Dqq_zoKA&rtpof=true&sd=true" target='_blank' rel='noreferrer'> -Asistente de Movilidad Vertical</a>
                        <br />
                        <a href="https://photos.app.goo.gl/RgyGZiRZnVGFF4HY9" target='_blank' rel='noreferrer'>-Control de electrodomésticos por conexión bluetooth</a>
                        <br />
                        Actualmente estoy en búsqueda de alguna posición acorde a mi perfil, para poder crecer profesional y, ante todo, personalmente. </div>
                        <div id="right">
                            <div id="exp">
                                <div id="title">Experiencia</div>
                                <div>+1 año</div>
                            </div>
                            <div id="hs">
                                <div id="title">Horas de práctica</div>
                                <div>+1080 horas en proyectos</div>
                            </div>
                            <Link to="/projects" id='prs' >
                                        <div className="link-prs" >Proyectos</div>
                                        <div className="link-prs">{amount}</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="career">
                <h3>Carrera formativa</h3>
                    <div id="horiz">
                        <div>Carrera: <i>Full Stack Web Developer</i> </div>
                        <div>
                            <a href="https://certificates.soyhenry.com/cert?id=0ad242dc-bca6-4b0b-977a-dc346c60498c" rel="noreferrer" target='_blank'>
                                Ver certificado
                            </a> 
                        </div>
                    </div>
                    Tiempo dedicado: <br />
                    <div className="time">
                        <Formative color={'orangered'} desc={<b>{'Durante la cursada'}</b>}/>
                        <Formative desc={<b>Etapa</b>} weeks={<b>Semanas</b>} hours={<b>Horas</b>} time={<b>Abarcado</b>} />
                        <Formative desc='Preparativa' weeks='10 semanas' hours='+300 horas' time='Nov 2021 ~ Enero 2022' />
                        <Formative desc='Bootcamp' weeks='10 semanas' hours='+300 horas' time='Feb 2022 ~ Mayo 2022' />
                        <Formative color='green' desc={<b>Total Bootcamp</b>} weeks={<b>{'20 semanas | +4 meses'}</b>} hours={<b>{'+600 horas'}</b> }time={<b>{'Nov 2022 ~ Mayo 2022'}</b>} />
                        <Formative color={'orange'} desc={<b>{'Proyectos'}</b>}/>
                        <Formative desc={<a href="https://pi-food-main-umber.vercel.app/" target='_blank' rel='noreferrer'>{'Individual'}</a>} weeks='3 semanas' hours='+120 horas' time='Junio 2022' />
                        <Formative desc={<a href="https://www.youtube.com/watch?v=8JYQKiN6lv4&t=2s" target='_blank' rel='noreferrer'>{'Grupal'}</a>} weeks='3 semanas' hours='+120 horas' time='Julio 2022' />
                        {/* <Formative color='orange' desc={<b>Subtotal</b>} weeks={<b>{'6 semanas'}</b>} hours={<b>{'+240 horas'}</b> }time={<b>{'Junio 2022 ~ Julio 2022'}</b>} /> */}
                    </div>
                    <br /><br />
                    <div className="time">
                        <Formative color={'orange'} desc={<b>{'Proyectos fuera de la cursada'}</b>}/>
                        <Formative desc={<b>Proyecto</b>} weeks={<b>Semanas</b>} hours={<b>Horas</b>} time={<b>Abarcado</b>} />
                        <Formative desc={<a href="https://sudo-qubs.vercel.app/" target='_blank' rel='noreferrer'>Sudoku</a>} weeks='8 semanas' hours='+480 horas' time='Ago 2022 ~ Oct 2022' />
                        <Formative desc={<a href="https://createreactapp-brown.vercel.app/" target='_blank' rel='noreferrer'>Relevamientos técnicos</a>} weeks='2 semanas' hours='+120 horas' time='5 dic 2022 ~ 21 dic 2022' />
                        <Formative desc={<a href="https://google.com" target='_blank' rel='noreferrer'>Portafolio personal</a>} weeks='8 semanas' hours='+240 horas' time='Nov 2022 ~ Enero 2023' />
                        {/* <Formative color='orange' desc={<b>Subtotal</b>} weeks={<b>{'10 semanas'}</b>} hours={<b>{'+360 horas'}</b> }time={<b>{'Ago 2022 ~ Enero 2023'}</b>} /> */}
                        <Formative color='green' desc={<b>Total Proyectos</b>} weeks={<b>{'24 semanas | +5 meses'}</b>} hours={<b>{'+1080 horas'}</b> }time={<b>{'Junio 2022 ~ Enero 2023'}</b>} />
                    </div>
                </div>
            </div>
        </div>
    )
}