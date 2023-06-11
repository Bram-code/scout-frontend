function ProgramResult() {
  return (
    <div className="App">
      <div className={"w-basic flex justify-between"}>
        <table className={"w-1/2 bg-white text-2xl"}>
          <tbody>
            <tr className={"border-2 border-black text-center"}>
              <td>Opening</td>
              <td>13:00</td>
            </tr>
            <tr className={"border-2 border-black text-center"}>
              <td>Chair Dance</td>
              <td>13:15</td>
            </tr>
            <tr className={"border-2 border-black text-center"}>
              <td>Hunter ball</td>
              <td>14:00</td>
            </tr>
            <tr className={"border-2 border-black text-center"}>
              <td>Scavenger Hunt</td>
              <td>14:30</td>
            </tr>
            <tr className={"border-2 border-black text-center"}>
              <td>Break</td>
              <td>15:00</td>
            </tr>
            <tr className={"border-2 border-black text-center"}>
              <td>Knot Tying Relay</td>
              <td>15:30</td>
            </tr>
            <tr className={"border-2 border-black text-center"}>
              <td>Closing</td>
              <td>16:50</td>
            </tr>
            <tr className={"border-2 border-black text-center"}>
              <td>Corvee</td>
              <td>17:00</td>
            </tr>
          </tbody>
        </table>
        <div className={"w-1/2 flex justify-center"}>
          <div className={"inline-grid p-10"}>
            <button
              className={
                "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
              }
            >
              Save
            </button>
            <button
              className={
                "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
              }
            >
              Download PDF
            </button>
            <button
              className={
                "bg-theme hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
              }
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramResult;
