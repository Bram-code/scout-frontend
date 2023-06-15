import { Link } from "react-router-dom";
import * as React from "react";

function Choose() {
  return (
    <div className="h-screen grid justify-center flex-auto content-center">
      <div className={"flex space-x-10"}>
        <Link to="/programBuilder">
          <div
            className={
              "bg-white p-2 flex justify-center border-2 border-black rounded mx-10 hover:bg-gray-100"
            }
          >
            <div className={"text-3xl text-theme m-3 p-3"}>Build a program</div>
          </div>
        </Link>

        <div
          className={
            "bg-white p-2 flex justify-center border-2 border-black rounded mx-10 hover:bg-gray-100 hover: cursor-not-allowed"
          }
        >
          <div className={"text-3xl text-theme m-3 p-3"}>Build an activity</div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
