import { useContext } from "react";
import { IsopenContext } from "../../../context/isopenContext";
import "./MainContainer.scss";

function MainContainer(props) {
  const {accordionOpen } = useContext(IsopenContext);
  return (
    <div className="main-container flex">

      <div className={`${accordionOpen&&"hideLeftPanel "} left-panel flex-1 px-5 overflow-y-auto`}>
        { props.leftPanel }
      </div>
      <main className={`${accordionOpen&&"hideLeftPanel "} center-panel  px-5`}>
        { props.children }
      </main>
      <div className="right-panel flex-1 px-5">
        { props.rightPanel }
      </div>
    </div>
  );
}

export default MainContainer;