import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Step5 = () => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="d-flex align-content-center justify-content-center">
        <div className="w-100">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <PhoneInput
                 style={{width:"100%"}}
                country={"eg"}
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step5;
