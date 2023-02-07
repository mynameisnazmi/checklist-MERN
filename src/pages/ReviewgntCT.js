import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ChecklistCT() {
  const { state } = useLocation();
  const machine = [
    "Coat-1",
    "Coat-3",
    "Coat-4",
    "Metz-1",
    "Metz-2",
    "Metz-3",
    "Metz-4",
  ];
  const [machinename, setMachinename] = useState(state.machine); //setmachine name
  const found = machine.find((element) => element === machinename); //search machine name
  const dataparts = require(`../Asset/Data-parts/${found}.json`); //load data base on machine name
  const parts = Object.keys(dataparts); //load part machine
  const [arrpart, setArrpart] = useState(parts); //state for selection
  const [selpart, setSelpart] = useState(arrpart[0]);
  const [linedata, setLinedata] = useState(dataparts); //state for selection

  useEffect(() => {
    setArrpart(arrpart);
    setLinedata(linedata);
  }, []);

  const selectHandler = (event) => {
    setSelpart(event.target.value);
  };

  const test = () => {
    console.log(linedata[selpart]);
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="basis-[16%] flex-col">
          <SectionHeader />
          <div className="flex flex-col  text-xl  items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-2xl">
            <span>{machinename}</span>
            <select
              value={selpart}
              onChange={selectHandler}
              className="border-2 mx-2 text-2xl"
            >
              {arrpart.map((data, index) => (
                <option value={data} key={index}>
                  {data}
                </option>
              ))}
            </select>
            <span className="pl-3">Select date</span>
            <input className="pl-3" type="date"></input>
          </div>
        </div>
        <div className="relative basis-[69%] bg-white items-start justify-center w-screen overflow-x-auto ">
          <table className=" table-fixed text-center border-2 whitespace-nowrap text-[100%] sm:text-lg md:text-2xl lg:text-base">
            <thead className="border-b-2 border-collapse w-screen">
              <tr>
                <th className="border sticky left-0 bg-white w-fit px-0 sm:px-4 md:px-4 lg:px-0">
                  No
                </th>
                <th className="border px-4 lg:px-2">Motor</th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">Visual</th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                  Stetoskop
                </th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">Arus R</th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">Arus S</th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">Arus T</th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                  V DE mm/s
                </th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">V DE gE</th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                  V NDE mm/s
                </th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                  V NDE gE
                </th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">Temp</th>
                <th className="border px-4 sm:px-2 md:px-2 lg:px-1">Anomali</th>
              </tr>
            </thead>
            <tbody>
              {/* dari line.casting jadi type */}
              {linedata[selpart].map((data, index) => (
                <tr className="border h-10" key={index}>
                  <td className="sticky left-0 max-w-[40px] min-w-[40px] bg-white">
                    {index + 1}
                  </td>
                  <td className="border text-left px-2">{data}</td>
                  <td className="border">
                    <select defaultValue={0} className={selpart}>
                      <option value={1}>Bersih</option>
                      <option value={0}>Kotor</option>
                    </select>
                  </td>
                  <td className="border">
                    <select defaultValue={0} className={selpart}>
                      <option value={1}>Halus</option>
                      <option value={0}>Kasar</option>
                    </select>
                  </td>
                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>
                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>
                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>

                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>
                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>

                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>
                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>

                  <td className="border">
                    <input
                      defaultValue={0}
                      className={selpart + " w-[90%]  pl-1"}
                      type="number"
                    ></input>
                  </td>

                  <td className="border">
                    <textarea
                      defaultValue={""}
                      className={selpart + " w-[90%] mt-1  pl-1"}
                      type="text"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col basis-[5%] h-full bg-slate-1004">
          <div className="flex flex-row justify-center pt-3 py-3 text-base sm:text-lg md:text-xl">
            <button className=" w-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md px-5 py-2.5 mr-2">
              Reset
            </button>
            <button className=" w-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md px-5 py-2.5 ml-2">
              Submit
            </button>
          </div>

          <SectionFooter />
        </div>
      </div>
    </>
  );
}

export default ChecklistCT;
