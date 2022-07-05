import React from "react";
import Application from "./buttonPages/Application";
import Digital from "./buttonPages/Digital";
import Game from "./buttonPages/Game";
import Graphic from "./buttonPages/Graphic";
import Web from "./buttonPages/Web";

const Step1 = () => {
  const Fooddata = [
    { id: 1, name: "Graphic Design" },
    { id: 2, name: "App Development" },
    { id: 3, name: "Game Development" },
    { id: 4, name: "Web Development" },
    { id: 5, name: "Digital Development" },
    { id: 6, name: "Other" },
  ];
  const handleClick = (e) => {
    console.log(e);
    if (e === "Graphic Design") {
      <Application />;
    }
  };

  return (
    <>
      <h1 className="text-center "> get quote</h1>

      <div className="quoteForm d-flex justify-content-center ">
        <div className="w-100">
          <div className="row row-cols-2 g-3 justify-content-center  ">
            {Fooddata.map((item) => (
              <div className="col" key={item.id}>
                <button
                  className="btn btn-info w-75"
                  onClick={() => handleClick(item.name)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
