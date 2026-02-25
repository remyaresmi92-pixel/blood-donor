import React from "react";
import img from "../../assets/bg.jpg";
import "../Styles/Landingpage.css";
function Landingpage() {
  return (
    <div className="bgimage">
      <h1>
        <strong>BLOOD DONOR AVAILABILITY SYSTEM</strong>
      </h1>
      <div className="landbut">
        <button type="button" class="btn btn-primary">User Login</button>
        <button type="button" class="btn btn-success">Acceptor Registration</button>
      </div>
    </div>
  );
}

export default Landingpage;
