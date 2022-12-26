import logo from "../Asset/logo.png";
import centang from "../Asset/centang.png";
import review from "../Asset/review.png";
import { HomeModernIcon } from "@heroicons/react/24/solid";
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
              <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
                Logout
              </button>
            </div>

            <div></div>
            <div></div>
          </div>
        </div>
        <div className="grid  bg-white ">
          <div className="grid grid-cols-10">
            <div></div>
            <div></div>
            <div className="grid col-span-3 grid-rows-2 h-full border-2 rounded-2xl">
              <img
                className="h-full w-full"
                src={centang}
                alt=""
                width="20%"
                height="20%"
              ></img>
              <button className="h-full w-full rounded-xl font-medium">
                Update Checklist
              </button>
            </div>
            <input className="h-1/6 mb-2 self-center" type={"radio"}></input>
          </div>
          <div className="grid">
            <div className="grid grid-rows-2 h-2/6 border-2 rounded-2xl">
              <img
                className="h-5/6 w-full"
                src={review}
                alt=""
                width="20%"
                height="20%"
              ></img>
              <button className="w-full rounded-xl font-medium">
                Review Checklist
              </button>
            </div>
            <input className="w-full self-center" type={"radio"}></input>
          </div>
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
    </>
  );
}

export default Dashbord;
