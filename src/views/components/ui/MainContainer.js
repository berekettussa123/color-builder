import { useContext } from "react";
import { IsopenContext } from "../../../context/isopenContext";
import "./MainContainer.scss";

function MainContainer(props) {
  const {accordionOpen } = useContext(IsopenContext);
  const { isMizedOpen,dispatch } = useContext(IsopenContext);

  console.log("--------------" + accordionOpen);
  return (
    <div className="main-container flex">

      <div className={`${accordionOpen ? "hideLeftPanel " : ''} left-panel  px-5 overflow-y-auto`}>
        { props.leftPanel }
      </div>
      <main className={`${accordionOpen ? "hideLeftPanel " : ""} center-panel  px-5`}>
        { props.children }
      </main>
      {!isMizedOpen && <div className="right-panel  px-5">
        { props.rightPanel }
      </div>}
    </div>
  );
}

export default MainContainer;