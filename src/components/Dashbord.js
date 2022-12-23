import { Link } from "react-router-dom";
import logo from "../Asset/logo.png";
import centang from "../Asset/centang.png";
import review from "../Asset/review.png";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
function Dashbord() {
  return (
    <>
      <div className="grid grid-rows-3 h-screen">
        <div className="flex h-2/3 max-sm:flex-col">
          {/* Row1 */}
          <div className="basis-3/12 flex flex-col bg-blue-300">
            <div className="w-full basis-3/5">
              <div
                className="mx-auto w-2/3 h-full bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: "url(" + logo + ")" }}
              ></div>
            </div>

            <div className="basis-1/5 mx-auto flex">
              <span className="self-center">
                Danang wijiyanto / Calibration
              </span>
            </div>

            <div className="basis-1/5 mx-auto flex">
              <span className="self-center">11:11 11-11-1111</span>
            </div>
          </div>
          {/* Row1 end */}

          <div className="basis-3/5 w-full bg-slate-400 ">
            <div className="flex  h-full font-semibold text-6xl max-sm:text-xl">
              <span className="mx-auto self-center">Online&nbsp;Checklist</span>
            </div>
          </div>

          <div className="basis-1/6">
            <Link to="/login">
              <div className="flex bg-red-400 w-full h-full self center">
                <ArrowLeftOnRectangleIcon className="mx-auto h-auto w-2/3 max-sm:h-16" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex bg-zinc-300 flex-row felx-wrap place-content-center max-sm:flex-col">
          <div className="pt-[3%] border-2 w-[30%] max-sm:mx-auto">
            <div className="flex flex-col">
              <div className="h-3/5">
                <img
                  className="mx-auto"
                  src={centang}
                  alt=""
                  width="45%"
                  height="auto"
                ></img>
              </div>
              <div className="mt-[5%] flex justify-center h-1/5">
                Update checklist
              </div>
              <div className="flex justify-center h-1/5">
                <input className="" type="radio" name="mode"></input>
              </div>
            </div>
          </div>
          <div className="pt-[3%] border-2 w-[30%] max-sm:mx-auto">
            <div className="flex flex-col mt-[0%]">
              <div className="h-3/5">
                <img
                  className="mx-auto"
                  src={review}
                  alt=""
                  width="45%"
                  height="auto"
                ></img>
              </div>
              <div className="mt-[5%] flex justify-center h-1/5">
                Update checklist
              </div>
              <div className="flex justify-center h-1/5">
                <input className="" type="radio" name="mode"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="grid bg-slate-300 max-sm:mt-[10%]">
          <div className="grid pt-[1%]">
            <div className="flex flex-row h-1/2 justify-center gap-5">
              <div className="flex flex-col">
                <span className="self-center">Line</span>
                <select className="border-2">
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
                <select className="border-2">
                  <option>Electrical</option>
                </select>
              </div>
              <div className="flex flex-col">
                <span className="self-center">View</span>
                <select className="border-2">
                  <option>Specified</option>
                  <option>General</option>
                </select>
              </div>
            </div>
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
