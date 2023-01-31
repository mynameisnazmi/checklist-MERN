import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
import line4 from "../Asset/Data-parts/Line_4.json";
import { useState } from "react";
// import line5 from "../Asset/Data-parts/Line_5.json";
// import line6 from "../Asset/Data-parts/Line_6.json";
// import line7 from "../Asset/Data-parts/Line_7.json";

function ChecklistLine() {
  const [part, setPart] = useState("");
  const arrpart = Object.keys(line4);
  //console.log(line4.casting);
  //console.log(Object.keys(line4)[0]);
  //console.log(arrpart);

  const test = () => {
    console.log(part);
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="basis-[16%] flex-col">
          <SectionHeader />
          <div className="flex text-xl items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-4xl">
            <span>Line-4</span>
            <select
              value={part}
              onChange={(e) => setPart(e.target.value)}
              className="border-2 mx-2 rounded-lg text-center shadow-sm"
            >
              {arrpart.map((data, index) => (
                <option value={data} key={index}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative basis-[69%] bg-white items-start justify-center w-screen overflow-x-auto">
          <form>
            <table className="table-fixed text-center border-2 whitespace-nowrap text-[80%] sm:text-lg md:text-2xl lg:text-base">
              <thead className="border-collapse w-auto">
                <tr>
                  <th
                    rowSpan="3"
                    className="sticky left-0 bg-white w-fit px-0 sm:px-4 md:px-4 lg:px-0 border-2"
                  >
                    No
                  </th>
                  <th rowSpan="3" className="px-4 border-2 w-[20%]">
                    Content
                  </th>
                  <th colSpan="8 " className="border-2">
                    Vibrasi Motor
                  </th>
                  <th rowSpan="3" className="border-2 w-[11%]">
                    Temperature
                  </th>
                  <th rowSpan="2" colSpan="3" className="border-2">
                    Arus
                  </th>
                  <th rowSpan="3" className="border-2">
                    Keterangan
                  </th>
                </tr>
                <tr>
                  <th colSpan="2" className="border-2">
                    Vertical
                  </th>
                  <th colSpan="2" className="border-2">
                    Horizontal
                  </th>
                  <th colSpan="2" className="border-2">
                    Vertical
                  </th>
                  <th colSpan="2" className="border-2">
                    Horizontal
                  </th>
                </tr>
                <tr>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    DE mm/s
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    DE gE
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    DE mm/s
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    DE gE
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE mm/s
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE gE
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE mm/s
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE gE
                  </th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">R</th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">S</th>
                  <th className="w-[5%] px-4 sm:px-4 md:px-2 border-2">T</th>
                </tr>
              </thead>

              <tbody className="border-collapse">
                {line4.casting.map((data, index) => (
                  <tr className="h-10" key={index}>
                    <td className="sticky left-0 max-w-[40px] min-w-[40px] bg-white border">
                      {index + 1}
                    </td>
                    <td className=" border px-2">{data}</td>
                    <td className=" border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>

                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>

                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>

                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <input
                        defaultValue={0}
                        className="w-[90%] border"
                        type="number"
                        step="any"
                        name="data[$k]"
                        size="3"
                      />
                    </td>
                    <td className="border">
                      <textarea className="w-[90%] border" type="text" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <div className="flex flex-col basis-[5%] h-full bg-slate-1004">
          <div className="flex flex-row justify-center pt-3 py-3 text-base sm:text-lg md:text-xl">
            <button className=" w-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md px-5 py-2.5 mr-2">
              Reset
            </button>
            <button
              onClick={test}
              className=" w-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md px-5 py-2.5 ml-2"
            >
              Submit
            </button>
          </div>

          <SectionFooter />
        </div>
      </div>
    </>
  );
}

export default ChecklistLine;
