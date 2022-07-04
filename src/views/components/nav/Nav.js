import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
function Nav() {
    const [open, setOpen] = useState(false);
  return (
    <nav id='mainNav'>
      <h1 className="logo">LOGO</h1>
      <div className="stages-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'not-active')}
        >
          {' '} 
          Stage 1{' '}
        </NavLink>

        <NavLink
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
      <div onClick={() => setOpen(!open)} className={`mainDrop ${open ? ' openedArr' : 'closedArr'} flex items-center mr-2 grow-0`} >
        <svg
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
      <div className={ `hidemenus ${open?'menuContainer' : 'hidemenu'}`}>
         <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'not-active')}
        >
          {' '}
          Stage 1{' '}
        </NavLink>

        <NavLink
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
    </nav>
  );
}

export default Nav;
