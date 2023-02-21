import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

function ChecklistLine() {
  const cookies = new Cookies();
  const dates = new Date();
  const navigate = useNavigate();
  const { state } = useLocation();
  const machine = ["Line-4", "Line-5", "Line-6", "Line-7"];
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

  const checkCookis = () => {
    if (!cookies.get("name")) {
      navigate("/login");
    }
    //console.log(cookies.get("name"));
  };

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
          // console.log(datefromdb.current);
          //setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //console.log(Loading);

  // const handleFetchData = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/checklist/line/", {
  //       machinename: machinename.current,
  //       partname: sel.current,
  //       Tanggal: dates.toISOString().slice(0, 10).replace("T", " "),
  //       Nama: cookies.get("name"),
  //     });
  //     console.log(res);
  //     setDatafromdb(res.data.result[0]);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  const resetStt = () => {
    document.getElementById("forms").reset();
  };

  const handleUpData = async () => {
    console.log("updating");
    refdata.current = {
      ...refdata.current,
      Nama: cookies.get("name"),
      Tanggal: datefromdb.current,
      machinename: machinename.current,
      partname: sel.current,
    };
    //send data here
    //setLoading(true);

    //console.log(refdata.current);
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

  // const handleAddData = async (event) => {
  //   //send data here
  //   //event.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/checklist/line/add/", dataform);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const handleChange = (evt) => {
    console.log("change value");
    const value = evt.target.value;
    // setDataform({
    //   ...dataform,
    //   [evt.target.name]: value,
    // });
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
    checkCookis();
    handleFetchData();
  }, []);

  //console.log(sel.current);

  //console.log(datafromdb);
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <div className="basis-[16%] flex-col">
          <SectionHeader />
          <div className="flex text-xl items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-2xl">
            <span>{machinename.current}</span>
            <select
              value={selpart}
              onChange={selectHandler}
              className="border-2 mx-2 rounded-sm shadow-sm capitalize text-xl"
            >
              {arrpart.current.map((data, index) => (
                <option value={data} key={index}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative basis-[69%] bg-white items-start justify-center w-screen overflow-x-auto">
          <form id="forms">
            <table className="table-fixed border-2 whitespace-nowrap text-[80%] sm:text-lg md:text-2xl lg:text-base">
              <thead className="border-collapse w-auto">
                <tr>
                  <th
                    rowSpan="3"
                    className="text-center sticky left-0 bg-white w-fit px-0 sm:px-4 md:px-4 lg:px-0 border-2"
                  >
                    No
                  </th>
                  <th
                    rowSpan="3"
                    className="text-center items-start px-4 border-2 w-[15%]"
                  >
                    Content
                  </th>
                  <th colSpan="8 " className="text-sm text-center border-2">
                    Vibrasi Motor
                  </th>
                  <th
                    rowSpan="3"
                    className="text-sm text-center border-2 w-[6%]"
                  >
                    Temp
                  </th>
                  <th
                    rowSpan="2"
                    colSpan="3"
                    className="text-sm text-center border-2"
                  >
                    Arus
                  </th>
                  <th rowSpan="3" className="text-sm text-center border-2">
                    Keterangan
                  </th>
                </tr>
                <tr>
                  <th colSpan="2" className="text-sm text-center border-2">
                    Vertical
                  </th>
                  <th colSpan="2" className="text-sm text-center border-2">
                    Horizontal
                  </th>
                  <th colSpan="2" className="text-sm text-center border-2">
                    Vertical
                  </th>
                  <th colSpan="2" className="text-sm text-center border-2">
                    Horizontal
                  </th>
                </tr>
                <tr>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    DE mm/s
                  </th>
                  <th className="text-sm text-center w-[6%] px-4 sm:px-4 md:px-2 border-2">
                    DE gE
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    DE mm/s
                  </th>
                  <th className="text-sm text-center w-[6%] px-4 sm:px-4 md:px-2 border-2">
                    DE gE
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE mm/s
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE gE
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE mm/s
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    NDE gE
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    R
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    S
                  </th>
                  <th className="text-sm text-center w-[5%] px-4 sm:px-4 md:px-2 border-2">
                    T
                  </th>
                </tr>
              </thead>

              <tbody className="border-collapse">
                {/* isi */}
                {linedata.current[selpart].map((data, index) => (
                  <tr className="h-10" key={index}>
                    <td className="sticky left-0 max-w-[40px] min-w-[40px] bg-white border text-center">
                      {index + 1}
                    </td>
                    <td className="break-words border px-2 whitespace-pre-line">
                      {data}
                    </td>
                    <td className=" border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VDE_Vms"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VDE_Vms"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VDE_Vge"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VDE_Vge"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VDE_Hms"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VDE_Hms"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>

                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VDE_Hge"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VDE_Hge"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VNDE_Vms"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VNDE_Vms"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>

                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VNDE_Vge"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VNDE_Vge"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VNDE_Hms"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VNDE_Hms"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>

                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_VNDE_Hge"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_VNDE_Hge"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_TempM"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_TempM"}
                        className={" w-[90%] border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_ArusR"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_ArusR"}
                        className={" w-full border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1 ">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_ArusS"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_ArusS"}
                        className={" w-full border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1 ">
                      <input
                        defaultValue={
                          datafromdb[
                            linevalue.current[selpart][index] + "_ArusT"
                          ]
                        }
                        name={linevalue.current[selpart][index] + "_ArusT"}
                        className={" w-full border pl-1"}
                        type="number"
                        step="any"
                        size="3"
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border px-1 pt-1">
                      <textarea
                        defaultValue={
                          datafromdb[linevalue.current[selpart][index] + "_Ket"]
                        }
                        name={linevalue.current[selpart][index] + "_Ket"}
                        className={"w-[90%] border pl-1"}
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

export default ChecklistLine;
