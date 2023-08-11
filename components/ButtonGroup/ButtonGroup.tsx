import React, { useState } from "react";

interface Props {
  buttons: string[]; // Change the prop name to "buttons"
}

const ButtonGroup: React.FC<Props> = ({ buttons }) => {
  const [activeButton, setActiveButton] = useState(buttons[0]); // Initialize activeButton with the first button
  const disabledButtons = buttons.slice(1); // Use the rest of the buttons as disabledButtons

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex text-xs align-left">
      {buttons.map((buttonName, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(buttonName)}
          className={`${
            activeButton === buttonName
              ? "bg-blue-400 text-white font-bold"
              : "bg-transparent border-none"
          } px-4 py-2 rounded-lg text-black`}
          //   disabled={disabledButtons.includes(buttonName)} // Disable the button if it's in the disabledButtons list
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
