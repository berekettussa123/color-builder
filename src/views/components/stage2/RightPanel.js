// import { useState } from "react";

import { useContext, useEffect, useState } from 'react';
import { IsopenContext } from '../../../context/isopenContext';
import UpAccordion from '../../components/ui/UpAccordion';
import LeftPanel from '../stage3/LeftPanel';
import MiddleContainer from '../ui/MiddleContainer';


function RightPanel(props) {
  const { isMizedOpen, dispatch } = useContext(IsopenContext);
  const { allMaximize } = useContext(IsopenContext);
  const { accordionOpen } = useContext(IsopenContext);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);

  console.log('-------:::::::::::--------' + props.stage);
  return (
    <>
      {
        <div>
          
         
          <div
            className={`${
              props.stage === 3 ? 'stagethreeacc flex-col justify-end pb-4' : ''
            } accordionAndCTA flex  flex-col  justify-end pb-4 ${
              allMaximize ? ' minimizeMenu': ''
            } ${isMizedOpen ? ' hideMixed' : ''}`}
          >
             { (windowWidth && props.stage===3) && <LeftPanel/>}
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
                {props.stage === 3 &&
                  windowWidth &&
                  !accordionOpen &&
                  'Call to action'}

                {props.stage === 3 && windowWidth && accordionOpen && 'Primary'}
                {props.stage === 2 &&
                  windowWidth &&
                  !accordionOpen &&
                  'Call to action'}
                {props.stage === 2 && windowWidth && accordionOpen && 'Primary'}
                {props.stage === 2 &&
                  !windowWidth &&
                  !accordionOpen &&
                  'Call to action'}
                {props.stage === 2 &&
                  !windowWidth &&
                  accordionOpen &&
                  'Call to action'}
              </p>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default RightPanel;
