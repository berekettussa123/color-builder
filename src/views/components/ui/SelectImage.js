import "./SelectImage.scss";
import { useState } from "react";

function SelectImage (props) {
  const [selected, setSelected] = useState(null);

  const handleSelection = (option) => {
    setSelected(option);
    props.onSelection(option);
  }

  // useEffect(() => {
  //   if (selected === null && props.options.length > 0) {
  //     handleSelection(props.options[0]);
  //   }
  // })

  const isSelected = (option) => {
    return selected && selected.value === option.value;
  }

  return (
    <div className="select-image-container pb-2">
      { props.subtitle ? <h3 className="subtitle mb-2">{props.subtitle}</h3> : null }
      <div className={`grid grid-cols-${props.options.length > 2 ? '3' : '2'} gap-2.5`}>
        {props.options.map((option) => (
          <>
            <button
              className={`option${isSelected(option) ? ' selected': ''}`}
              style={{backgroundImage: `url(${option.src})`}}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              <div className="checked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  ariaHidden="true"
                  role="img"
                  width="14"
                  height="14"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="m8.818 19.779l-6.364-6.364l2.83-2.83l3.534 3.544l9.898-9.908l2.83 2.83L8.818 19.779Z"
                  />
                </svg>
              </div>
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default SelectImage;