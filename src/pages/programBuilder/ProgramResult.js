import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ProgramPDF from "./ProgramPDF";
import programParamaters from "./ProgramParamaters";
import { Link } from "react-router-dom";

function ProgramResult() {
  const getParameters = () => {
    return JSON.parse(localStorage.getItem("programParameters"));
  };

  const getProgram = () => {
    return JSON.parse(localStorage.getItem("program"));
  };

  return (
    <div className="App">
      <div className={"text-3xl text-theme m-3"}>Check the result</div>

      <div className={"w-basic flex justify-between"}>
        <table
          className={
            "w-1/2 bg-white text-2xl max-h-96 overflow-x-clip overflow-y-auto"
          }
        >
          <tbody>
            {getProgram().openingTime && (
              <tr className={"border-2 border-black text-center"}>
                <td>Opening</td>
                <td>{getProgram().openingTime}</td>
              </tr>
            )}
            {getProgram().firstHalf.map((activity) => (
              <tr className={"border-2 border-black text-center"}>
                <td>{activity.name}</td>
                <td>{activity.time}</td>
              </tr>
            ))}
            {getProgram().breakTime && (
              <tr className={"border-2 border-black text-center"}>
                <td>Break</td>
                <td>{getProgram().breakTime}</td>
              </tr>
            )}
            {getProgram().secondHalf.map((activity) => (
              <tr className={"border-2 border-black text-center"}>
                <td>{activity.name}</td>
                <td>{activity.time}</td>
              </tr>
            ))}
            {getProgram().closingTime && (
              <tr className={"border-2 border-black text-center"}>
                <td>Closing</td>
                <td>{getProgram().closingTime}</td>
              </tr>
            )}
            {getProgram().corveeTime && (
              <tr className={"border-2 border-black text-center"}>
                <td>Corvee</td>
                <td>{getProgram().corveeTime}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className={"w-1/2 flex justify-center"}>
          <div className={"inline-grid p-10"}>
            <Link
              className={
                "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 text-center"
              }
              to="/"
            >
              Save
            </Link>
            <button
              className={
                "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
              }
            >
              <PDFDownloadLink
                document={<ProgramPDF />}
                fileName={getParameters().name + "-program"}
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download to PDF"
                }
              </PDFDownloadLink>
            </button>
            <button
              className={
                "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
              }
              onClick={() => {
                window.location.reload();
              }}
            >
              Edit
            </button>
            <button
              className={
                "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
              }
              onClick={() => {
                localStorage.removeItem("program");
                localStorage.removeItem("programParameters");
                localStorage.removeItem("activities");
                window.location.reload();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramResult;
