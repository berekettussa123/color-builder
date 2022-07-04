import "./style.css";
import Nav from "../components/nav/Nav";
import MainContainer from "../components/ui/MainContainer";
import LeftPanel from "../components/stage3/LeftPanel";
import MiddleContainer from "../components/ui/MiddleContainer";
import RightPanel from "../components/stage2/RightPanel";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { IsopenContext } from "../../context/isopenContext";

function StageSecond(){
  const stage = 3;
  
  return (
    <>
      <Nav  />
      {/* <nav className="tobeMobile" >
            <h1 className="logo">LOGO</h1>
            <div className="stages-container">
                <NavLink to="/"
                className={({isActive}) => (isActive ? "active" : "not-active")}
                > Stage 1 </NavLink>

                <NavLink to="/stage-two"
                className={({isActive}) => (isActive ? "active" : "not-active")}
                > Stage 2 </NavLink>
                <NavLink to="/stage-three"
                className={({isActive}) => (isActive ? "active" : "not-active")}
                > Stage 3 </NavLink>
            </div>

            
        </nav> */}
      <MainContainer leftPanel={ <LeftPanel stage={3} />} rightPanel={ <RightPanel stage={3} />}>
        <MiddleContainer  />
      </MainContainer>
      
    </>
  );
}
export default StageSecond;