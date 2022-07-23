import { useState, useEffect } from 'react';
import './Hero.scss';
import Filters from '../ui/Filters';

function Hero(props) {
  const [scroll, setScroll] = useState();
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);

  document.addEventListener('scroll', function () {
    const el = document.getElementById('Navigation');
    if (scroll >= 280) {
      el.classList.add('fixed_navbar');
    } else {
      el.classList.remove('fixed_navbar');
    }
  });

  return (
    <div >
      <div className="hero-container">
        <div className={`hero-container-inner${scroll ? ' scrolled' : ''}`}>
          <header className="page-header">
            <div className="half">
              <h2>{scroll? "Blank State" :'Title'}</h2>
              <p className={`${scroll ? ' scrollpara':' notscrolled'}`} style={{fontSize:'18px !important',fontWeight:'bolder'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nisl nec massa egestas ornare. Nulla volutpat, ante ac
                sodales luctus, nisi dui varius purus, eleifend lacinia justo
                tellus a sem. Nunc at porta odio.
              </p>
            </div>
            <div className="button-container" id="Navigation">
              <div style={{position:'relative'}} className="cta-container cta-hero">
                <button  className="cta " onClick={props.handleOpen}>
                  <div>
                    {!windowWidth&&<p className="">{scroll?"Construct From Ground Up": "Call To Action"}</p>}
                    {windowWidth&&<p className="">Call To Action</p>}
                  </div>
                  <div>
                    <span>&rarr;</span>
                  </div>
                </button>
                <div className="gradientsTop"></div>
              </div>
            </div>
          </header>
          </div>
          <Filters filters={['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4']} />
          <div className="gradients"></div>
        </div>
    </div>
  );
}

export default Hero;
