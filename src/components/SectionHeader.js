import { Link } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import logo from "../Asset/logo.png";
function SectionHeader() {
  return (
    <>
      <div
        name="section-head"
        className="row-span-1 flex flex-col bg-[#E0F2FE] border-2 border-blue-900 sm:flex-row"
      >
        {/* Row1 */}
        <div className="basis-3/12 flex flex-col ">
          <div className="basis-3/5 flex">
            <img
              className="mx-auto w-1/3 h-auto self-center sm:w-2/3 md:w-10/12"
              alt="logo"
              src={logo}
            />
          </div>

          <div className="basis-1/5 mx-auto flex">
            <p className="self-center text-sm sm:text-base md:text-xl">
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

        <div className="basis-3/5 w-full border border-x-blue-900 border-y-[#E0F2FE]">
          <div className="flex  h-full font-semibold text-4xl sm:text-4xl lg:text-7xl">
            <span className="mx-auto self-center">Online&nbsp;Checklist</span>
          </div>
        </div>

        <div className="basis-1/6">
          <Link to="/login">
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
