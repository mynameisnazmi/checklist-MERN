import SectionHeader from "./SectionHeader";

function ChecklistCT() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="basis-[16%] flex-col">
          <SectionHeader></SectionHeader>
          <div className="flex flex-col  text-5xl items-center justify-center h-fit m-2 self-center sm:flex-row">
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
        <div className="basis-[69%] bg-white items-start justify-center w-screen overflow-x-auto ">
          <table class="table-auto text-center border-2 whitespace-nowrap text-[100%] sm:text-lg md:text-2xl lg:text-base">
            <thead className="border-b-2 border-collapse w-screen">
              <tr>
                <th className="w-[4%] px-2 sm:px-4 md:px-4 lg:px-0">No</th>
                <th className="w-[14%] px-2 sm:px-4 md:px-4 lg:px-0">Motor</th>
                <th className="w-[8%] px-4 sm:px-4 md:px-4 lg:px-0">
                  Stetoskop
                </th>
                <th className="w-[8%] px-4  sm:px-4 md:px-4 lg:px-0">Arus R</th>
                <th className="w-[8%] px-4 sm:px-4 md:px-4 lg:px-0">Arus S</th>
                <th className="w-[8%] px-4 sm:px-4 md:px-4 lg:px-0">Arus T</th>
                <th className="w-[8%] px-4 sm:px-4 md:px-4 lg:px-0">
                  V DE mm/s
                </th>
                <th className="w-[8%] px-4 sm:px-4 md:px-4 lg:px-0">V DE gE</th>
                <th className="w-[8%] px-4 sm:px-4 md:px-4 lg:px-0">
                  V NDE mm/s
                </th>
                <th className="w-[8%] px-4 sm:px-4 md:px-4 lg:px-0">
                  V NDE gE
                </th>
                <th className="w-[8%] px-4  sm:px-4 md:px-4 lg:px-0">
                  T &deg; C
                </th>
                <th className="w-[10%] px-4  sm:px-4 md:px-4 lg:px-0">
                  Anomali
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="">1</td>
                <td className="">Fan Turret Unwind Fan Turret Unwind</td>
                <td className="">
                  <select>
                    <option>Halus</option>
                    <option>Kasar</option>
                  </select>
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

              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col basis-[5%] h-full bg-slate-200">
          <div className="flex flex-row justify-center">
            <div className="self-center max-w-fit max-h-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">
              Reset
            </div>
            <div className="self-center max-w-fit max-h-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">
              Submit
            </div>
          </div>
          <div className="flex flex-row">
            <div> Keterngan: V = Vibrasi; I = Arus; T = Temperatur</div>
          </div>
          <div className="">electrik</div>
        </div>
      </div>
    </>
  );
}

export default ChecklistCT;
