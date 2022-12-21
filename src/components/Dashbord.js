import { Link } from "react-router-dom";
import logo from "../Asset/logo.png";
import centang from "../Asset/centang.png";
//import review from "../Asset/review.png";
//import { HomeModernIcon } from "@heroicons/react/24/solid";
function Dashbord() {
  return (
    <>
      <div className="grid grid-rows-3 h-screen">
        <div className="grid grid-cols-10 h-2/3  max-sm:grid-rows-3 gap-1 max-sm:grid-cols-1">
          <div className="col-span-3 grid-rows-3 h-full w-full min-w-max max-sm: max-sm:grid-rows-3">
            {/* logo argh */}
            <div className="grid h-3/5 w-full mt-2 max-sm:h-2/3 max-sm:m-0">
              <div
                className="h-4/5 bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: "url(" + logo + ")" }}
              ></div>
            </div>
            {/* logo argha end */}
            {/* user */}
            <div className="grid h-1/6 place-content-center font-medium max-sm:h-1/3">
              Danang wijiyanto Calibration
            </div>
            {/* user end */}
            {/* date */}
            <div className="grid h-1/6 place-content-center font-medium max-sm:h-1/3">
              11:11 11-11-1111
            </div>
            {/* date end */}
          </div>
          <div className="col-span-5">
            <span className="grid place-content-center h-full w-full font-semibold text-7xl max-sm:text-xl">
              Online Checklist
            </span>
          </div>
          <div className=" col-span-2 grid grid-rows-5 place-content-center">
            <div></div>
            <div>
              <Link
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md"
                to="/login"
              >
                {" "}
                Sign Out
              </Link>
            </div>

            <div></div>
            <div></div>
          </div>
        </div>
        <div className="grid grid-cols-10 bg-black gap-1">
          <div></div>
          <div></div>
          <div className="grid grid-rows-6 col-span-3 w-full">
            <div className="grid row-span-4 justify-items-center ">
              <img
                src={centang}
                alt=""
                className="w-5/6 h-5/6 self-center"
              ></img>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="col-span-3"></div>
          <div></div>
          <div></div>
        </div>
        <div className="grid">
          <div className="grid grid-row-8 h-full w-full">
            <div></div>
            <div className="flex place-content-center">
              <button class="h-2/5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
                Submit
              </button>
            </div>
            <div className="h-5/6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
