import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
function ChecklistCT() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="basis-[16%] flex-col">
          <SectionHeader />
          <div className="flex flex-col  text-xl  items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-4xl">
            <span>Line-4</span>
            <select className="border-2 mx-10">
              <option>Grinder</option>
              <option>Casting</option>
              <option>MDO</option>
              <option>Pull Roll</option>
              <option>Silo</option>
              <option>TDO</option>
              <option>Extruder</option>
            </select>
          </div>
        </div>
        <div className="relative basis-[69%] bg-white items-start justify-center w-screen overflow-x-auto ">
          <table className=" table-fixed text-center border-2 whitespace-nowrap text-[100%] sm:text-lg md:text-2xl lg:text-base">
            <thead className="border-b-2 border-collapse w-auto">
              <tr>
                <th className="sticky left-0 bg-white w-40 px-0 sm:px-4 md:px-4 lg:px-0">
                  No
                </th>
                <th className="px-2">Grinder</th>
                <th className="px-4 sm:px-4 md:px-4"> Vib &#8597; DE mm/s</th>
                <th className="px-4 sm:px-4 md:px-4">Vib &#8597; DE gE</th>
                <th className="">Vib &harr; DE mm/s</th>
                <th className=" ">Vib &harr; DE gE</th>
                <th className=" ">Vib &#8597; NDE mm/s</th>
                <th className=" ">Vib &#8597; NDE gE</th>
                <th className=" ">Vib &harr; NDE mm/s</th>
                <th className=" ">Vib &harr; NDE gE</th>
                <th className=" ">Temp</th>
                <th className=" ">Arus R</th>
                <th className=" ">Arus S</th>
                <th className=" ">Arus T</th>
                <th className="">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" h-10">
                <td className="sticky left-0 max-w-[40px] min-w-[40px] bg-white">
                  1
                </td>
                <td className="">Transfer Waste Grinder</td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>
                <td className=" ">
                  <input className="w-full border" type="number"></input>
                </td>

                <td className=" ">
                  <input className="w-full border" type="text"></input>
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
