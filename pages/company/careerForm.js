import React from "react";

const CareerForm = () => {
  return (
    <>

    <style jsx>{`
        .career-main {
          background-image: linear-gradient(to right top, #5e8cd1, #2b9abf, #4d9fa0, #789e8a, #969c89);
        }
        
      `}</style>
      <div className=" career-main">

        <div className="row justify-content-center m-0 py-5">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card shadow m-2 bg-white">
              <div className="card-title text-center bottom_Textline_center position-relative">
                <h2 className="p-3 fs-2">Upload Resume</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="">Enter Name</label>

                      <div className=" mb-3">
                        <input className="form-control" type="text" />
                      </div>

                      <div className="">
                        <label htmlFor="floatingPassword">Email</label>

                        <input
                          type="email"
                          className="form-control"
                          id="floatingPassword"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-6 mb-3">
                      <label htmlFor="">Sur name </label>

                      <div className=" mb-3">
                        <input type="text" className="form-control" />
                      </div>

                      <div className="">
                        <label htmlFor="floatingPassword">Contact No</label>

                        <input
                          type="number"
                          className="form-control"
                          id="floatingPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        Upload your CV
                      </label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>

                  <div className="d-grid col-4 my_button float-end mt-3">
                    <button type="submit" className="btn">
                      Submit
                      <i className="fa fa-spinner fa-spin fa-fw"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
