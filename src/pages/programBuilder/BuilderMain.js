import ProgramParamaters from "./ProgramParamaters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";
import ProgramActivities from "./ProgramActivities";
import ProgramTimescheme from "./ProgramTimescheme";
import ProgramResult from "./ProgramResult";

function BuilderMain() {
  const [page, setPage] = useState(0);
  const [firstPage, setFirstPage] = useState(false);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);

  useEffect(() => {
    if (page > 0) {
      setFirstPage(true);
    }
    if (page > 1) {
      setSecondPage(true);
    }
    if (page > 2) {
      setThirdPage(true);
    }
  }, [page]);

  return (
    <div className="App">
      <div>
        <div className={"flex justify-center items-center m-5"}>
          <FontAwesomeIcon
            icon={regular("circle-play")}
            style={!firstPage ? { color: "#000000" } : { color: "#37B42F" }}
            size="7x"
            beat={page === 0}
          />

          <div
            className={!firstPage ? "h-3 w-40 bg-black" : "h-3 w-40 bg-theme"}
          />

          <FontAwesomeIcon
            icon={regular("circle-question")}
            style={!secondPage ? { color: "#000000" } : { color: "#37B42F" }}
            size="7x"
            beat={page === 1}
          />

          <div
            className={!secondPage ? "h-3 w-40 bg-black" : "h-3 w-40 bg-theme"}
          />
          <FontAwesomeIcon
            icon={regular("clock")}
            style={!thirdPage ? { color: "#000000" } : { color: "#37B42F" }}
            size="7x"
            beat={page === 2}
          />

          <div
            className={!thirdPage ? "h-3 w-40 bg-black" : "h-3 w-40 bg-theme"}
          />
          <FontAwesomeIcon
            icon={regular("circle-check")}
            style={{ color: "#000000" }}
            size="7x"
            beat={page === 3}
          />
        </div>
        <div className={"flex justify-center"}>
          {page === 0 && <ProgramParamaters />}
          {page === 1 && <ProgramActivities />}
          {page === 2 && <ProgramTimescheme />}
          {page === 3 && <ProgramResult />}
        </div>

        <div className={"flex justify-center m-5"}>
          <div className={"w-basic flex justify-between"}>
            <button
              className={
                page === 0
                  ? "invisible"
                  : "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              }
              onClick={() => {
                setPage(page - 1);
              }}
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              className={
                page === 3
                  ? "invisible"
                  : "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              }
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={page === 3}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuilderMain;
