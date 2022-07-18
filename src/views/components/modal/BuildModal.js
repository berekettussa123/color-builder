import "./BuildModal.scss";
import SelectImage from "../ui/SelectImage";
import Select from "../ui/Select";
import { IsopenContext } from "../../../context/isopenContext";
import { useContext, useEffect, useState } from "react";

function BuildModal(props) {
  console.log(props.stage==="two");
  const {allMaximize,arrowUp,dispatch} = useContext(IsopenContext)
  const { isMizedOpen } = useContext(IsopenContext);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);
  return (
    <div className={`${(props.stage === "two") ? "build-modal-two ": " build-modal"} ${props.show ? "BuildModalShow" : " display-none"}`}>
      <div className={`build-modal-content${props.show ? " animate-bottom" : ""}`}>
        <div className="build-modal-header">
          <h2>{props.title}</h2>
          {props.stage==="one" ?  (<button
            className="close-button"
            onClick={props.handleClose}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L21 21M21 1L11 11L1 21" stroke="white" stroke-width="2"/>
            </svg>
          </button>):
          !props.stage==="one" && <button
            className="close-button"
            onClick={props.handleClose}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L21 21M21 1L11 11L1 21" stroke="red" stroke-width="2"/>
            </svg>
          </button> }
        </div>
        <div className="build-modal-body">
          <SelectImage
            options={[
              {
                title: "Option Title",
                text: "Option Text",
                value: "option-value-1",
                src: "https://via.placeholder.com/150",
              },
              {
                title: "Option Title",
                text: "Option Text",
                value: "option-value-2",
                src: "https://via.placeholder.com/150",
              },
            ]}
          />
          <Select
            subtitle="Option with 2 choices"
            options={[
              {
                text: "Option",
                value: 1
              },
              {
                text: "Option",
                value: 2
              }
            ]}
            // onSelection={async (option) => setOptions("firstOption", option)}
          />
          <Select

            subtitle="Option with 3 choices"
            options={[
              {
                text: "Option",
                value: 1
              },
              {
                text: "Option",
                value: 2
              },
              {
                text: "Option",
                value: 3
              }
            ]}
            // onSelection={async (option) => setOptions("firstOption", option)}
          />
          <Select
            subtitle="Option with 4 choices"
            options={[
              {
                text: "Option",
                value: 1
              },
              {
                text: "Option",
                value: 2
              },
              {
                text: "Option",
                value: 3
              },
              {
                text: "Option",
                value: 4
              }
            ]}
            wide
            // onSelection={async (option) => setOptions("firstOption", option)}
          />
          <Select
            subtitle="Option with 5 choices"
            options={[
              {
                text: "Option",
                value: 1
              },
              {
                text: "Option",
                value: 2
              },
              {
                text: "Option",
                value: 3
              },
              {
                text: "Option",
                value: 4
              },
              {
                text: "Option",
                value: 5
              }
            ]}
            wide
            // onSelection={async (option) => setOptions("firstOption", option)}
          />
          {(!isMizedOpen || windowWidth) &&<div>
            <button className="cta mt-4">
              <p>Call To Action</p>
              <span>&rarr;</span>
            </button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default BuildModal;