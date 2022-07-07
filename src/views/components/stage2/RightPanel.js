// import { useState } from "react";

import { useContext, useEffect, useState } from 'react';
import { IsopenContext } from '../../../context/isopenContext';
import UpAccordion from '../../components/ui/UpAccordion';
import MiddleContainer from '../ui/MiddleContainer';
import LeftPanel from './LeftPanel';

function RightPanel(props) {
  const { isMizedOpen, dispatch } = useContext(IsopenContext);
  const { allMaximize } = useContext(IsopenContext);
  const [windowWidth, setWindowWidth] = useState();
  const { accordionOpen } = useContext(IsopenContext);
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);

  console.log('---------------' + isMizedOpen);
  return (
    <>
      {
        <div>
          {windowWidth && <LeftPanel />}
          <div
            className={`${
              props.stage === 3 ? 'stagethreeacc flex-col justify-end pb-4' : ''
            } accordionAndCTA flex  flex-col  justify-end pb-4 ${
              allMaximize && 'minimizeMenu'
            } ${accordionOpen && 'hideMixed'}`}
          >
            {!isMizedOpen && (
              <div style={{display:'flex'}}>
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

                    {props.stage === 3 &&
                      windowWidth &&
                      accordionOpen &&
                      'Primary'}
                    {props.stage === 2 &&
                      windowWidth &&
                      !accordionOpen &&
                      'Call to action'}
                    {props.stage === 2 &&
                      windowWidth &&
                      accordionOpen &&
                      'Primary'}
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
            )}
          </div>
        </div>
      }
    </>
  );
}

export default RightPanel;
