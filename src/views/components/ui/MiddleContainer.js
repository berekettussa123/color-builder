import { useContext, useEffect, useState } from "react";
import { IsopenContext } from "../../../context/isopenContext";
import "./MiddleContainer.scss";
import {TbArrowsMaximize} from 'react-icons/tb'

function MiddleContainer(props) {
  const {accordionOpen } = useContext(IsopenContext);
  const {allMaximize,dispatch} = useContext(IsopenContext)

  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  window.onresize = function(event)
  {
  !windowWidth && document.location.reload(true);
  }
// console.log("this is   "+allMaximize);
  return (
    <div className= {`${!windowWidth ? "centerStageTwo" : ""} ${accordionOpen ? "CenterClosedContext ": ""} middle-container flex flex-col flex-1 ${allMaximize && " iconsMinimize"}`}>
      <div className="middle-container-content flex-1 w-full">
      </div>
      <div className={` ${props.stage==="two" && "stageTwoCenter"}  ${props.stage===3 ? " stageThreeCenter " : ''} middle-container-menu flex flex-col justify-center items-center`}>
        <div className="navigation-dots flex my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="16"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" r="8" fill="#ffffff66"/>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="16"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" r="8" fill="#ffffff66"/>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="16"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" r="8" fill="#ffffffff"/>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="16"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" r="8" fill="#ffffff66"/>
          </svg>
        </div>
        <div className="navigation-instructions flex mb-2">
          {windowWidth&&<div 
          style={{color:'white',fontSize:'28px',cursor:'pointer'}}
          onClick={()=>{dispatch({type:"ALLMAXIMIZE"})}} 
           className="mr-4">
            <TbArrowsMaximize />
          </div>}
          <div  className="mr-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.9645 16.8222L11.6787 19.1079C11.3445 19.4429 11.3445 19.9857 11.6787 20.3204L13.9645 22.6062C14.2994 22.9404 14.8423 22.9404 15.177 22.6062C15.5112 22.2712 15.5112 21.7284 15.177 21.3937L13.4968 19.7143L15.177 18.0349C15.5112 17.7 15.5112 17.1572 15.177 16.8225C14.842 16.4883 14.2992 16.4883 13.9645 16.8225V16.8222Z" fill="grey"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M16.8217 14.0355L19.1074 16.3213C19.4424 16.6555 19.9852 16.6555 20.3199 16.3213L22.6057 14.0355C22.9399 13.7006 22.9399 13.1577 22.6057 12.823C22.2707 12.4888 21.7279 12.4888 21.3932 12.823L19.7138 14.5032L18.0344 12.823C17.6995 12.4888 17.1566 12.4888 16.8219 12.823C16.4877 13.158 16.4877 13.7008 16.8219 14.0355H16.8217Z" fill="grey"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M8.91752 18.3994C6.3032 17.9039 4.15009 17.0485 2.85341 15.9501C2.1539 15.3575 1.71386 14.7118 1.71386 14.0003C1.71386 12.9901 2.55339 12.1214 3.83099 11.3638C6.12361 10.0044 9.82882 9.14309 14 9.14309C18.171 9.14309 21.8761 10.0044 24.169 11.3638C25.4468 12.1215 26.2861 12.9901 26.2861 14.0003C26.2861 15.0106 25.4466 15.8792 24.169 16.6369C21.8764 17.9963 18.1712 18.8576 14 18.8576H12.2857C11.8125 18.8576 11.4285 19.2415 11.4285 19.7147C11.4285 20.1879 11.8125 20.5719 12.2857 20.5719H14C18.5338 20.5719 22.5507 19.5895 25.0428 18.1114C26.9561 16.9772 28 15.5136 28 14.0003C28 12.487 26.9561 11.0237 25.0428 9.88929C22.5507 8.41093 18.5335 7.42878 14 7.42878C9.4665 7.42878 5.44931 8.41119 2.95718 9.88929C1.04387 11.0235 0 12.487 0 14.0003C0 15.1644 0.600521 16.2884 1.74567 17.2581C3.21534 18.5027 5.6355 19.5221 8.59902 20.0839C9.06357 20.1719 9.5128 19.8663 9.60083 19.401C9.68885 18.9364 9.38323 18.4872 8.91791 18.3992L8.91752 18.3994Z" fill="grey"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18.3988 19.0825C17.9034 21.6968 17.048 23.8499 15.9496 25.1466C15.3569 25.8461 14.7113 26.2861 13.9998 26.2861C12.9896 26.2861 12.1209 25.4466 11.3633 24.169C10.0038 21.8764 9.14257 18.1712 9.14257 14C9.14257 9.82902 10.0038 6.12393 11.3633 3.83099C12.121 2.55319 12.9896 1.71386 13.9998 1.71386C15.01 1.71386 15.8787 2.55339 16.6363 3.83099C17.9958 6.12361 18.857 9.82882 18.857 14V15.7143C18.857 16.1875 19.241 16.5715 19.7142 16.5715C20.1874 16.5715 20.5714 16.1875 20.5714 15.7143V14C20.5714 9.46623 19.5889 5.44931 18.1108 2.95718C16.9766 1.04387 15.5131 0 13.9998 0C12.4865 0 11.0232 1.04387 9.88877 2.95718C8.41041 5.44931 7.42825 9.4665 7.42825 14C7.42825 18.5335 8.41067 22.5507 9.88877 25.0428C11.023 26.9561 12.4865 28 13.9998 28C15.1638 28 16.2878 27.3995 17.2575 26.2543C18.5022 24.7847 19.5216 22.3645 20.0834 19.401C20.1714 18.9364 19.8658 18.4872 19.4005 18.3992C18.9359 18.3112 18.4867 18.6168 18.3986 19.0821L18.3988 19.0825Z" fill="grey"/>
            </svg>
          </div>
          <div className="mr-8 " style={{color:'grey'}}>
            Drag to Rotate
          </div>
          <div className="mr-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7074 0.622701C13.7678 -0.849719 9.19902 0.35492 6.54529 3.54063C3.34439 7.42228 4.00108 12.4284 6.79166 15.7212C4.60296 17.8895 2.41426 20.0312 0.225712 22.1728C-0.0752372 22.4673 -0.0752372 22.976 0.225712 23.2705L0.745564 23.7791C1.04651 24.0736 1.56636 24.0736 1.8673 23.7791C4.08325 21.6108 6.27195 19.4691 8.48796 17.3007C10.4851 18.7731 13.0568 19.5226 15.902 19.0407C20.6076 18.2375 23.8906 14.1952 24 9.59073C23.8905 5.62857 21.5102 2.06825 17.7076 0.622653L17.7074 0.622701ZM14.1783 17.6219C9.69157 17.6219 5.97086 13.9544 5.97086 9.59078C5.97086 5.20044 9.71888 1.53289 14.1783 1.55966C18.7471 1.55966 22.3037 5.20044 22.3857 9.59078C22.2762 13.9811 18.7471 17.6219 14.1783 17.6219Z" fill="grey"/>
              <path d="M14.7527 4.2367H13.3848V8.92152H8.81601V10.26H13.3848V14.9449H14.7527V10.26H19.7593V8.92152H14.7527V4.2367Z" fill="grey"/>
            </svg>
          </div>
          <div style={{color:'grey'}}>
            Scroll to Zoom
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;