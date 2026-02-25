import React from "react";
import "../Styles/Landingpage.css"
import Nav from "./Nav"
function Landingpage() {
  return (
    <div>
<Nav/>
    <div className="bgimage">
      {/* <img src={img} alt="" /> */}
      <h1>
        <strong>BLOOD DONOR AVAILABILITY SYSTEM</strong>
      </h1>
      <div className="landbut">
        <button type="button" class="btn btn-primary">User Login</button>
        <button type="button" class="btn btn-success">Acceptor Registration</button>
      </div>
    </div>
        </div>

  );
}

export default Landingpage;
