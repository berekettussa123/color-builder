import './OptionAccordion.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { IsopenContext } from '../../../context/isopenContext';
import MiddleContainer from './MiddleContainer';

function OptionAccordion(props) {
  const [open, setOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const { singleOpened, arrowUp,accordionOpen } = useContext(IsopenContext);
  
  const { isMizedOpen,dispatch } = useContext(IsopenContext);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);

  const handleClick = () => {
     dispatch({ type: 'MIXEDOPENSHOW' });
  };
  const handleBuild = () => {

     setBuildOpen(!buildOpen)
     setOpen(!open);
    };
  // const isOpenedClicked = () => {
  //   // setIsOpened(!isOpened);
  //   // console.log('7777777777777  ' + isOpened);
  // };
  const openButton = () => {
    setOpen(!open);
    // dispatch({ type: 'ARROWUP' });
    // dispatch({ type: 'SINGLEOPENED' })
    props.showBuildModal();
    // console.log("cont: : : " +singleOpened)
  };
  
  // const myFunction = useRef(() => {
  //   const div = document.getElementById('test');
  //   const domRect = div.getBoundingClientRect();

  //   console.log(domRect.left, domRect.top, domRect.width, domRect.height);
  // }, []);
    // useEffect(() => {
    //   const div = document.getElementById('test');
    //   const domRect = div.getBoundingClientRect()&&div.getBoundingClientRect();

    //   console.log(domRect.left, domRect.top, domRect.width, domRect.height);
    // });
    
  return (
    <>
       { 
       props.title==="Mixed Options"?
       (<div
      // onClick={isOpenedClicked}
      id=""
      
      className={`option-accordion mixedoptions ${open ? ' openMixed' : ' '}`}
    >
      { windowWidth &&<MiddleContainer stage={3}/>}
      <button className="w-full" onClick={openButton}>
        <div
          onClick={!props.stage===3&& handleClick}
          className={` ${accordionOpen && 'hideMixedAcc'} accordion-header  h-14 py-3.5 px-6 flex items-center`}
        >
          <div
             className={`arrow${
              open ? ' active' : ' '
            } flex items-center mr-2 grow-0`}
          >
            <svg
              // onClick={isOpenedClicked}
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
          <h3 className="grow text-left">{props.title || 'Title'}</h3>
          <p className="font-normal grow-0 max-w-[10rem] text-ellipsis overflow-hidden whitespace-nowrap">
            {props.selectedOption}
          </p>
          
        </div>
      </button>
      {(props.title === 'Mixed Options' && !windowWidth) && (
        <div className={`accordion-body mixedAcc ${open ? ' active' : ''}`}>
          <div className="accordion-body-content-mixed py-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {(props.title === 'Mixed Options' && windowWidth) && (
        <div className={`accordion-body mixedAcc ${open ? ' active' : ''}`}>
        <div className="accordion-body-content-mixed py-3.5 px-6">
          {props.children}
        </div>
      </div>
      )}
    </div>) :
    (<div
      // onClick={isOpenedClicked}
      
      className={`option-accordion${open ? ' open' : ''} ${isMizedOpen && " FirstClosed"}`}
    >
      <button className="w-full" onClick={!props.title === 'Build' ? openButton : handleBuild }>
        {(isMizedOpen && windowWidth) &&<MiddleContainer/>}
        <div
          onClick={handleClick}
          className="accordion-header h-14 py-3.5 px-6 flex items-center"
        >
          <div
             className={`arrow${
              open ? ' active' : ' '
            } flex items-center mr-2 grow-0`}
          >
            <svg
              // onClick={isOpenedClicked}
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
          <h3 className="grow text-left">{props.title || 'Title'}</h3>
          <p className="font-normal grow-0 max-w-[10rem] text-ellipsis overflow-hidden whitespace-nowrap">
            {props.selectedOption}
          </p>
        </div>
      </button>
      {props.title === 'Build' && (
        <div
        onClick={handleBuild}
          // id={`test ${open ? 'test' : ''}`}
          className={`accordion-body ${
            open ? ' active' : `${isOpened ? ' colorno' : ''}`
          }`}
        >
          <div className="accordion-body-content py-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {props.title === 'Color Option1' && (
        <div
          // id={`test ${open ? 'test' : ''}`}
          className={`accordion-body ${
            open ? ' active' : `${isOpened ? ' colorno' : ''}`
          }`}
        >
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {props.title === 'Color Option2' && (
        <div className={`accordion-body${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
            {/* <div className='primaryAndSecondary'>
              <button>Primary </button>
              <button>Secondary</button>
            </div> */}
          </div>
        </div>
      )}
      {props.title === 'Title' && (
        <div className={`accordion-body${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {props.title === '2 Options' && (
        <div className={`accordion-body${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {props.title === 'TextInput' && (
        <div className={`accordion-body${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {props.title === 'Dual Color' && (
        <div className={`accordion-body${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {props.title === 'Color Option' && (
        <div className={`accordion-body${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {(props.title === 'Mixed Options' && !windowWidth) && (
        <div className={`accordion-body mixedAcc ${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
      {(props.title === 'Mixed Options' && windowWidth) && (
        <div className={`accordion-body mixedAcc ${open ? ' active' : ''}`}>
          <div className="accordion-body-content pt-3.5 px-6">
            {props.children}
          </div>
        </div>
      )}
    </div>) }
    </>

  );
}

export default OptionAccordion;
