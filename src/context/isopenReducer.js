const IsopenReducer = (state, action) => {
    switch (action.type) {
      case "MIXEDOPENSHOW": {
        return {
            isMizedOpen: !state.isMizedOpen,
        };
      }
      case "ALLMAXIMIZE": {
        return {
          allMaximize: !state.allMaximize,
        };
      }
      case "SINGLEOPENED": {
        return {
          singleOpened: !state.singleOpened,
        };
      }
      case "ARROWUP": {
        return {
          arrowUp: !state.arrowUp,
        };
      }
      case "COLORPRIMARY": {
        return {
          colorPrimary: "",
        };
      }
      case "ACCORDIONOPEN": {
        return {
          accordionOpen: !state.accordionOpen,
        };
      }
      default:
        return state;
    }
  };
  
  export default IsopenReducer;
  