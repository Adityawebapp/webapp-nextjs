import React from "react";

const Graphic = () => {
  const data = [
    { id: 1, name: "Indeisgn" },
    { id: 2, name: "Illustrator " },
    { id: 3, name: "Photoshop" },
    { id: 4, name: "Premire" },
    { id: 5, name: "After Effect" },
    { id: 6, name: "Other" },

  ];
  const handleClick = (e) => {
    console.log("select value", e);
  };

  return (
    <>
      <h1 className="text-center "> get quote</h1>

      <div className="quoteForm d-flex justify-content-center ">
        <div className="w-100">
          <div className="row row-cols-3 g-4 justify-content-center">

            {data.map((item) => (
              <div className="col" key={item.id}>
                <button
                  className="btn  w-100"
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

export default Graphic;
