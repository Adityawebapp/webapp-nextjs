import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Step2 = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <div className="d-flex align-content-center">
        <div className="w-50">
          <div className="row">
            <div className="col-6">
              <CountryDropdown
                class="form-select"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>

            <div className="col-6">
              <RegionDropdown
                class="form-select"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
              />
            </div>
          </div>
        </div>

      
      </div>
      <div>{country}</div>
        <div>{region}</div>
    </>
  );
};

export default Step2;
