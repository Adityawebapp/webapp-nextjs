import React from "react";

const Step3 = ({formData,setFormData}) => {
  return (
    <div>
    <div className="d-flex ">
    <div className="w-100">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={(event)=>setFormData({...formData,name:event.target.value})}/>
        
        </div>
      

      </form>
    </div>
    </div></div>
  );
};

export default Step3;
