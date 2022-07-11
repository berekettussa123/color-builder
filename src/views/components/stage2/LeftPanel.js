import { useLayoutEffect, useState } from 'react';

import OptionAccordion from '../../components/ui/OptionAccordion';
import Select from '../../components/ui/Select';
import SelectInput from '../../components/ui/SelectInput';
import SelectColor from '../../components/ui/SelectColor';
import SelectColor2 from '../../components/ui/SelectColor2';
import SelectImage from '../../components/ui/SelectImage';
import ColorCircle from '../../components/ui/ColorCircle';
import Modal from '../modal/Modal';
import BuildModal from '../modal/BuildModal';
import { useContext } from 'react';
import { IsopenContext } from '../../../context/isopenContext';
import ColorCircle2 from '../ui/ColorCircle2';
import { useEffect } from 'react';
import MiddleContainer from '../ui/MiddleContainer';
import {CgArrowRight} from 'react-icons/cg'


function LeftPanel(props) {
  const { singleOpened, dispatch } = useContext(IsopenContext);
  const [state, setState] = useState({});
  const [show, setShow] = useState(false);
  const [showBuild, setShowBuild] = useState(false);
  
  const [both, setBoth] = useState(
    state.colorOption && state.colorOption.value
  );
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  const [both2, setBoth2] = useState(
    state.colorOption2 && state.colorOption2.value
  );
  const { allMaximize, arrowUp, isMizedOpen } = useContext(IsopenContext);
  const { accordionOpen } = useContext(IsopenContext);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showBuildModal = () => {
    setShowBuild(true);
    dispatch({ type: 'SINGLEOPENED' });
  };

  const hideBuildModal = () => {
    setShowBuild(false);
    // dispatch({ type: 'ARROWUP' });
  };

  const setOptions = (value, option) => {
    const newState = {
      ...state,
      [value]: option,
    };
    setState(newState);
  };

  useEffect(() => {
    setBoth(state.colorOption && state.colorOption.value);
    setBoth2(state.colorOption2 && state.colorOption2.value);
    console.log(state.colorOption2 && state.colorOption2.value);
    console.log(state.colorOption && state.colorOption.value);
  }, [state.colorOption, state.colorOption2]);

  const handlebutton = () => {
    if (
      (state.colorOption && state.colorOption.value) !==
        (state.colorOption2 && state.colorOption2.value) ||
      (state.colorOption && state.colorOption.value)
    ) {
      console.log('hi');
      console.log(state.colorOption2 && state.colorOption2.value);
      console.log(state.colorOption && state.colorOption.value);
      setBoth(state.colorOption2 && state.colorOption2.value);
      setBoth2(state.colorOption2 && state.colorOption2.value);
    }
    // setOptions('colorOption', option)
    // console.log(state.colorOption2.value );
  };
  const handlebutton2 = () => {
    if (
      (state.colorOption && state.colorOption.value) !==
        (state.colorOption2 && state.colorOption2.value) ||
      (state.colorOption2 && state.colorOption2.value)
    ) {
      setBoth(state.colorOption && state.colorOption.value);
      setBoth2(state.colorOption && state.colorOption.value);
    }
    // setOptions('colorOption', option)
    // console.log(state.colorOption2.value );
  };

  return (
    <>
      <div
        className={`${allMaximize?"hideLeft":''} ${isMizedOpen ? ' LeftContainerOpen ' : 'leftContainers'}`}
      >
       {(!isMizedOpen && windowWidth) && <div style={{position:'fixed',zIndex:'11111111111', marginBottom:'2rem !important'}}>
          <MiddleContainer />
        </div>}
        <div  className={`${isMizedOpen ? "marginCenterNO" :'marginCenterYES'}`} style={{marginTop:'4rem'}}>
        {/* <div className="gradients"></div> */}
        <OptionAccordion
          stage="two"
          showBuildModal={showBuildModal}
          showBuild={showBuild}
          title="Build"
          selectedOption={state.imageOption && state.imageOption.value}
        >
          <BuildModal
            title="Build Modal"
            stage="two"
            show={showBuild}
            handleClose={hideBuildModal}
          />

          {/* <SelectImage
          options={[
            {
              title: "Option Title",
              text: "Option Text",
              value: "option-value-1",
              src: "https://via.placeholder.com/150",
            },
            {
              title: "Option Title",
              text: "Option Text",
              value: "option-value-2",
              src: "https://via.placeholder.com/150",
            },
            {
              title: "Option Title",
              text: "Option Text",
              value: "option-value-3",
              src: "https://via.placeholder.com/150",
            },
            {
              title: "Option Title",
              text: "Option Text",
              value: "option-value-4",
              src: "https://via.placeholder.com/150",
            },
          ]}
        /> */}
        </OptionAccordion>
        <OptionAccordion
         title="TextInput" selectedOption={state.textOption}>
          <SelectInput
            onSelection={(option) => setOptions('textOption', option)}
          />
          {windowWidth&&<div
            className="buttonLine"
            style={{
              width: '120%',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>}
          {windowWidth&&<button
            className="inlineButton ininlineButtonPrimary"
            // onClick={handlebutton}
          >
            <div>Primary</div>
            <div  className="iconButt ">
            < CgArrowRight/>
            </div>
          </button>}
        </OptionAccordion>
        <OptionAccordion
          title="Color Option1"
          selectedOption={<ColorCircle color={both} />}
        >
          <SelectColor
            colors={[
              { value: '#AD1457' },
              { value: '#C62828' },
              { value: '#4527A0' },
              { value: '#6A1B9A' },
              { value: '#1565C0' },
              { value: '#283593' },
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
              width: '100vw',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>
          <div style={{backgroundColor:'black'}} className="buttonAndIcon">
            <button  className="inlineButton" onClick={handlebutton2}>
              <div>Secondary</div>
              <div className="iconButtSecondary">
              < CgArrowRight/>
              </div>
            </button>
            {windowWidth && (
              <button
              
                className="inlineButton primaryButton"
                // onClick={handlebutton}
              >
                <div>Primary</div>
                <div className="iconButt">
                < CgArrowRight/>
                </div>
              </button>
            )}
          </div>
        </OptionAccordion>
        <OptionAccordion
          title="Color Option2"
          selectedOption={<ColorCircle2 color={both2} />}
        >
          <SelectColor2
            colors={[
              { value: '#AD1457' },
              { value: '#4527A0' },
              { value: '#283593' },
              { value: '#0277BD' },
              { value: '#C62828' },
              { value: '#6A1B9A' },
              { value: '#1565C0' },
              { value: '#00838F' },
              { value: '#00695C' },
              { value: '#2E7D32' },
            ]}
            onSelection={(option) => setOptions('colorOption2', option)}
          />
          <div
            className="buttonLine"
            style={{
              width: '100vw',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>
          <div style={{backgroundColor:'black'}} className="buttonAndIcon">
            <button className="inlineButton" onClick={handlebutton}>
              <div>Secondary</div>
              <div className="iconButt">
              < CgArrowRight/>
              </div>
            </button>
            {windowWidth && (
              <button
                className="inlineButton primaryButton"
                // onClick={handlebutton}
              >
                <div>Primary</div>
                <div className="iconButt">
                < CgArrowRight/>
                </div>
              </button>
            )}
          </div>{' '}
        </OptionAccordion>

        <OptionAccordion
          title="Dual Color"
          selectedOption={
            <div className="flex">
              <ColorCircle
                color={state.dualColorOption1 && state.dualColorOption1.value}
              />
              <ColorCircle
                color={state.dualColorOption2 && state.dualColorOption2.value}
              />
            </div>
          }
        >
          <SelectColor
            subtitle="Primary Color"
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
            ]}
            onSelection={(option) => setOptions('dualColorOption1', option)}
          />
          <SelectColor
            subtitle="Secondary Color"
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
            ]}
            onSelection={(option) => setOptions('dualColorOption2', option)}
          />
          {windowWidth && <div
            className="buttonLine"
            style={{
              width: '120%',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>}
          {windowWidth&&<button className="inlineButton ininlineButtonPrimary" onClick={handlebutton}>
            <div>Primary</div>
            <div className="iconButt">
              < CgArrowRight/>
            </div>
          </button>}
        </OptionAccordion>
        <OptionAccordion
          title="2 Options"
          selectedOption={state.firstOption && state.firstOption.text}
        >
          <Select
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
            onSelection={async (option) => setOptions('firstOption', option)}
          />
          {windowWidth&&<div
            className="buttonLine"
            style={{
              width: '120%',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>}
         {windowWidth && <button className="inlineButton ininlineButtonPrimary" onClick={handlebutton}>
            <div>Primary</div>
            <div className="iconButt">
            < CgArrowRight/>
            </div>
          </button>}
        </OptionAccordion>
        <OptionAccordion
          title="Title"
          selectedOption={state.secondOption && state.secondOption.text}
        >
          <Select
            options={[
              {
                text: 'Option 1',
                value: 1,
              },
              {
                text: 'Option 2',
                value: 2,
              },
              {
                text: 'Option 3',
                value: 3,
              },
            ]}
            onSelection={(option) => setOptions('secondOption', option)}
          />
         {windowWidth&& <div
            className="buttonLine"
            style={{
              width: '120%',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>}
          {windowWidth && <button
            className="inlineButton ininlineButtonPrimary"
            // onClick={handlebutton}
          >
            <div>Primary</div>
            <div className="iconButt">
            < CgArrowRight/>
            </div>
          </button>}
        </OptionAccordion>
        <OptionAccordion
          title="Title"
          selectedOption={state.thirdOption && state.thirdOption.text}
        >
          <Select
            options={[
              {
                text: 'Option 4',
                value: 1,
              },
              {
                text: 'Option 5',
                value: 2,
              },
              {
                text: 'Option 6',
                value: 3,
              },
              {
                text: 'Option 7',
                value: 4,
              },
            ]}
            onSelection={(option) => setOptions('thirdOption', option)}
          />
         {windowWidth && <div
            className="buttonLine"
            style={{
              width: '100vw',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>}
          {windowWidth&&<button
            className="inlineButton ininlineButtonPrimary"
            // onClick={handlebutton}
          >
            <div>Secondary</div>
            <div className="iconButt">
            < CgArrowRight/>
            </div>
          </button>}
        </OptionAccordion>
        <OptionAccordion
          title="Title"
          selectedOption={state.fourthOption && state.fourthOption.text}
        >
          <Select
            subtitle="Subtitle"
            options={[
              {
                text: 'Option A',
                value: 1,
              },
              {
                text: 'Option B',
                value: 2,
              },
            ]}
            onSelection={(option) => setOptions('fourthOption', option)}
          />
          {windowWidth&&<div
            className="buttonLine"
            style={{
              width: '120%',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>}
          {windowWidth&&<button
            className="inlineButton ininlineButtonPrimary"
            // onClick={handlebutton}
          >
            <div>Primary</div>
            <div className="iconButt">
            < CgArrowRight/>
            </div>
          </button>}
        </OptionAccordion>
        <OptionAccordion
          title="Title"
          selectedOption={`${state.fifthOption ? state.fifthOption.text : ''} ${
            state.sixthOption ? state.sixthOption.text : ''
          }`}
        >
          <Select
            subtitle="Subtitle"
            options={[
              {
                text: 'Option 1',
                value: 1,
              },
              {
                text: 'Option 2',
                value: 2,
              },
            ]}
            onSelection={(option) => setOptions('fifthOption', option)}
          />
          <Select
            subtitle="Subtitle"
            options={[
              {
                text: 'Option 3',
                value: 1,
              },
              {
                text: 'Option 4',
                value: 2,
              },
            ]}
            onSelection={(option) => setOptions('sixthOption', option)}
          />
          {windowWidth&&<div
            className="buttonLine"
            style={{
              width: '120%',
              marginLeft: '-28px',
              height: '10px',
              backgroundColor: 'black',
            }}
          ></div>}
         {windowWidth&& <button
            className="inlineButton ininlineButtonPrimary"
            // onClick={handlebutton}
          >
            <div>Primary</div>
            <div className="iconButt">
            < CgArrowRight/>
            </div>
          </button>}
        </OptionAccordion>
        </div>        {/* <div style={{ height: '1.2rem' }}></div>
      <div className="gradients"></div> */}
      </div>
    </>
  );
}

export default LeftPanel;
