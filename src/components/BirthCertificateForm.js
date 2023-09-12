import React, { useState, useRef } from "react";
import { format } from "date-fns";
import { gu } from "date-fns/locale";
import html2canvas from "html2canvas";
import "../css/BirthCertificateForm.css";
import LoadingBar from "react-top-loading-bar";

export default function BirthCertificateForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [pob, setPob] = useState("");
  const [nom, setNom] = useState("");
  const [nof, setNof] = useState("");
  const [dist, setDist] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");
  const [regno, setRegNo] = useState("");
  const [dor, setDor] = useState("");
  const [doi, setDoi] = useState("");
  const [clicked, setClicked] = useState(false);
  const certificateRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const disableCreate =
    !name ||
    !gender ||
    !dob ||
    !pob ||
    !nom ||
    !nof ||
    !dist ||
    !taluka ||
    !village ||
    !regno ||
    !dor ||
    !doi;

  // Function to format the date in Gujarati with numbers
  const formatGujaratiDate = (dateStr) => {
    if (!dateStr) return ""; // Handle empty date string
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return ""; // Handle invalid date

    const formattedDate = format(date, "dd/MM/yyyy", { locale: gu });
    const gujaratiNumbers = ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"];
    return formattedDate.replace(
      /[0-9]/g,
      (match) => gujaratiNumbers[parseInt(match)]
    );
  };

  const formattedDob = formatGujaratiDate(dob);
  const formattedDor = formatGujaratiDate(dor);
  const formattedDoi = formatGujaratiDate(doi);

  const convertToGujaratiNumber = (number) => {
    const arabicNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const gujaratiNumbers = ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"];

    return number.replace(
      /[0-9]/g,
      (match) => gujaratiNumbers[arabicNumbers.indexOf(match)]
    );
  };

  // onchange functions

  const handleName = (event) => {
    let valueOfName = event.target.value;
    setName(valueOfName);
  };

  const handleGender = (event) => {
    let valueOfGender = event.target.value;
    setGender(valueOfGender);
  };

  const handleDob = (event) => {
    let valueOfDob = event.target.value;
    setDob(valueOfDob);
  };

  const handlePob = (event) => {
    let valueOfPob = event.target.value;
    setPob(valueOfPob);
  };

  const handleNom = (event) => {
    let valueOfNom = event.target.value;
    setNom(valueOfNom);
  };

  const handleNof = (event) => {
    let valueOfNof = event.target.value;
    setNof(valueOfNof);
  };

  const handleDist = (event) => {
    let valueOfDist = event.target.value;
    setDist(valueOfDist);
  };

  const handleTaluka = (event) => {
    let valueOfTaluka = event.target.value;
    setTaluka(valueOfTaluka);
  };

  const handleVillage = (event) => {
    let valueOfVillage = event.target.value;
    setVillage(valueOfVillage);
  };

  const handleRegNo = (event) => {
    let valueOfRegNo = event.target.value.replace(/[^0-9]/g, "");
    setRegNo(valueOfRegNo);
  };

  const handleDor = (event) => {
    let valueOfDor = event.target.value;
    setDor(valueOfDor);
  };

  const handleDoi = (event) => {
    let valueOfDoi = event.target.value;
    setDoi(valueOfDoi);
  };

  // onchange functions end

  // onclick

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
      setClicked(true);
    }, 2000);
  };

  // onclick end

const downloadCertificateAsImage = () => {
  const certificateElement = document.querySelector(".certificate");

  if (!certificateElement) {
    console.error("Certificate content not found.");
    return;
  }

  // Use html2canvas to capture the content of the certificateElement
  html2canvas(certificateElement, { width: 1080, height: 1080 }).then((canvas) => {
    // Crop the canvas to remove left and right spaces
    const croppedCanvas = cropOuterImage(canvas, 215, 50, 190, 80); // Adjust these values as needed

    // Convert the cropped canvas to a data URL
    const dataUrl = croppedCanvas.toDataURL("image/png");

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "certificate.png";
    link.click();
  });
};

// Function to crop from outer side
const cropOuterImage = (image, left, top, right, bottom) => {
  const canvas = document.createElement("canvas");
  const width = image.width - left - right;
  const height = image.height - top - bottom;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, left, top, width, height, 0, 0, width, height);
  return canvas;
};


  return (
    <>
      <LoadingBar color="#f11946" progress={progress} height={4}/>
      <div className="container my-5">
        <form>
          {/* first row */}
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputName" lang="gu">
                  નામ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="નામ દાખલ કરો"
                  onChange={handleName}
                  value={name}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="genderSelect" lang="gu">
                  લિંગ
                </label>
                <select
                  className="form-control"
                  id="genderSelect"
                  value={gender} // Set the selected value from the state
                  onChange={handleGender} // Attach the onChange event handler
                >
                  <option value="">પસંદ કરો</option>
                  <option value="પુરુષ">પુરુષ</option>
                  <option value="સ્ત્રી">સ્ત્રી</option>
                  <option value="અન્ય">અન્ય</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputDob" lang="gu">
                  જન્મ તારીખ
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputDob"
                  onChange={handleDob}
                  value={dob}
                />
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputPob" lang="gu">
                  જન્મસ્થળ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPob"
                  placeholder="જન્મસ્થળ દાખલ કરો"
                  onChange={handlePob}
                  value={pob}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputNom" lang="gu">
                  માતાનું નામ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNom"
                  placeholder="માતાનું નામ દાખલ કરો"
                  onChange={handleNom}
                  value={nom}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputNof" lang="gu">
                  પિતાનું નામ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNof"
                  placeholder="પિતાનું નામ દાખલ કરો"
                  onChange={handleNof}
                  value={nof}
                />
              </div>
            </div>
          </div>

          {/* third row */}
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputDistrict" lang="gu">
                  જિલ્લો
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputDistrict"
                  placeholder="જિલ્લો દાખલ કરો"
                  onChange={handleDist}
                  value={dist}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputTaluka" lang="gu">
                  તાલુકો
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputTaluka"
                  placeholder="તાલુકો દાખલ કરો"
                  onChange={handleTaluka}
                  value={taluka}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputVillage" lang="gu">
                  ગામ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputVillage"
                  placeholder="ગામનું નામ દાખલ કરો"
                  onChange={handleVillage}
                  value={village}
                />
              </div>
            </div>
          </div>

          {/* fourth row */}
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputReg" lang="gu">
                  જન્મ નોંધણી નંબર
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputReg"
                  placeholder="નોંધણી નંબર દાખલ કરો"
                  onChange={handleRegNo}
                  value={regno}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputRegDate" lang="gu">
                  નોંધણી તારીખ
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputRegDate"
                  onChange={handleDor}
                  value={dor}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="exampleInputIssueDate" lang="gu">
                  સર્ટિફિકેટ કાઢી આપ્યાની તારીખ
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputIssueDate"
                  onChange={handleDoi}
                  value={doi}
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-info mt-4"
            onClick={handleClick}
            disabled={disableCreate}
          >
            Create Certificate
          </button>
        </form>

        {clicked && (
          <>
            <div className="certificate mt-4" ref={certificateRef}>
              <img
                src="/certificate.png"
                alt=""
                height="1080px"
                width="720px"
              />

              <span className="name">{name}</span>
              <span className="gender">{gender}</span>
              <span className="dob">{formattedDob}</span>
              <span className="pob">{pob}</span>
              <span className="nom">{nom}</span>
              <span className="nof">{nof}</span>
              <span className="village">મૂ. {village}</span>
              <span className="taluka">તા. {taluka}</span>
              <span className="dist">જી. {dist}</span>
              <span className="regno">{convertToGujaratiNumber(regno)}</span>
              <span className="dor">{formattedDor}</span>
              <span className="doi">{formattedDoi}</span>
              <span className="village-top">{village}</span>
              <span className="taluka-top">{taluka}</span>
              <span className="dist-top">{dist}</span>
            </div>
            <div className="btn_container">
              <button
                className="btn btn-success btn_download"
                onClick={downloadCertificateAsImage}
              >
                Download Certificate
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
