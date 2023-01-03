import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
function ChecklistCT() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="basis-[16%] flex-col">
          <SectionHeader />
          <div className="flex flex-col  text-xl  items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-4xl">
            <span>Coating-1</span>
            {/* <select className="border-2 mx-10">
              <option>Grinder</option>
              <option>Casting</option>
              <option>MDO</option>
              <option>Pull Roll</option>
              <option>Silo</option>
              <option>TDO</option>
              <option>Extruder</option>
            </select> */}
          </div>
        </div>
        <div className="relative basis-[69%] bg-white items-start justify-center w-screen overflow-x-auto ">
          <table className=" table-fixed text-center border-2 whitespace-nowrap text-[100%] sm:text-lg md:text-2xl lg:text-base">
            <thead className="border-b-2 border-collapse w-screen">
              <tr>
                <th className="sticky left-0 bg-white w-fit px-0 sm:px-4 md:px-4 lg:px-0">
                  No
                </th>
                <th className="px-4 lg:px-0">Motor</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">Stetoskop</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">Arus R</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">Arus S</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">Arus T</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">V DE mm/s</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">V DE gE</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">V NDE mm/s</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">V NDE gE</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">T &deg; C</th>
                <th className="px-4 sm:px-2 md:px-2 lg:px-0">Anomali</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" h-10">
                <td className="sticky left-0 max-w-[40px] min-w-[40px] bg-white">
                  1
                </td>
                <td className="">Fan Turret Unwind Fan Turret Unwind</td>
                <td className="">
                  <select>
                    <option>Halus</option>
                    <option>Kasar</option>
                  </select>
                </td>
                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-[90%] border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-[90%] border" type="text"></input>
                </td>
              </tr>
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
