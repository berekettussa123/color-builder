import { useContext, useEffect, useState } from 'react';

import OptionAccordion from '../../components/ui/OptionAccordion';
import Select from '../../components/ui/Select';
import SelectInput from '../../components/ui/SelectInput';
import SelectColor from '../../components/ui/SelectColor';
import ColorCircle from '../../components/ui/ColorCircle';
import { IsopenContext } from '../../../context/isopenContext';
import MiddleContainer from '../ui/MiddleContainer';

function LeftPanel(props) {
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
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
  console.log("**********" + props.stage)
  return (
    <div style={{ marginTop: '5rem' }}>
      {
      ((!allMaximize && !windowWidth)||(allMaximize && !windowWidth)||(!allMaximize && windowWidth))&&
        
      <>
      {(windowWidth && !props.stage==="three") && <MiddleContainer/>}
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
       <div
          className="buttonLine"
          style={{
            width: '400px',
            left: '-25px',
            height: '10px',
            position: 'relative',
            backgroundColor: 'black',
          }}
        ></div>
        <button className="inlineButton" 
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

      </OptionAccordion>
      </>
      }
    </div>
  );
}

export default LeftPanel;
