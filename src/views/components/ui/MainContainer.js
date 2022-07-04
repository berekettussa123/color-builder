import "./MainContainer.scss";

function MainContainer(props) {
  return (
    <div className="main-container flex">
      <div className="left-panel flex-1 px-5 overflow-y-auto">
        { props.leftPanel }
      </div>
      <main className="center-panel  px-5">
        { props.children }
      </main>
      <div className="right-panel flex-1 px-5">
        { props.rightPanel }
      </div>
    </div>
  );
}

export default MainContainer;