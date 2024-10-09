import { createContext, useReducer } from "react";

const initialState = {
    name: "USA",
    zoom: 4,
    center: { lat: 39, lng: -96 }
};

const globalReducer  = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "ZOOM":
            return { ...state, zoom: payload }
        case "CENTER":
            return { ...state, center: payload }
        case "NAME":
            return { ...state, name: payload }
        default: 
            return state
    }
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);
    const Zoom = (val) => {
        dispatch({
            type: "ZOOM",
            payload: val
        })
    }
    const Center = (obj) => {
        dispatch({
            type: "CENTER",
            payload: obj
        })
    }
    const Name = (str) => {
        dispatch({
            type: "NAME",
            payload: str
        });
    }
    return(
        <GlobalContext.Provider value={{state, Zoom, Center, Name}}>
            { children }
        </GlobalContext.Provider>
    )
}