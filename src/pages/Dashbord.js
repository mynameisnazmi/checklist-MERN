import checklist from "../Asset/centang.png";
import review from "../Asset/review.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";

function Dashbord() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");
  const [machine, setMachine] = useState("");
  const [form, setForm] = useState("");
  const [view, setView] = useState("");
  const [linkvar, setlinkvar] = useState("");
  const mchslice = useRef("");

  //console.log(data);

  const gotoChecklist = () => {
    navigate(linkvar, {
      state: {
        machine: machine,
      },
    });
  };
  useEffect(() => {
    if (mode === "checklist") {
      if (form === "elc") {
        mchslice.current = machine.slice(0, 4);
        // console.log(mchslice);
        if (mchslice.current === "Line") {
          setlinkvar("/ChecklistLine");
        } else {
          setlinkvar("/ChecklistCT");
        }
      }
    } else if (mode === "review") {
      if (form === "elc") {
        mchslice.current = machine.slice(0, 4);
        if (view === "gnr") {
          if (mchslice.current === "Line") {
            setlinkvar("/reviewgnrLine");
          } else {
            setlinkvar("/reviewgnrCT");
          }
        } else {
          setlinkvar("/ReviewSpc");
        }
      }
    }
  }, [mode, machine, form, view]);

  return (
    <>
      <div className="grid grid-rows-8 h-screen  w-fit bg-slate-100">
        <SectionHeader />
        <div
          name="section-mid-1"
          className="row-span-4 flex flex-row bg-slate-100 "
        >
          <div
            name="section-sub1"
            className="basis-1/2 self-center flex justify-end"
          >
            <div
              name="border"
              className="flex flex-col w-[90%] h-auto ml-[3vw] border border-blue-900 rounded-lg sm:ml-[15vw] sm:w-2/3 lg:mr-[4vw] lg:w-[40vh] shadow-xl"
            >
              <label htmlFor="chklst" className="basis-1/2 ">
                <img
                  className="mx-auto w-4/5 mt-3"
                  alt="checklist"
                  src={checklist}
                />
              </label>
              <label htmlFor="chklst" className="basis-1/4 py-1 mx-auto">
                <p className="text-sm sm:text-xl md:text-2xl">Checklist</p>
              </label>
              <div className="basis-1/4 pb-2 mx-auto">
                <input
                  type="radio"
                  name="mode"
                  value="checklist"
                  id="chklst"
                  checked={mode === "checklist"}
                  onChange={(e) => setMode(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div
            name="section-sub2"
            className="basis-1/2 self-center flex justify-start"
          >
            <div
              name="border"
              className="flex flex-col w-[90%] h-auto mr-[3vw] border border-blue-900 rounded-lg sm:mr-[15vw] sm:w-2/3 lg:ml-[4vw] lg:w-[40vh] shadow-xl"
            >
              <label htmlFor="rvw" className="basis-1/2 ">
                <img className="mx-auto w-4/5 mt-3" alt="review" src={review} />
              </label>
              <label htmlFor="rvw" className="basis-1/4 py-1 mx-auto">
                <p className="text-sm sm:text-xl md:text-2xl">View Data</p>
              </label>
              <div className="basis-1/4 pb-2 mx-auto">
                <input
                  type="radio"
                  name="mode"
                  value="review"
                  id="rvw"
                  checked={mode === "review"}
                  onChange={(e) => setMode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* asdasdad */}
        <div name="section-mid-2" className="row-span-2 grid bg-slate-100">
          <div className="grid pt-[1%]">
            <div className="flex h-1/2 w-1/3 mx-auto flex-col space-x-0 sm:flex-row sm:justify-center sm:space-x-4 ">
              <div
                name="Line choose"
                className="flex flex-col w-full text-base sm:text-base md:text-xl"
              >
                <span className="self-center">Line</span>
                <select
                  value={machine}
                  onChange={(e) => setMachine(e.target.value)}
                  className="border shadow-md"
                >
                  <option disabled value="">
                    --Choose Machine--
                  </option>
                  <option value="Line-4">Line OPP 4</option>
                  <option value="Line-5">Line OPP 5</option>
                  <option value="Line-6">Line OPP 6</option>
                  <option value="Line-7">Line OPP 7</option>
                  {/* <option value="Line-8">Line OPP 8</option>
                  <option value="Line-PET">PET</option> */}
                  <option value="Coat-1">Coating 1</option>
                  <option value="Coat-3">Coating 3</option>
                  <option value="Coat-4">Coating 4</option>
                  <option value="Metz-1">Metallize 1 </option>
                  <option value="Metz-2">Metallize 2 </option>
                  <option value="Metz-3">Metallize 3 </option>
                  <option value="Metz-4">Metallize 4 </option>
                </select>
              </div>
              <div
                name="Form choose"
                className="flex flex-col w-full text-base sm:text-base md:text-xl"
              >
                <span className="self-center">Form</span>
                <select
                  value={form}
                  onChange={(e) => setForm(e.target.value)}
                  className="border shadow-md"
                >
                  <option disabled value="">
                    --Choose Form--
                  </option>
                  <option value="elc">Electrical</option>
                </select>
              </div>
              {/* Hanya muncu ketika klik review */}

              {mode === "review" ? (
                <div
                  name="View choose"
                  className="flex flex-col w-full text-base sm:text-base md:text-xl"
                >
                  <span className="self-center">View</span>
                  <select
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="border shadow-md"
                  >
                    <option disabled value="">
                      --Choose View--
                    </option>
                    <option value="spc">Specified</option>
                    {/* <option value="gnr">General</option> */}
                  </select>
                </div>
              ) : (
                ""
              )}

              {/* <div
                name="Periode choose"
                className="flex flex-col w-full text-base sm:text-base md:text-xl"
              >
                <span className="self-center">Period</span>
                <select className="border shadow-md">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div> */}
            </div>
            <div className="flex pt-[1%] place-content-center text-base sm:text-lg md:text-xl">
              <button
                onClick={gotoChecklist}
                className="self-center max-w-fit max-h-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md px-5 py-2.5 shadow-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <SectionFooter />
      </div>
    </>
  );
}

export default Dashbord;
