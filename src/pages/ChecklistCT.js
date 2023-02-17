import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

function ChecklistCT() {
  const cookies = new Cookies();
  const dates = new Date();
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
  const machinename = useRef(state.machine); //setmachine name
  const found = machine.find((element) => element === machinename.current); //search machine name
  const dataparts = require(`../Asset/Data-parts/${found}.json`); //load data base on machine name
  const parts = Object.keys(dataparts.dataparts); //load part machine
  const arrpart = useRef(parts); //state for selection
  const [selpart, setSelpart] = useState(arrpart.current[0]);
  const [datafromdb, setDatafromdb] = useState([]);
  const linedata = useRef(dataparts.dataparts); ///state for selection
  const linevalue = useRef(dataparts.dbalias); ///state for selection
  const sel = useRef(arrpart.current[0]); //send to db
  let refdata = useRef();
  let datefromdb = useRef();

  const handleFetchData = async () => {
    // console.log("fetching");
    //setLoading(true);
    fetch("http://localhost:5000/checklist/line/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        machinename: machinename.current,
        partname: sel.current,
        Tanggal: dates.toISOString().slice(0, 10).replace("T", " "),
        Nama: cookies.get("name"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.result[0]);
        Promise.all(data.result).then((values) => {
          setDatafromdb(values[0]);
          datefromdb.current = values[0].Tanggal;
          //  console.log(values);
          //setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const resetStt = () => {};

  const handleUpData = async () => {
    console.log("updating");
    refdata.current = {
      ...refdata.current,
      Nama: cookies.get("name"),
      Tanggal: datefromdb.current,
      machinename: machinename.current,
      partname: sel.current,
    };
    console.log(refdata.current);
    try {
      const res = await axios.post(
        "http://localhost:5000/checklist/line/update/",
        refdata.current
      );
      if (res.status === 200) {
        refdata.current = {};
        console.log(refdata.current);
      }
      //setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (evt) => {
    console.log("change value");
    const value = evt.target.value;
    refdata.current = { ...refdata.current, [evt.target.name]: value };
  };

  const selectHandler = (event) => {
    console.log("change part");
    //setDataform();
    document.getElementById("forms").reset();
    setSelpart(event.target.value);
    sel.current = event.target.value;
    handleFetchData();
    //console.log(machinename.current);
  };
  useEffect(() => {
    handleFetchData();
  }, []);

  const Selectcustom = ({ val, name, val1, val0 }) => {
    if (val === 0) {
      return (
        <td className="border">
          <select defaultValue={0} name={name} onChange={handleChange}>
            <option value={1}>{val1}</option>
            <option value={0}>{val0}</option>
          </select>
        </td>
      );
    } else {
      return (
        <td className="border">
          <select defaultValue={1} name={name} onChange={handleChange}>
            <option value={1}>{val1}</option>
            <option value={0}>{val0}</option>
          </select>
        </td>
      );
    }
  };
  //console.log(tesat);
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="basis-[16%] flex-col">
          <SectionHeader />
          <div className="flex flex-col  text-xl  items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-2xl">
            <span>{machinename.current}</span>
            <select
              value={selpart}
              onChange={selectHandler}
              className="border-2 mx-2 text-2xl"
            >
              {arrpart.current.map((data, index) => (
                <option value={data} key={index}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative basis-[69%] bg-white items-start justify-center w-screen overflow-x-auto ">
          <form id="forms">
            <table className=" table-fixed text-center border-2 whitespace-nowrap text-[100%] sm:text-lg md:text-2xl lg:text-base">
              <thead className="border-b-2 border-collapse w-screen">
                <tr>
                  <th className="border sticky left-0 bg-white w-fit px-0 sm:px-4 md:px-4 lg:px-0">
                    No
                  </th>
                  <th className="border px-4 lg:px-2">Motor</th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    Visual
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    Stetoskop
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    Arus R
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    Arus S
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    Arus T
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    V DE mm/s
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    V DE gE
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    V NDE mm/s
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    V NDE gE
                  </th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">Temp</th>
                  <th className="border px-4 sm:px-2 md:px-2 lg:px-1">
                    Anomali
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* dari line.casting jadi type */}
                {linedata.current[selpart].map((data, index) => (
                  <tr className="border h-10" key={index}>
                    <td className="sticky left-0 max-w-[40px] min-w-[40px] bg-white">
                      {index + 1}
                    </td>
                    <td className="border text-left px-2">{data}</td>
                    <Selectcustom
                      val={
                        datafromdb[linevalue.current[selpart][index] + "_Vis"]
                      }
                      name={linevalue.current[selpart][index] + "_Vis"}
                      val1={"Bersih"}
                      val0={"Kotor"}
                    />
                    <Selectcustom
                      val={
                        datafromdb[linevalue.current[selpart][index] + "_Stet"]
                      }
                      name={linevalue.current[selpart][index] + "_Stet"}
                      val1={"Halus"}
                      val0={"Kasar"}
                    />
                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_ArusR"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_ArusR"}
                        className={" w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>
                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_ArusS"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_ArusS"}
                        className={" w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>
                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_ArusT"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_ArusT"}
                        className={" w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>

                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VDE_Vms"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VDE_Vms"}
                        className={" w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>
                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VDE_Vge"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VDE_Vge"}
                        className={" w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>

                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VNDE_Vms"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VNDE_Vms"}
                        className={" w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>
                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VNDE_Vge"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VNDE_Vge"}
                        className={"w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>

                    <td className="border">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_TempM"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_TempM"}
                        className={"w-[90%]  pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      ></input>
                    </td>

                    <td className="border">
                      <textarea
                        defaultValue={
                          datafromdb[linevalue.current[selpart][index] + "_Ket"]
                        }
                        name={linevalue.current[selpart][index] + "_Ket"}
                        className={"w-[90%] mt-1  pl-1"}
                        type="text"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <div className="flex flex-col basis-[5%] h-full bg-slate-1004">
          <div className="flex flex-row justify-center pt-3 py-3 text-base sm:text-lg md:text-xl">
            <button
              onClick={resetStt}
              className=" w-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md px-5 py-2.5 mr-2"
            >
              Reset
            </button>
            <button
              type="submit"
              onClick={handleUpData}
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

export default ChecklistCT;
