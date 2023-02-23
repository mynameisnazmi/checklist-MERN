import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import logo from "../Asset/logo.png";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

function SectionHeader() {
  const cookies = new Cookies();

  // console.log(cookies.get("ID"));
  // console.log(cookies.get("name"));
  // console.log(cookies.get("departemen"));
  // console.log(cookies.get("typeUser"));
  const name = cookies.get("name");
  const departemen = cookies.get("departemen");
  const loc = useLocation();
  const navigate = useNavigate();

  const backButton = () => {
    if (loc.pathname === "/dashbord") {
      cookies.remove("ID", { path: "/" });
      cookies.remove("typeUser", { path: "/" });
      cookies.remove("name", { path: "/" });
      cookies.remove("departemen", { path: "/" });
      //console.log(cookies.get("name"));
      navigate("/login");
    } else {
      //console.log(cookies.get("name"));
      navigate("/dashbord");
    }
  };

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  // let h = curdate.getHours();
  // let min = curdate.getMinutes();
  // let d = curdate.getDate();
  // let mon = curdate.getMonth() + 1;
  // let y = curdate.getFullYear();

  const addZero = (i) => {
    if (i < 10) i = "0" + i;
    return i;
  };

  const realTime =
    addZero(time.getHours()) +
    ":" +
    addZero(time.getMinutes()) +
    ":" +
    addZero(time.getSeconds()) +
    " " +
    addZero(time.getDate()) +
    "/" +
    addZero(time.getMonth() + 1) +
    "/" +
    time.getFullYear();

  //setInterval(realTime, 1000);
  //console.log(time);

  return (
    <>
      <div
        name="section-head"
        className="py-2 row-span-1 h-fit flex flex-col bg-[#E0F2FE] border-2 border-blue-900 
        sm:flex-row sm:h-[15vh] sm:static sm:py-0"
      >
        {/* Row1 */}

        <div className="basis-1/4 flex flex-col">
          <img
            className="m-auto w-1/3 h-auto sm:w-56 md:w-full px-2"
            alt="logo"
            src={logo}
          />
        </div>

        {/* Row1 end */}

        <div className="flex justify-center text text-center flex-col basis-1/5 sm:basis-[70%] w-full lg:h-full ">
          <p className=" font-semibold text-xl sm:text-4xl lg:text-6xl">
            Online&nbsp;Checklist
          </p>
          <div className="">
            <p className="text-sm sm:text-base md:text-xl ">
              {name} / {departemen}
            </p>
          </div>
          <div className="">
            <p className="text-sm sm:text-base md:text-xl">{realTime}</p>
          </div>
        </div>

        <div className="static h-full sm:flex basis-1/4 flex-row justify-end">
          <button
            onClick={backButton}
            className="absolute w-[18%] sm:w-[50%] right-0 top-0 sm:static"
          >
            <ArrowLeftOnRectangleIcon className="self-center w-full" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
