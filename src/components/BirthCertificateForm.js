import React, { useState } from "react";

export default function BirthCertificateForm() {
  const [name, setName] = useState("");

  const handleName = (event) => {
    let valueOfName = event.target.value;
    setName(valueOfName);
  };
  return (
    <>
      <div className="container my-5">
        <form>
          {/* first row */}

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Enter Name"
                  onChange={handleName}
                  value={name}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="genderSelect">Gender</label>
                <select className="form-control" id="genderSelect">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputDob">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputDob"
                />
              </div>
            </div>
          </div>

          {/* second row  */}
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputPob">Place of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPob"
                  placeholder="Enter Place of Birth"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputPob">Name Of Mother</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNom"
                  placeholder="Enter Name Of Mother"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputPob">Name Of Father</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNof"
                  placeholder="Enter Name Of Father"
                />
              </div>
            </div>
          </div>

          {/* third row  */}
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputPob">District</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputDistrict"
                  placeholder="Enter District"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputPob">Taluka/Sub Dist.</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputTaluka"
                  placeholder="Enter Taluka"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputPob">Village</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputVillage"
                  placeholder="Enter Name of Village"
                />
              </div>
            </div>
          </div>

          {/* fourth row  */}
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputReg">Registration Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputReg"
                  placeholder="Enter Registration Number"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputRegDate">Registration Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputRegDate"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputIssueDate">Date of Issue</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputIssueDate"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
