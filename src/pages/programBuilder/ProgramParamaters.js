import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ProgramPDF from "./ProgramPDF";

function ProgramParamaters() {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [opening, setOpening] = useState(true);
  const [closing, setClosing] = useState(true);
  const [selectValue, setSelectValue] = useState("Opening and closing");
  const [breakIs, setBreakIs] = useState(true);
  const [corvee, setCorvee] = useState(true);

  useEffect(() => {
    let parameters = localStorage.getItem("programParameters");

    if (parameters) {
      parameters = JSON.parse(parameters);
      setName(parameters.name);
      setTheme(parameters.theme);
      if (parameters.opening && parameters.closing) {
        setSelectValue("Opening and closing");
      } else if (parameters.opening && !parameters.closing) {
        setSelectValue("Opening");
      } else if (!parameters.opening && parameters.closing) {
        setSelectValue("Closing");
      } else {
        setSelectValue("None");
      }
      setBreakIs(parameters.break);
      setCorvee(parameters.corvee);
    } else {
      let program = {
        name: name,
        theme: theme,
        opening: opening,
        closing: closing,
        break: breakIs,
        corvee: corvee,
      };
      localStorage.setItem("programParameters", JSON.stringify(program));
    }
  }, []);

  useEffect(() => {
    if (name) {
      let program = {
        name: name,
        theme: theme,
        opening: opening,
        closing: closing,
        break: breakIs,
        corvee: corvee,
      };
      localStorage.setItem("programParameters", JSON.stringify(program));
    }
  }, [name, theme, opening, closing, breakIs, corvee]);

  useEffect(() => {
    if (selectValue === "Opening and closing") {
      setOpening(true);
      setClosing(true);
    } else if (selectValue === "Opening") {
      setOpening(true);
      setClosing(false);
    } else if (selectValue === "Closing") {
      setOpening(false);
      setClosing(true);
    } else {
      setOpening(false);
      setClosing(false);
    }
  }, [selectValue]);

  return (
    <div className="App">
      <div className={"space-y-2 mt-10"}>
        <div className={"text-3xl text-theme m-3"}>Select your parameters</div>

        <div
          className={
            "bg-white w-basic p-2 flex justify-between border-2 border-black rounded"
          }
        >
          <span className={"w-full p-1"}>Name of your program: </span>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={"w-full border-black border-2 p-1"}
            type={"text"}
          />
        </div>

        <div
          className={
            "bg-white w-basic p-2 flex justify-between border-2 border-black rounded"
          }
        >
          <span className={"w-full p-1"}>Theme of your program: </span>
          <input
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            className={"w-full border-black border-2 p-1"}
            type={"text"}
          />
        </div>

        <div
          className={
            "bg-white w-basic p-2 flex justify-between border-2 border-black rounded"
          }
        >
          <span className={"w-full p-1"}>Opening closing: </span>
          <select
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
            value={selectValue}
            className={"w-full border-black border-2 p-1"}
          >
            <option>Opening and closing</option>
            <option>Opening</option>
            <option>Closing</option>
            <option>None</option>
          </select>
        </div>

        <div
          className={
            "bg-white w-basic p-2 flex justify-between border-2 border-black rounded"
          }
        >
          <span className={"w-full p-1"}>Break: </span>
          <input
            checked={breakIs}
            onChange={(e) => {
              setBreakIs(e.target.checked);
            }}
            className={"w-10 border-black border-2 p-1"}
            type={"checkbox"}
          />
        </div>

        <div
          className={
            "bg-white w-basic p-2 flex justify-between border-2 border-black rounded"
          }
        >
          <span className={"w-full p-1"}>Corvee: </span>
          <input
            checked={corvee}
            onChange={(e) => {
              setCorvee(e.target.checked);
            }}
            className={"w-10 border-black border-2 p-1"}
            type={"checkbox"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgramParamaters;
