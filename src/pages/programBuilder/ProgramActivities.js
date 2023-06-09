import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";

function ProgramActivities() {
  let activities = [
    {
      name: "Hunter Ball",
      time: "15 min",
      tags: ["water"],
    },
    { name: "Hunter Ball 2", time: "15 min", tags: ["water"] },
    { name: "Hunter Ball 3", time: "15 min", tags: ["water"] },
    { name: "Hunter Ball 3", time: "15 min", tags: ["water"] },
    { name: "Hunter Ball 3", time: "15 min", tags: ["water"] },
  ];

  const [setActivities, setSetActivities] = useState([]);

  const addToProgram = (activity) => {
    let activities = getSetActivities();
    if (activities) {
      activities.push(activity);
    } else {
      activities = [activity];
    }
    localStorage.setItem("activities", JSON.stringify(activities));
    setSetActivities(activities);
  };

  const removeFromProgram = (index) => {
    console.log(index);
    let activities = getSetActivities();

    activities.splice(index, 1);

    localStorage.setItem("activities", JSON.stringify(activities));
    setSetActivities(activities);
  };

  const getSetActivities = () => {
    return (activities = JSON.parse(localStorage.getItem("activities")));
  };

  useEffect(() => {
    setSetActivities(getSetActivities());
  }, []);

  return (
    <div className="App">
      <div className={"w-basic flex justify-between"}>
        <div className={"w-4/6 max-h-[30rem] overflow-y-auto"}>
          <table
            className={
              "w-full table-auto border-black border-2 border-spacing-y-2 text-2xl "
            }
          >
            <thead>
              <tr
                className={
                  "divide-black divide-x-2 border-b-2 border-black bg-white"
                }
              >
                <th>Activity</th>
                <th>Time</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody className={"bg-theme"}>
              {activities.map((activity) => (
                <>
                  <tr className={"bg-white border-2 border-black space-y-5"}>
                    <td className={"ml-10"}>{activity.name}</td>
                    <td>{activity.time}</td>
                    <td>
                      <div className={"flex justify-end mr-2"}>
                        <FontAwesomeIcon
                          icon={solid("plus")}
                          style={{ color: "#37B42F" }}
                          onClick={() => {
                            addToProgram(activity);
                          }}
                          className={"cursor-pointer"}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className={"h-3 bg-theme"}>
                    <td /> <td /> <td />
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className={"w-1/4 border-2"}>
          <div
            className={
              "flex justify-center border-2 border-black bg-gray-600 text-white text-2xl"
            }
          >
            <div>Activities</div>
          </div>
          <div className={"w-full max-h-[28rem] overflow-y-auto"}>
            <table
              className={"w-full border-black border-2 !border-t-0 text-2xl"}
            >
              {setActivities && (
                <tbody className={"bg-theme"}>
                  {setActivities.map((activity, index) => (
                    <>
                      <tr
                        className={"bg-white border-black border-2 space-y-5"}
                      >
                        <td className={"ml-10"}>{activity.name}</td>
                        <td>
                          <div className={"flex justify-end mr-2"}>
                            <FontAwesomeIcon
                              onClick={() => {
                                removeFromProgram(index);
                              }}
                              icon={solid("trash-can")}
                              className={"cursor-pointer"}
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramActivities;
