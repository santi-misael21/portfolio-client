import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getHealth } from "../../redux/actions";

export default function Health() {

    let dispatch = useDispatch();
    let health = useSelector(state => state.health);

    useEffect(()=>{
        if(!health){
            dispatch(getHealth())
        }
    }); console.log(health)

    return (
        <div>
            {'I am the Health component. \n Which is my status?'} <br />
            {'Status: '}
            {
                health.status && health.status || health || ''
            }
        </div>
    )
};