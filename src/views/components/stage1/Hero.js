import { useState, useEffect } from 'react';
import './Hero.scss';
import Filters from '../ui/Filters';

function Hero(props) {
  const [scroll, setScroll] = useState();
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
    <div>
      <div className="hero-container">
        <div className={`hero-container-inner${scroll ? ' scrolled' : ''}`}>
          <header className="page-header">
            <div className="half">
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nisl nec massa egestas ornare. Nulla volutpat, ante ac
                sodales luctus, nisi dui varius purus, eleifend lacinia justo
                tellus a sem. Nunc at porta odio.
              </p>
            </div>
            <div className="button-container" id="Navigation">
              <div className="cta-container cta-hero">
                <button className="cta " onClick={props.handleOpen}>
                  <div>
                    <p className="">Call To Action</p>{' '}
                  </div>
                  <div>
                    <span>&rarr;</span>
                  </div>
                </button>
              </div>
            </div>
          </header>
          {/* <div className="gradient"></div> */}
        </div>
        </div>
        <Filters filters={['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4']} />
    </div>
  );
}

export default Hero;
