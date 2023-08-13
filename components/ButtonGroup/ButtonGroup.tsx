import React, { useState } from "react";

interface Props {
  buttons: string[];
  isLarge?: boolean; // Add the optional isLarge prop
  // buttonCallback: (name: string) => void;
  buttonCallback: any;
}

const ButtonGroup: React.FC<Props> = ({ buttons, isLarge, buttonCallback }) => {
  const [activeButton, setActiveButton] = useState(buttons[0]);
  const disabledButtons = buttons.slice(1);

  const handleButtonClick = (buttonName: string) => {
    buttonCallback(buttonName);
    setActiveButton(buttonName);
  };

  return (
    <div className={`flex ${isLarge ? "text-sm" : "text-xs"} align-left`}>
      {buttons.map((buttonName, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(buttonName)}
          className={`${
            activeButton === buttonName
              ? "bg-cyan-500 text-white font-bold"
              : "bg-transparent border-none"
          } ${isLarge ? "py-4" : "py-2"} ${
            isLarge ? "" : "rounded-lg"
          } text-black px-5`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
