import './style.css';
import Nav from '../components/nav/Nav';
import MainContainer from '../components/ui/MainContainer';
import LeftPanel from '../components/stage2/LeftPanel';
import MiddleContainer from '../components/ui/MiddleContainer';
import RightPanel from '../components/stage2/RightPanel';
import { useContext, useEffect, useState } from 'react';
import { IsopenContext } from '../../context/isopenContext';

function StageSecond() {
  const { isMizedOpen, dispatch } = useContext(IsopenContext);
  const {allMaximize} = useContext(IsopenContext)
  const handleClick =() =>{
    dispatch({type:"MIXEDOPENSHOW"})
  }
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  
  
  return (
    <>
      <Nav />
      <MainContainer stage={"two"} leftPanel={<LeftPanel stage={"two"}/>} rightPanel={(!allMaximize || !windowWidth)&& <RightPanel stage={2} />}>
        {((!isMizedOpen&& !windowWidth)||(isMizedOpen&&!windowWidth )||(windowWidth&&!isMizedOpen))&&<MiddleContainer stage={"two"}/>}
      </MainContainer>
      {(allMaximize&&windowWidth)&&<MiddleContainer/>}
      {/* {isMizedOpen && (
        <div className= {`ctaContainer ${allMaximize && "minimizeMenu"}`}>
          <div onClick={handleClick} className="secondaryCta">
            <span  className="vectorArrowLeft">&larr;</span>Secondary
          </div>
          <div onClick={()=>{dispatch({type:"MIXEDOPENSHOW"})}} className="primaryCta">
            Primary <span className="vectorArrowRight">&rarr;</span>
          </div>
        </div>
      )} */}
    </>
  );
}
export default StageSecond;
