import { useContext, useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import Card from '../components/stage1/Card';
import Hero from '../components/stage1/Hero';
import Modal from '../components/modal/Modal';
import BuildModal from '../components/modal/BuildModal';
import MainContainer from '../components/ui/MainContainer';
import './style.css';
import './style.scss';
import { IsopenContext } from '../../context/isopenContext';
function StageFirst() {
  const [show, setShow] = useState(false);
  const [showBuild, setShowBuild] = useState(false);
  const { dispatch } = useContext(IsopenContext);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  window.onresize = function(event)
  {
  !windowWidth && document.location.reload(true);
  }

  const showModal = () => {
    setShow(true);
    dispatch({type:'MODALOPEN'})
  };

  const hideModal = () => {
    setShow(false);
    dispatch({type:'MODALOPEN'})
  };

  const showBuildModal = () => {
    setShowBuild(true);
    dispatch({type:'MODALOPEN'})
  };

  const hideBuildModal = () => {
    setShowBuild(false);
    dispatch({type:'MODALOPEN'})
  };

  return (
    <>
      <Nav />
      <MainContainer stage={"one"}>
        <div >
          <Hero handleOpen={showBuildModal} />
          <section className="elements">
            <div className="elements-container">
              {[0, 1, 2, 3, 4, 5, 7, 8, 9].map((i) => (
                <Card handleOpen={showModal} />
              ))}
            </div>
          </section>
        </div>
      </MainContainer>
      <Modal title="Modal Title" show={show} handleClose={hideModal} />
      <BuildModal
        stage="one"
        title="Build Modal Title"
        show={showBuild}
        handleClose={hideBuildModal}
      />
    </>
  );
}

export default StageFirst;
