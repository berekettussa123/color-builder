import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IsopenContext } from '../../../context/isopenContext';
import './Nav.css';
function Nav() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState();
  const { allMaximize, dispatch, isMizedOpen,firstStage,secondStage,thirdStage } = useContext(IsopenContext);

  // console.log('stage is --------' + firstStage,secondStage,thirdStage);
  
  const handleFirst=()=>{
    dispatch({type:'FIRSTSTAGE'})
  //  window.location.reload(false)
   
  }
  const handleSecond=()=>{
     dispatch({type:'SECONDSTAGE'})
    // window.location.reload(false)
  }
  const handleThird=()=>{
     dispatch({type:'THIRDSTAGE'})
    // window.location.reload(false)
  }
  return (
    <nav id="mainNav">
      <h1 style={{fontFamily: 'Inter',fontWeight:'500'}} className="logo">LOGO</h1>
      <div className="stages-container">
        <NavLink
          
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'not-active')}
          onClick={({ isActive }) => {
            isActive && setStage(1);
          }}
        >
          {' '}
          Stage 1{' '}
        </NavLink>

        <NavLink
        style={{margin:'0px 20px'}}
          to="/stage-two"
          className={({ isActive }) => (isActive ? 'active' : 'not-active')}
        >
          {' '}
          Stage 2{' '}
        </NavLink>
        <NavLink
          to="/stage-three"
          className={({ isActive }) => (isActive ? 'active' : 'not-active')}
        >
          {' '}
          Stage 3{' '}
        </NavLink>
      </div>

      <div className={`menuContainer ${!open && ' menuOpened'}`}>
        <div
          onClick={() => setOpen(!open)}
          className={`mainDrop ${
            open ? ' openedArr' : 'closedArr'
          } flex items-center mr-2 grow-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="34"
            height="34"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="#d9d9d9"
              d="M8.465 20.485L16.95 12L8.465 3.515L7.05 4.929L14.122 12L7.05 19.071l1.415 1.414Z"
            />
          </svg>
        </div>
        <div  className={`navMobile ${!open && ' hidemenus'}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            onClick={handleFirst}
          >
            {' '}
            Stage 1{' '}
          </NavLink>

          <NavLink
            to="/stage-two"
            className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            onClick={handleSecond}
          >
            {' '}
            Stage 2{' '}
          </NavLink>
          <NavLink
            to="/stage-three"
            className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            onClick={handleThird}
          >
            {' '}
            Stage 3{' '}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
