import axios from 'axios'; 

// import { API_URL } from '../../config/environment.js';
const { REACT_APP_API_URL } = process.env
const API_URL = REACT_APP_API_URL? REACT_APP_API_URL: `http://localhost:3001`;

export const GET_DEPLOYMENTS = "GET_VERCEL_D";
export const GET_PROJECTS = "GET_PROJECTS";
export const GET_HEALTH = "GET_HEALTH";


export const getDeployments = () => {
    return async function (dispatch) {
        axios.get(`${API_URL}/vercel/d`)
        .then(r=>dispatch({
            type: GET_DEPLOYMENTS,
            payload: r.data,
        })).catch(e=>dispatch({
            type: GET_DEPLOYMENTS,
            payload: e.message,
        }))
    }
};

export const getProjects = () => {
    return async function (dispatch) {
        axios.get(`${API_URL}/vercel/p`)
        .then(r=>dispatch({
            type: GET_PROJECTS,
            payload: r.data,
        })).catch(e=>dispatch({
            type: GET_PROJECTS,
            payload: e.message,
        }))
    }
};

export const getHealth = () => {
    return async function (dispatch) {
        axios.get(`${API_URL}/`)
        .then(r=>dispatch({
            type: GET_HEALTH,
            payload: r.data,
        })).catch(e=>dispatch({
            type: GET_HEALTH,
            payload: e.message,
        }))
    }
}