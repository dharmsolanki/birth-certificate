import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  // Define the inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    width: "50%",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    textAlign: "left",
    border: "2px solid white",
    padding: "30px",
  };

  const listItemStyle = {
    padding: "10px",
  };

  return (
    <>
      <div style={containerStyle} className="container mb-4">
        <ul>
          <h2>INSTRUCTION</h2>
          <li style={listItemStyle}>
            This Portal Is Only For Gujarat State, you can't Print Birth
            Certificate if you are from Another State.
          </li>
          <li style={listItemStyle}>You Can Print Birth Certificate in Only Gujarati Language.</li>
          <li style={listItemStyle}>
            After the birth certificate is printed, it will be considered valid
            only when an Authorized officer or Talati affixes signature or stamp
            on it.
          </li>
          <li style={listItemStyle}>Please fill out all the Details in Gujarati.</li>
        </ul>
      </div>
      <Link to="/create-birth-certificate" className="btn btn-success">
        Continue to Portal
      </Link>
    </>
  );
}
