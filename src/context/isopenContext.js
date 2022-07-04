import { createContext, useReducer } from "react";
import IsopenReducer from "./isopenReducer";

const INITIAL_STATE = {
    isOpen: false,
    isMizedOpen:false,
    allMaximize:false,
    singleOpened:false,
    arrowUp:false,
    accordionOpen:false,
    colorPrimary:""
  };

  export const IsopenContext = createContext(INITIAL_STATE);

  export const IsopenContextProvider = ({children}) =>{
      const [state,dispatch] = useReducer(IsopenReducer,INITIAL_STATE)
      return(
          <IsopenContext.Provider value={{accordionOpen:state.accordionOpen, colorPrimary:state.colorPrimary,arrowUp:state.arrowUp, isOpen:state.isOpen,isMizedOpen:state.isMizedOpen,allMaximize:state.allMaximize,singleOpened:state.singleOpened, dispatch}}>
            {children}
          </IsopenContext.Provider>
      )
  }