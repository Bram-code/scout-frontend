import { Link } from "react-router-dom";
import * as React from "react";

function Choose() {
  return (
    <div className="h-screen grid justify-center flex-auto content-center">
      <div className={"flex space-x-10"}>
        <Link to="/programBuilder">Build a program</Link>

        <p>Build an activity</p>
      </div>
    </div>
  );
}

export default Choose;
