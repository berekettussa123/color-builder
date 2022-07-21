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
      case "FIRSTSTAGE": {
        return {
          firstStage: !state.firstStage,
        };
      }
      case "SECONDSTAGE": {
        return {
          secondStage: !state.secondStage,
        };
      }
      case "THIRDSTAGE": {
        return {
          thirdStage: !state.thirdStage,
        };
      }
      case "MODALOPEN": {
        return {
          modalOpen: !state.modalOpen,
        };
      }
      default:
        return state;
    }
  };
  export default IsopenReducer;
  