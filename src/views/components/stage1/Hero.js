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
    <div>
      <div className="hero-container">
        <div className={`hero-container-inner${scroll ? ' scrolled' : ''}`}>
          <header className="page-header">
            <div className="half">
              <h2>{scroll ? 'Blank Slate' : 'Title'}</h2>
              
              {!windowWidth && !scroll  && (
                <>
                  <p
                    className={`${scroll ? ' scrollpara' : ' notscrolled'}`}
                    style={{ fontSize: '18px !important', fontWeight: '500' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet nisl nec massa egestas ornare. Nulla volutpat, ante
                    ac sodales luctus, nisi dui varius purus, eleifend lacinia
                    justo tellus a sem. Nunc at porta odio.
                  </p>
                  <div style={{position:'relative' ,top:'6px'}} className="tags-container">
                    <ul className="tags">
                      <li className="tag-title">Tag</li>
                      <li style={{color:'white'}} className="main-tag">Series</li>           </ul>
                  
                  </div>
                  </>
              )
               }
               { windowWidth&& (
                  <>
                  <p style={{ fontSize: '18px !important', fontWeight: '500',marginTop: '0px' }}>
                    Let your imagination go wild and create your own unique glove
                    from ground up.
                  </p>
                  <div style={{position:'relative' ,top:'6px'}} className="tags-container">
                      <ul className="tags">
                        <li className="tag-title">Tag</li>
                        <li style={{color:'white'}} className="main-tag">Series</li>
                      </ul>
                    
                    </div>
                  </>
                )
               }
               {!windowWidth && scroll &&
                (
                  <>
                  <p style={{ fontSize: '18px !important', fontWeight: '500',marginTop: '0px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisl nec massa egestas ornare.
                   Nulla volutpat, ante ac sodales luctus.
                  </p>
                  <div style={{position:'relative' ,top:'6px'}} className="tags-container">
                      <ul className="tags">
                        <li className="tag-title">Tag</li>
                        <li style={{color:'white'}} className="main-tag">Series</li>
                      </ul>
                    </div>
                  </>
                )
               }
            </div>
            <div className="button-container" id="Navigation">
              <div
                style={{ position: 'relative' }}
                className="cta-container cta-hero"
              >
                <button className="cta " onClick={props.handleOpen}>
                  <div>
                    {!windowWidth && (
                      <p className="">
                        {scroll ? 'Construct From Ground Up' : 'Call To Action'}
                      </p>
                    )}
                    {windowWidth && <p style={{height:'30px',alignSelf:'center',display:'flex',alignItems:'center',padding:'0px 0px'}} className="">Call To Action</p>}
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
        <div className={`${scroll?'gradients':'disablefilter'}`}></div>
      </div>
    </div>
  );
}

export default Hero;
