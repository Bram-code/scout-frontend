import { useEffect, useState } from "react";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProgramTimescheme() {
  const [firstHalfActivities, setFirstHalfActivities] = useState([]);
  const [openingTime, setOpeningTime] = useState("13:00");

  const addActivityFirstHalf = () => {
    setFirstHalfActivities((firstHalfActivities) => [
      ...firstHalfActivities,
      getSetActivities()[0],
    ]);
  };

  const updateActivityNameFirstHalf = (index, e) => {
    let newArr = [...firstHalfActivities];
    newArr[index].name = e.target.value;
    setFirstHalfActivities(newArr);
  };

  const deleteActivityFirstHalf = (index) => {
    setFirstHalfActivities([
      ...firstHalfActivities.slice(0, index),
      ...firstHalfActivities.slice(index + 1, firstHalfActivities.length),
    ]);
  };

  const getOptionsFirstHalf = (activities, activity) => {
    if (activities.name === activity.name) {
      return <option selected>{activities.name}</option>;
    }
    return <option>{activities.name}</option>;
  };

  const getSetActivities = () => {
    return JSON.parse(localStorage.getItem("activities"));
  };

  useEffect(() => {
    let program = JSON.parse(localStorage.getItem("program"));
    if (program.firstHalf.length !== 0) {
      setFirstHalfActivities(program.firstHalf);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "program",
      JSON.stringify({
        openingTime: openingTime,
        firstHalf: firstHalfActivities,
      })
    );
  }, [firstHalfActivities, openingTime]);

  return (
    <div>
      <div>
        <div className={"text-3xl text-theme m-3"}>Build a timescheme</div>
        <div className={"w-basic border-black border-2"}>
          <div className={"w-full bg-gray-600 flex justify-between text-white"}>
            <div className={"m-1"}>First half</div>
            <button
              onClick={() => {
                addActivityFirstHalf();
              }}
              className={"m-1"}
            >
              Add activity
            </button>
          </div>
        </div>

        <div className={"w-basic border-black border-2 border-t-0"}>
          <div className={"w-full bg-gray-400 flex justify-between text-white"}>
            <div className={"m-3"}>Opening</div>
            <div
              className={
                "rounded-2xl bg-white flex border-black border-2 text-black"
              }
            >
              <input
                className={"h-full w-12 text-center rounded-2xl p-1"}
                min={"13:00"}
                max={"17:00"}
                type={"time"}
                onChange={(e) => {
                  setOpeningTime(e.target.value);
                }}
                value={openingTime}
              />
              <FontAwesomeIcon
                className={"h-7 m-2"}
                icon={regular("clock")}
                style={{ color: "#000000" }}
              />
            </div>
          </div>
        </div>

        {firstHalfActivities.map((activity, index) => (
          <div className={"w-basic border-black border-x-2 border-b-2"}>
            <div className={"w-full bg-white flex justify-between"}>
              <select
                onChange={(e) => {
                  updateActivityNameFirstHalf(index, e);
                }}
                className={"border-black rounded-2xl border-2 p-1"}
              >
                {getSetActivities().map((activities) =>
                  getOptionsFirstHalf(activities, activity)
                )}
              </select>
              <div className={"rounded-2xl  flex border-black border-2"}>
                <input
                  className={"h-full w-14 rounded-2xl p-1"}
                  type={"number"}
                />
                <FontAwesomeIcon
                  className={"h-7 m-2"}
                  icon={regular("clock")}
                  style={{ color: "#000000" }}
                />
              </div>
              <FontAwesomeIcon
                icon={solid("trash-can")}
                className={"cursor-pointer h-8 m-2"}
                onClick={() => {
                  deleteActivityFirstHalf(index);
                }}
              />
            </div>
          </div>
        ))}

        <div className={"w-basic border-black border-2 border-t-0"}>
          <div className={"w-full bg-gray-400 flex justify-between text-white"}>
            <div className={"m-3"}>Break</div>
            <div
              className={
                "rounded-2xl bg-white flex border-black border-2 text-black"
              }
            >
              <input
                className={"h-full w-14 rounded-2xl p-1"}
                type={"number"}
              />
              <FontAwesomeIcon
                className={"h-7 m-2"}
                icon={regular("clock")}
                style={{ color: "#000000" }}
              />
            </div>
          </div>
        </div>

        <div className={"w-basic border-black border-2 border-t-0"}>
          <div className={"w-full bg-gray-600 flex justify-between text-white"}>
            <div className={"m-1"}>Second Half</div>
            <button
              onClick={() => {
                addActivityFirstHalf();
              }}
              className={"m-1"}
            >
              Add activity
            </button>
          </div>
        </div>

        <div className={"w-basic border-black border-2 border-t-0"}>
          <div className={"w-full bg-gray-400 flex justify-between text-white"}>
            <div className={"m-3"}>Closing</div>
            <div
              className={
                "rounded-2xl bg-white flex border-black border-2 text-black"
              }
            >
              <input
                className={"h-full w-14 rounded-2xl p-1"}
                type={"number"}
              />
              <FontAwesomeIcon
                className={"h-7 m-2"}
                icon={regular("clock")}
                style={{ color: "#000000" }}
              />
            </div>
          </div>
        </div>

        <div className={"w-basic border-black border-2 border-t-0"}>
          <div className={"w-full bg-gray-400 flex justify-between text-white"}>
            <div className={"m-3"}>Corvee</div>
            <div
              className={
                "rounded-2xl bg-white flex border-black border-2 text-black"
              }
            >
              <input
                className={"h-full w-14 rounded-2xl p-1"}
                type={"number"}
              />
              <FontAwesomeIcon
                className={"h-7 m-2"}
                icon={regular("clock")}
                style={{ color: "#000000" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramTimescheme;
