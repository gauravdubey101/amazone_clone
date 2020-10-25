/* import React,{createContext,useContext,useReducer} from "react";
//prepare datalayer
export const StateContext = createContext();

export const StateProvider = ({
    reducer,initaialState,children
}) =>(<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>
);

//pull information form data layer
export const useStateValue  = ()=> useContext(StateContext); */