import ProgramParamaters from "./ProgramParamaters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";

function BuilderMain() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <div>
        <div className={"flex justify-center items-center m-5"}>
          <FontAwesomeIcon
            icon={regular("circle-play")}
            style={{ color: "#000000" }}
            size="7x"
          />

          <div className={"h-3 w-40 bg-black"} />

          <FontAwesomeIcon
            icon={regular("circle-question")}
            style={{ color: "#000000" }}
            size="7x"
          />

          <div className={"h-3 w-40 bg-black"} />

          <FontAwesomeIcon
            icon={regular("clock")}
            style={{ color: "#000000" }}
            size="7x"
          />

          <div className={"h-3 w-40 bg-black"} />

          <FontAwesomeIcon
            icon={regular("circle-check")}
            style={{ color: "#000000" }}
            size="7x"
          />
        </div>
        <div className={"flex justify-center"}>
          <ProgramParamaters />
        </div>

        <div>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default BuilderMain;
