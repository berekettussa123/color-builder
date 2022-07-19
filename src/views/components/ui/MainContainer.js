import { useContext, useEffect, useState } from 'react';
import { IsopenContext } from '../../../context/isopenContext';
import './MainContainer.scss';

function MainContainer(props) {
  const { accordionOpen } = useContext(IsopenContext);
  const { isMizedOpen, dispatch } = useContext(IsopenContext);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  return (
    <div className="main-container flex">
      <div
        className={`${
          accordionOpen ? 'hideLeftPanel ' : ''
        } ${props.stage==="one" ? "left-panel" :"left-panel left-panel2 "}   px-5 overflow-y-auto`}
      >
        {props.leftPanel}
      </div>
      <main
        className={`${accordionOpen ? 'hideLeftPanel ' : ''} ${
          props.stage === 'two' || props.stage === 'three'
            ? ' centerSecond'
            : ''
        } ${props.stage==="one" ? "center-panel " :" center-panel center-panel2 "}`}
      >
        {props.children}
      </main>
      {((!isMizedOpen && !windowWidth) ||
        (!isMizedOpen && windowWidth) ||
        (isMizedOpen && !windowWidth)) && (
        <div className={`${props.stage==="one" ? " right-panel " :" right-panel2 "}  px-5`}>{props.rightPanel}</div>
      )}
    </div>
  );
}

export default MainContainer;
