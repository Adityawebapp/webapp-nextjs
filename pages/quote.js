import React, { useState } from "react";
import Step1 from "../components/quote/Step1";
import Step2 from "../components/quote/Step2";
import Step3 from "../components/quote/Step3";
import Step4 from "../components/quote/Step4";
import Step5 from "../components/quote/Step5";
import { useRouter } from "next/router";

const Quote = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    project:"",
    select_Project:"",
    conuntry_name:"",
    conuntry_region:"",
    name:"",
    email:"",
    mobile:""
  })

  const router = useRouter();

  const FormTitle = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  const pageDisplay = () => {
    if (page == 0) {
      return <Step1 />;
    } else if (page == 1) {
      return <Step2 />;
    } else if (page == 2) {
      return <Step3 />;
    } else if (page == 3) {
      return <Step4 />;
    } else if (page == 4) {
      return <Step5 />;
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="form">
              <div className="processbar h-100">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    height: "10px",
                    width:
                      page === 0
                        ? "33.33%"
                        : page == 1
                        ? "44%"
                        : page == 2
                        ? "55%"
                        : page == 3
                        ? "65%"
                        : "100%",
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="form-container">
                <div className="header">
                  <h1>{FormTitle[page]}</h1>
                </div>
                <div className="body">{pageDisplay()}</div>
                <div className="footer my-3">
                  <button
                    className="btn btn-info"
                    disabled={page == 0}
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    className="btn btn-info"
                    disabled={page == FormTitle.length - 1}
                    onClick={() => {
                      setPage((currPage) => currPage + 1);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
