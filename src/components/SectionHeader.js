import { Link, useLocation } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import logo from "../Asset/logo.png";
function SectionHeader() {
  function Locationview() {
    const loc = useLocation();
    //console.log(loc.pathname);
    if (loc.pathname === "/dashbord") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div
        name="section-head"
        className="relative sm:static row-span-1 h-fit flex flex-col bg-[#E0F2FE] border-2 border-blue-900 sm:flex-row sm:h-[23vh]"
      >
        {/* Row1 */}
        <div className="basis-3/12 flex flex-col pt-2">
          <div className="basis-3/5 flex">
            <img
              className="mx-auto w-1/3 h-auto self-center sm:w-2/3 md:w-10/12"
              alt="logo"
              src={logo}
            />
          </div>

          <div className="basis-1/5 mx-auto flex">
            <p className="self-center text-sm text-center sm:text-base md:text-xl ">
              Danang wijiyanto / Calibration
            </p>
          </div>

          <div className="basis-1/5 mx-auto flex">
            <p className="self-center text-sm sm:text-base md:text-xl">
              11:11 11-11-1111
            </p>
          </div>
        </div>
        {/* Row1 end */}

        <div className="basis-1/5 sm:basis-3/5 flex w-full border font-semibold text-xl lg:h-full sm:text-4xl lg:text-6xl sm:border-x-blue-900 border-y-[#E0F2FE]">
                    <p className="mx-auto self-center">Online&nbsp;Checklist</p>
         </div>

        <div className="absolute sm:static basis-1/6 right-0 top-[30%]">
          <Link to={Locationview() ? "/login" : "/dashbord"}>
            <div className="flex w-full h-full self center">
              <ArrowLeftOnRectangleIcon className="mx-auto h-auto w-2/3 max-sm:h-16" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
