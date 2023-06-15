import { useEffect, useState } from "react";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import activities from "../Activities";

function ProgramTimescheme() {
  const [firstHalfActivities, setFirstHalfActivities] = useState([]);
  const [secondHalfActivities, setSecondHalfActivities] = useState([]);
  const [openingTime, setOpeningTime] = useState("13:00");
  const [breakTime, setBreakTime] = useState("15:00");
  const [closingTime, setClosingTime] = useState("16:50");
  const [corveeTime, setCorveeTime] = useState("17:00");

  const addActivityFirstHalf = () => {
    if (getSetActivities().length !== 0) {
      setFirstHalfActivities((firstHalfActivities) => [
        ...firstHalfActivities,
        getSetActivities()[0],
      ]);
    }
  };

  const addActivitySecondHalf = () => {
    if (getSetActivities().length !== 0) {
      setSecondHalfActivities((secondHalfActivities) => [
        ...secondHalfActivities,
        getSetActivities()[0],
      ]);
    }
  };

  const updateActivityNameFirstHalf = (index, e) => {
    let newArr = [...firstHalfActivities];
    newArr[index].name = e.target.value;
    setFirstHalfActivities(newArr);
  };

  const updateActivityNameSecondHalf = (index, e) => {
    let newArr = [...secondHalfActivities];
    newArr[index].name = e.target.value;
    setSecondHalfActivities(newArr);
  };

  const updateTimeFirstHalf = (index, e) => {
    let newArr = [...firstHalfActivities];
    newArr[index].time = e.target.value;
    setFirstHalfActivities(newArr);
  };

  const updateTimeSecondHalf = (index, e) => {
    let newArr = [...secondHalfActivities];
    newArr[index].time = e.target.value;
    setSecondHalfActivities(newArr);
  };

  const getTimeFirstHalf = (index) => {
    return firstHalfActivities[index].time;
  };

  const getTimeSecondHalf = (index) => {
    return secondHalfActivities[index].time;
  };

  const deleteActivityFirstHalf = (index) => {
    setFirstHalfActivities([
      ...firstHalfActivities.slice(0, index),
      ...firstHalfActivities.slice(index + 1, firstHalfActivities.length),
    ]);
  };

  const deleteActivitySecondHalf = (index) => {
    setSecondHalfActivities([
      ...secondHalfActivities.slice(0, index),
      ...secondHalfActivities.slice(index + 1, secondHalfActivities.length),
    ]);
  };

  const getOptions = (activities, activity) => {
    if (activities.name === activity.name) {
      return <option selected>{activities.name}</option>;
    }
    return <option>{activities.name}</option>;
  };

  const getActivityTimeFirstHalf = (index) => {
    for (let i = 0; i < getSetActivities().length; i++) {
      if (getSetActivities()[i].name === firstHalfActivities[index].name) {
        return getSetActivities()[i].time;
      }
    }
  };

  const getActivityTimeSecondHalf = (index) => {
    for (let i = 0; i < getSetActivities().length; i++) {
      if (getSetActivities()[i].name === secondHalfActivities[index].name) {
        return getSetActivities()[i].time;
      }
    }
  };

  const getSetActivities = () => {
    return JSON.parse(localStorage.getItem("activities"));
  };

  const getParameters = () => {
    return JSON.parse(localStorage.getItem("programParameters"));
  };

  useEffect(() => {
    let program = JSON.parse(localStorage.getItem("program"));
    if (program) {
      if (program.firstHalf.length !== 0) {
        setFirstHalfActivities(program.firstHalf);
      }
    }
    if (program) {
      if (program.secondHalf.length !== 0) {
        setSecondHalfActivities(program.secondHalf);
      }
    }
    if (!getParameters().opening) {
      setOpeningTime(null);
    }
    if (!getParameters().closing) {
      setClosingTime(null);
    }
    if (!getParameters().break) {
      setBreakTime(null);
    }
    if (!getParameters().corvee) {
      setCorveeTime(null);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "program",
      JSON.stringify({
        openingTime: openingTime,
        firstHalf: firstHalfActivities,
        breakTime: breakTime,
        secondHalf: secondHalfActivities,
        closingTime: closingTime,
        corveeTime: corveeTime,
      })
    );
  }, [
    firstHalfActivities,
    openingTime,
    breakTime,
    closingTime,
    corveeTime,
    secondHalfActivities,
  ]);

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

        {getParameters().opening && (
          <div className={"w-basic border-black border-2 border-t-0"}>
            <div
              className={"w-full bg-gray-400 flex justify-between text-white"}
            >
              <div className={"m-3"}>Opening</div>
              <div
                className={
                  "rounded-2xl bg-white flex border-black border-2 text-black"
                }
              >
                <input
                  className={"h-full w-12 text-center rounded-2xl p-1"}
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
        )}

        <div className={"max-h-40 overflow-y-auto overflow-x-clip"}>
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
                    getOptions(activities, activity)
                  )}
                </select>
                <div
                  className={
                    "rounded-2xl bg-white flex border-black border-2 text-black"
                  }
                >
                  <input
                    className={"h-full w-12 text-center rounded-2xl p-1"}
                    type={"time"}
                    onChange={(e) => {
                      updateTimeFirstHalf(index, e);
                    }}
                    value={getTimeFirstHalf(index)}
                  />
                  <FontAwesomeIcon
                    className={"h-7 m-2"}
                    icon={regular("clock")}
                    style={{ color: "#000000" }}
                  />
                </div>
                <div className={"p-3"}>
                  <i>
                    Recommended duration: {getActivityTimeFirstHalf(index)}{" "}
                  </i>
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
        </div>

        {getParameters().break && (
          <div className={"w-basic border-black border-2 border-t-0"}>
            <div
              className={"w-full bg-gray-400 flex justify-between text-white"}
            >
              <div className={"m-3"}>Break</div>
              <div
                className={
                  "rounded-2xl bg-white flex border-black border-2 text-black"
                }
              >
                <input
                  className={"h-full w-12 text-center rounded-2xl p-1"}
                  type={"time"}
                  onChange={(e) => {
                    setBreakTime(e.target.value);
                  }}
                  value={breakTime}
                />
                <FontAwesomeIcon
                  className={"h-7 m-2"}
                  icon={regular("clock")}
                  style={{ color: "#000000" }}
                />
              </div>
            </div>
          </div>
        )}

        <div className={"w-basic border-black border-2 border-t-0"}>
          <div className={"w-full bg-gray-600 flex justify-between text-white"}>
            <div className={"m-1"}>Second Half</div>
            <button
              onClick={() => {
                addActivitySecondHalf();
              }}
              className={"m-1"}
            >
              Add activity
            </button>
          </div>
        </div>

        <div className={"max-h-40 overflow-y-auto overflow-x-clip"}>
          {secondHalfActivities.map((activity, index) => (
            <div className={"w-basic border-black border-x-2 border-b-2"}>
              <div className={"w-full bg-white flex justify-between"}>
                <select
                  onChange={(e) => {
                    updateActivityNameSecondHalf(index, e);
                  }}
                  className={"border-black rounded-2xl border-2 p-1"}
                >
                  {getSetActivities().map((activities) =>
                    getOptions(activities, activity)
                  )}
                </select>
                <div
                  className={
                    "rounded-2xl bg-white flex border-black border-2 text-black"
                  }
                >
                  <input
                    className={"h-full w-12 text-center rounded-2xl p-1"}
                    type={"time"}
                    onChange={(e) => {
                      updateTimeSecondHalf(index, e);
                    }}
                    value={getTimeSecondHalf(index)}
                  />
                  <FontAwesomeIcon
                    className={"h-7 m-2"}
                    icon={regular("clock")}
                    style={{ color: "#000000" }}
                  />
                </div>
                <div className={"p-3"}>
                  <i>
                    Recommended duration: {getActivityTimeSecondHalf(index)}{" "}
                  </i>
                </div>
                <FontAwesomeIcon
                  icon={solid("trash-can")}
                  className={"cursor-pointer h-8 m-2"}
                  onClick={() => {
                    deleteActivitySecondHalf(index);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {getParameters().closing && (
          <div className={"w-basic border-black border-2 border-t-0"}>
            <div
              className={"w-full bg-gray-400 flex justify-between text-white"}
            >
              <div className={"m-3"}>Closing</div>
              <div
                className={
                  "rounded-2xl bg-white flex border-black border-2 text-black"
                }
              >
                <input
                  className={"h-full w-12 text-center rounded-2xl p-1"}
                  type={"time"}
                  onChange={(e) => {
                    setClosingTime(e.target.value);
                  }}
                  value={closingTime}
                />
                <FontAwesomeIcon
                  className={"h-7 m-2"}
                  icon={regular("clock")}
                  style={{ color: "#000000" }}
                />
              </div>
            </div>
          </div>
        )}

        {getParameters().corvee && (
          <div className={"w-basic border-black border-2 border-t-0"}>
            <div
              className={"w-full bg-gray-400 flex justify-between text-white"}
            >
              <div className={"m-3"}>Corvee</div>
              <div
                className={
                  "rounded-2xl bg-white flex border-black border-2 text-black"
                }
              >
                <input
                  className={"h-full w-12 text-center rounded-2xl p-1"}
                  type={"time"}
                  onChange={(e) => {
                    setCorveeTime(e.target.value);
                  }}
                  value={corveeTime}
                />
                <FontAwesomeIcon
                  className={"h-7 m-2"}
                  icon={regular("clock")}
                  style={{ color: "#000000" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramTimescheme;
