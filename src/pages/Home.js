import logo from "./images/logo2.jpg";
import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={"flex flex-col justify-between"}>
      <div className={"flex justify-center"}>
        <div
          className={
            "bg-white w-basic p-2 flex justify-center border-2 border-black rounded m-10"
          }
        >
          <div className={"text-3xl text-theme m-3 p-3"}>
            Welcome to the Activitybank Bram!!
          </div>
          <img
            src={logo}
            alt={"Home"}
            className={"border-purpleTheme border-2 rounded-full h-20"}
          />
        </div>
      </div>
      <div className={"flex justify-center"}>
        <Link to="/programBuilder">
          <div
            className={
              "bg-white p-2 flex justify-center border-2 border-black rounded m-10 hover:bg-gray-100"
            }
          >
            <div className={"text-3xl text-theme m-3 p-3"}>
              Build a new program!
            </div>
          </div>
        </Link>

        <div
          className={
            "bg-white p-2 flex justify-center border-2 border-black rounded m-10 hover:bg-gray-100 hover: cursor-not-allowed"
          }
        >
          <div className={"text-3xl text-theme m-3 p-3"}>
            Create a new activity!
          </div>
        </div>
      </div>
      <div className={"flex justify-center"}>
        <div
          className={
            "bg-white p-2 flex justify-center border-2 border-black rounded mx-10 hover:bg-gray-100 hover: cursor-not-allowed"
          }
        >
          <div className={"text-3xl text-theme m-3 p-3"}>My programs</div>
        </div>

        <div
          className={
            "bg-white p-2 flex justify-center border-2 border-black rounded mx-10 hover:bg-gray-100 hover: cursor-not-allowed"
          }
        >
          <div className={"text-3xl text-theme m-3 p-3"}>My activities</div>
        </div>
      </div>

      <div className={"flex justify-center"}>
        <div
          className={
            "bg-white p-2 flex justify-center border-2 border-black rounded m-10 hover:bg-gray-100"
          }
        >
          <a href={"https://youtu.be/I-YqDxWjZcU"}>
            <div className={"text-3xl text-theme m-3 p-3"}>
              Support our Kickstarter!!
            </div>
          </a>
          <a href={"https://youtu.be/I-YqDxWjZcU"}>
            <img
              src={
                "https://cdn.icon-icons.com/icons2/2429/PNG/512/kickstarter_logo_icon_147271.png"
              }
              alt={"Kickstarter logo"}
              className={"border-purpleTheme border-2 rounded-full h-20"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
