import { useState } from 'react';
import Nav from '../components/nav/Nav';
import Card from '../components/stage1/Card';
import Hero from '../components/stage1/Hero';
import Modal from '../components/modal/Modal';
import BuildModal from '../components/modal/BuildModal';
import MainContainer from '../components/ui/MainContainer';
import './style.css';
import './style.scss';
function StageFirst() {
  const [show, setShow] = useState(false);
  const [showBuild, setShowBuild] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showBuildModal = () => {
    setShowBuild(true);
  };

  const hideBuildModal = () => {
    setShowBuild(false);
  };

  return (
    <div>
      <Nav />
      <MainContainer>
        <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
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
    </div>
  );
}

export default StageFirst;
