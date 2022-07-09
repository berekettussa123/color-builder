import { useContext, useEffect, useState } from 'react';

import OptionAccordion from '../../components/ui/OptionAccordion';
import Select from '../../components/ui/Select';
import SelectInput from '../../components/ui/SelectInput';
import SelectColor from '../../components/ui/SelectColor';
import ColorCircle from '../../components/ui/ColorCircle';
import { IsopenContext } from '../../../context/isopenContext';
import MiddleContainer from '../ui/MiddleContainer';
import { Link, NavLink } from 'react-router-dom';

function LeftPanel(props) {
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 900);
  }, []);
  const [state, setState] = useState({});
  const {accordionOpen,allMaximize } = useContext(IsopenContext);
  const setOptions = (value, option) => {
    const newState = {
      ...state,
      [value]: option,
    };
    setState(newState);
  };
  return (
    <div className={`${windowWidth?"stagethrees":'stagethreemobile'}`} >
      {
      ((!allMaximize && !windowWidth)||(allMaximize && !windowWidth)||(!allMaximize && windowWidth))&&
        
      <>
      {/* {<MiddleContainer/>} */}
        <OptionAccordion
        title="Mixed Options"
        stage={props.stage}
        selectedOption={
          <ColorCircle color={state.colorOption && state.colorOption.value} />
        }
      >
        <SelectInput
          subtitle="Text"
          onSelection={(option) => setOptions('textOption', option)}
        />
        <Select
          subtitle="Selection"
          options={[
            {
              text: 'Option1',
              value: 1,
            },
            {
              text: 'Option2',
              value: 2,
            },
          ]}
          onSelection={async (option) => setOptions('selectOption', option)}
        />
        <SelectColor
          subtitle="Color"
          colors={[
            { value: '#C62828' },
            { value: '#AD1457' },
            { value: '#6A1B9A' },
            { value: '#4527A0' },
            { value: '#283593' },
            { value: '#1565C0' },
            { value: '#0277BD' },
            { value: '#00838F' },
            { value: '#00695C' },
            { value: '#2E7D32' },
            { value: '#C62828' },
            { value: '#AD1457' },
            { value: '#6A1B9A' },
            { value: '#4527A0' },
            { value: '#283593' },
            { value: '#1565C0' },
            { value: '#0277BD' },
            { value: '#00838F' },
            { value: '#00695C' },
            { value: '#2E7D32' },
          ]}
          onSelection={(option) => setOptions('colorOption', option)}
        />
      {!windowWidth && <div
          className="buttonLine"
          style={{
            width: '400px',
            left: '-25px',
            height: '10px',
            position: 'relative',
            backgroundColor: 'black',
          }}
        ></div>}
       {!windowWidth && <button className="inlineButton" 
        // onClick={handlebutton}
        >
            <div>Primary</div> 
            <div className="iconButt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="14"
                height="14"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M8.465 20.485L16.95 12L8.465 3.515L7.05 4.929L14.122 12L7.05 19.071l1.415 1.414Z"
                />
              </svg>
            </div>
          </button>
}
      </OptionAccordion>

     {!windowWidth && 
     <NavLink to={"/stage-two"}>

     <button
        className="w-full"
        style={{position:'absolute',height:'56px',bottom:'3rem',left:'2rem',backgroundColor:'#222222',width:'180px'}}
      >
        <div style={{zIndex:'2222299999999999'}}   className="accordion-button h-14 py-3.5 px-6 flex items-center">
          <div className={`arrow} flex items-center mr-2 grow-0`}>
          <span>&larr;</span>
          </div>
            <h3 className="mobileAccordion grow text-left">Back To Design<span className="showExtenstion">Up</span></h3>
          {/* <p className="grow-0">{props.selectedOption || "Option"}</p> */}
        </div>
      </button> </NavLink> }</>
      }
    </div>
  );
}

export default LeftPanel;
