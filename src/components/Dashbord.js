import { Link } from "react-router-dom";
import logo from "../Asset/logo.png";
import checklist from "../Asset/centang.png";
import review from "../Asset/review.png";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

function Dashbord() {
  return (
    <>
      <div className="grid grid-rows-8 h-screen">
        <div name="section-head" className="row-span-1 flex flex-col bg-[#E0F2FE] border-2 border-blue-900 sm:flex-row">
          {/* Row1 */}
          <div className="basis-3/12 flex flex-col ">
            <div className="basis-3/5 flex">
              <img className="mx-auto w-1/3 h-auto self-center sm:w-2/3 md:w-10/12" src={logo} />
            </div>

            <div className="basis-1/5 mx-auto flex">
              <p className="self-center text-sm sm:text-base md:text-xl">
                Danang wijiyanto / Calibration
              </p>
            </div>

            <div className="basis-1/5 mx-auto flex">
              <p className="self-center text-sm sm:text-base md:text-xl">
                11:11 11-11-1111</p>
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

        <div name="section-mid-1" className="row-span-4 flex flex-row bg-slate-100">
          <div name="section-sub1" className="basis-1/2 self-center flex justify-start">
            <div name="border" className="flex flex-col w-[90%] h-auto ml-[3vw] border border-blue-900 rounded-lg sm:ml-[20vw] sm:w-1/2">
              <label for="checklist" className="basis-1/2 ">
                <img className="mx-auto w-4/5 mt-3" src={checklist} />
              </label>
              <label for="checklist" className="basis-1/4 py-1 mx-auto">
                <p className="text-sm sm:text-xl md:text-2xl">Checklist</p>
              </label>
              <div className="basis-1/4 pb-2 mx-auto">
                <input id="checklist" className="" type="radio" name="mode" value=""/>
              </div>
            </div>
          </div>
          <div name="section-sub2" className="basis-1/2 self-center flex justify-end">
            <div name="border" className="flex flex-col w-[90%] h-auto mr-[3vw] border border-blue-900 rounded-lg sm:mr-[20vw] sm:w-1/2">
              <label for="review" className="basis-1/2 ">
                <img className="mx-auto w-4/5 mt-3" src={review} />
              </label>
              <label for="review" className="basis-1/4 py-1 mx-auto">
                <p className="text-sm sm:text-xl md:text-2xl">View Data</p>
              </label>
              <div className="basis-1/4 pb-2 mx-auto">
                <input id="review" className="" type="radio" name="mode"/>
              </div>
            </div>
          </div>
        </div>

        <div name="section-mid-2" className="row-span-2 grid bg-slate-100">
          <div className="grid pt-[1%] gap-5">
            <div className="flex flex-row h-1/2 justify-center gap-5">
              <div className="flex flex-col">
                <span className="self-center">Line</span>
                <select className="border">
                  <option>Line OPP 4</option>
                  <option>Line OPP 5</option>
                  <option>Line OPP 6</option>
                  <option>Line OPP 7</option>
                  <option>Line OPP 8</option>
                  <option>PET</option>
                  <option>Coating 1</option>
                  <option>Coating 3</option>
                  <option>Coating 4</option>
                  <option>Metallize 1 </option>
                  <option>Metallize 2 </option>
                  <option>Metallize 3 </option>
                  <option>Metallize 4 </option>
                </select>
              </div>
              <div className="flex flex-col">
                <span className="self-center">Form</span>
                <select className="border">
                  <option>Electrical</option>
                </select>
              </div>
              {/* Hanya muncu ketika klik review */}
              <div className="flex flex-col">
                <span className="self-center">View</span>
                <select className="border">
                  <option>Specified</option>
                  <option>General</option>
                </select>
              </div>
              {/* Hanya muncul ketika pilih coat metz */}
              <div className="flex flex-col">
                <span className="self-center">Period</span>
                <select className="border">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>
            <div className="flex place-content-center">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-md">
                Submit
              </button>
            </div>
            <div className="h-5/6"></div>
          </div>
        </div>
        <div name="section-footer " className="bg-slate-100 row-span-1 auto-cols-max px-2">
          <div className="flex justify-end">Developed by Danang Wijiyanto</div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
