import { GET_DEPLOYMENTS, GET_HEALTH, GET_PROJECTS } from '../actions';

const initialState= {
    deployments: {},
    projects: {},
    health: ''
};

const rootReducer = (state= initialState, action)=>{
    switch (action.type) {
        case GET_DEPLOYMENTS:
            return {
                ...state,
                deployments: action.payload,
        };
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        case GET_HEALTH:
            return {
                ...state,
                health: action.payload,
            }
        
        default: return state;
    };
};

export default rootReducer;