import React from "react";
import TextArea from "./TextArea";

const TextSection = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 p-2">
        <TextArea
          title="Repairs"
          url="https://run.mocky.io/v3/9b974211-a383-4518-9f88-f3b737e9ed5f"
        />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <TextArea
          title="Network"
          url="https://run.mocky.io/v3/9319ab2c-4c19-4394-a773-92c5813efcf6"
        />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <TextArea
          title="Accessories"
          url="https://run.mocky.io/v3/ca7bdd69-d0a0-4a78-b550-3b5bec480966"
        />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <TextArea
          title="Trade in"
          url="https://run.mocky.io/v3/a0b18648-6d6f-48f2-ae38-e2d0630f7670"
        />
      </div>
    </div>
  );
};

export default TextSection;
