import React, {useState} from "react";
import Navsup from "../00-Nav_Sup";
import Formative from "./About/About";

export default function About(){

    let [enter, setEnter] = useState(false)

    return (
        <div>
            <div onMouseEnter={()=>setEnter(true)}>
                <Navsup ent={enter}/>
            </div>
            <div onClick={()=>setEnter(false)} className='about'>
                <h3>Carrera formativa</h3>
                <div className="career">
                    <div id="horiz">
                        <div>Carrera: <i>Full Stack Web Developer</i> </div>
                        <div>
                            <a href="https://certificates.soyhenry.com/cert?id=0ad242dc-bca6-4b0b-977a-dc346c60498c" rel="noreferrer" target='_blank'>
                                Certificado
                            </a> 
                        </div>
                    </div>
                    Tiempo dedicado: <br />
                    <div className="time">
                        <Formative color={'orangered'} desc={<b>{'Durante la cursada'}</b>}/>
                        <Formative desc={<b>Etapa</b>} weeks={<b>Semanas</b>} hours={<b>Horas</b>} time={<b>Abarcado</b>} />
                        <Formative desc='Etapa preparatoria' weeks='10 semanas' hours='+200 horas' time='Nov 2021 ~ Enero 2022' />
                        <Formative desc='Bootcamp: Módulos teóricos y ejercitativos' weeks='10 semanas' hours='+200 horas' time='Feb 2022 ~ Mayo 2022' />
                        <Formative color='green' desc={<b>Total</b>} weeks={<b>{'20 semanas'}</b>} hours={<b>{'+400 horas'}</b> }time={<b>{'Nov 2022 ~ Mayo 2022'}</b>} />
                        <Formative color={'orange'} desc={<b>{'Proyectos'}</b>}/>
                        <Formative desc='Labs: Proyecto individual' weeks='3 semanas' hours='+120 horas' time='Junio 2022' />
                        <Formative desc='Labs: Proyecto grupal ' weeks='3 semanas' hours='+120 horas' time='Julio 2022' />
                        <Formative color='orange' desc={<b>Subtotal</b>} weeks={<b>{'6 semanas'}</b>} hours={<b>{'+240 horas'}</b> }time={<b>{'Junio 2022 ~ Julio 2022'}</b>} />
                    </div>
                    <br /><br />
                    <div className="time">
                        <Formative color={'orangered'} desc={<b>{'Proyectos fuera de la cursada'}</b>}/>
                        <Formative desc={<b>Proyecto</b>} weeks={<b>Semanas</b>} hours={<b>Horas</b>} time={<b>Abarcado</b>} />
                        <Formative desc={<a href="https://sudo-qubs.vercel.app/" target='_blank' rel='noreferrer'>Sudoku</a>} weeks='8 semanas' hours='+480 horas' time='Ago 2022 ~ Oct 2022' />
                        <Formative desc={<a href="https://createreactapp-brown.vercel.app/" target='_blank' rel='noreferrer'>Relevamientos técnicos</a>} weeks='2 semanas' hours='+120 horas' time='5 dic 2022 ~ 21 dic 2022' />
                        <Formative desc={<a href="https://google.com" target='_blank' rel='noreferrer'>Portafolio personal</a>} weeks='8 semanas' hours='+240 horas' time='Nov 2022 ~ Enero 2023' />
                        <Formative color='orange' desc={<b>Subtotal</b>} weeks={<b>{'10 semanas'}</b>} hours={<b>{'+360 horas'}</b> }time={<b>{'Ago 2022 ~ Enero 2023'}</b>} />
                        <Formative color='green' desc={<b>Total</b>} weeks={<b>{'16 semanas'}</b>} hours={<b>{'+600 horas'}</b> }time={<b>{'Junio 2022 ~ Enero 2023'}</b>} />
                    </div>
                </div>
            </div>
        </div>
    )
}