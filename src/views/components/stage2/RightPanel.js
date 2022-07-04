// import { useState } from "react";

import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { IsopenContext } from '../../../context/isopenContext';
import UpAccordion from '../../components/ui/UpAccordion';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
// useWindowSize()

function RightPanel(props) {
  useWindowSize()
  const { isMizedOpen, dispatch } = useContext(IsopenContext);
  const { allMaximize } = useContext(IsopenContext);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  console.log(props.stage)
  return (
    <>
      {
        <div
          className={`${
            props.stage === 3 ? 'stagethreeacc flex-col justify-end pb-4' :''
          } accordionAndCTA flex  flex-col  justify-end pb-4 ${
            allMaximize && 'minimizeMenu'
          }`}
        >
          <UpAccordion stage={2}>
            {/* <div>Accourdion Up</div> */}

            <div className="text-white mb-2">Glove Foundation</div>
            <div className="overScroll">
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
              <div className="flex justify-between">
                <div>Option</div>
                <div>Value</div>
              </div>
            </div>
          </UpAccordion>
          <button className="cta rightButtonCTA">
            <p>
              {props.stage === 3 && windowWidth && 'stagethreeacc'
                ? 'Primary'
                : 'Call To Action'}
            </p>
            <span>&rarr;</span>
          </button>
        </div>
      }
    </>
  );
}

export default RightPanel;
