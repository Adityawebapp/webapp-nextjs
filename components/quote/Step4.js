import React from "react";

const Step3 = ({formData,setFormData}) => {
  return (
    <div>
    <div className="d-flex align-content-center justify-content-center">
    <div className="w-100">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={(event)=>setFormData({...formData,email:event.target.value})}/>
     
        
        </div>
     

      </form>
    </div>
    </div></div>
  );
};

export default Step3;
