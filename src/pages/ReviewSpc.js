import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
import Cookies from "universal-cookie";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
    },
  },
};

function ReviewSpc() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { state } = useLocation();
  const machine = [
    "Line-4",
    "Line-5",
    "Line-6",
    "Line-7",
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
  const linedata = useRef(dataparts.dataparts); ///state for selection
  const linevalue = useRef(dataparts.dbalias); ///state for selection
  const [item, setItem] = useState(linedata.current[selpart][0]);
  const [itemdb, setItemdb] = useState(linevalue.current[selpart][0]);
  const [dateFrom, setdateFrom] = useState("");
  const [dateUntil, setdateUntil] = useState("");
  const [dataVib, setdataVib] = useState({ datasets: [], labels: [] });
  const [dataTem, setdataTem] = useState({ datasets: [], labels: [] });
  const [dataArs, setdataArs] = useState({ datasets: [], labels: [] });
  const sel = useRef(arrpart.current[0]); //send to db

  const checkCookis = () => {
    if (!cookies.get("name")) {
      navigate("/login");
    }
    //console.log(cookies.get("name"));
  };

  const handleFetchData = async () => {
    const datas = {
      item: itemdb,
      from: dateFrom,
      until: dateUntil,
      machinename: machinename.current,
      partname: sel.current,
    };
    try {
      const fec = await axios.get("/checklist/line/", {
        params: datas,
      });
      let data = await handleTrenddata(fec.data.result, itemdb);
      setdataVib(data.datavibrasi);
      setdataTem(data.datatemp);
      setdataArs(data.dataarus);
      //console.log(data.datatemp);
      //console.log(data.dataarus);
    } catch (error) {
      console.log(error);
    }
    console.log("fetching");
    //console.log(data);
  };

  const handleTrenddata = async (dataarr, itemdb) => {
    let machinenameslc = machinename.current.slice(0, 4);
    let datavibrasi = {};
    console.log(machinenameslc);
    let labels = [];
    let VDE_Vms = [];
    let VDE_Vge = [];
    let VDE_Hms = [];
    let VDE_Hge = [];
    let VNDE_Vms = [];
    let VNDE_Vge = [];
    let VNDE_Hms = [];
    let VNDE_Hge = [];
    let TempM = [];
    let ArusR = [];
    let ArusS = [];
    let ArusT = [];
    //let Ket = [];

    dataarr.forEach((data) => {
      labels.push(data.Tanggal);
      //vibrasi
      VDE_Vms.push(data[itemdb + "_VDE_Vms"]);
      VDE_Vge.push(data[itemdb + "_VDE_Vge"]);
      VDE_Hms.push(data[itemdb + "_VDE_Hms"]);
      VDE_Hge.push(data[itemdb + "_VDE_Hge"]);
      VNDE_Vms.push(data[itemdb + "_VNDE_Vms"]);
      VNDE_Vge.push(data[itemdb + "_VNDE_Vge"]);
      VNDE_Hms.push(data[itemdb + "_VNDE_Hms"]);
      VNDE_Hge.push(data[itemdb + "_VNDE_Hge"]);
      //temp
      TempM.push(data[itemdb + "_TempM"]);
      //arus
      ArusR.push(data[itemdb + "_ArusR"]);
      ArusS.push(data[itemdb + "_ArusS"]);
      ArusT.push(data[itemdb + "_ArusT"]);
    });
    // console.log(VDE_Vms);

    const datavibrasiLine = {
      labels,
      datasets: [
        {
          label: "Vertical DE mm/s",
          data: VDE_Vms,
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
        },
        {
          label: "Vertical DE gE",
          data: VDE_Vge,
          borderColor: "rgb(255, 128, 0)",
          backgroundColor: "rgba(255, 128, 0, 0.5)",
        },
        {
          label: "Horizontal DE mm/s",
          data: VDE_Hms,
          borderColor: "rgb(255, 255, 0)",
          backgroundColor: "rgba(255, 255, 0, 0.5)",
        },
        {
          label: "Horizontal DE gE",
          data: VDE_Hge,
          borderColor: "rgb(128, 255, 0)",
          backgroundColor: "rgba(128, 255, 0, 0.5)",
        },
        {
          label: "Vertical NDE mm/s",
          data: VNDE_Vms,
          borderColor: "rgb(0, 255, 255)",
          backgroundColor: "rgba(0, 255, 255, 0.5)",
        },
        {
          label: "Vertical NDE gE",
          data: VNDE_Vge,
          borderColor: "rgb(0, 128, 255)",
          backgroundColor: "rgba(0, 128, 255, 0.5)",
        },
        {
          label: "Horizontal NDE mm/s",
          data: VNDE_Hms,
          borderColor: "rgb(127, 0, 255)",
          backgroundColor: "rgba(127, 0, 255, 0.5)",
        },
        {
          label: "Horizontal NDE gE",
          data: VNDE_Hge,
          borderColor: "rgb(255, 0, 255)",
          backgroundColor: "rgba(255, 0, 255, 0.5)",
        },
      ],
    };
    const datavibrasiCT = {
      labels,
      datasets: [
        {
          label: "Vertical DE mm/s",
          data: VDE_Vms,
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
        },
        {
          label: "Vertical DE gE",
          data: VDE_Vge,
          borderColor: "rgb(255, 128, 0)",
          backgroundColor: "rgba(255, 128, 0, 0.5)",
        },
        {
          label: "Vertical NDE mm/s",
          data: VNDE_Vms,
          borderColor: "rgb(0, 255, 255)",
          backgroundColor: "rgba(0, 255, 255, 0.5)",
        },
        {
          label: "Vertical NDE gE",
          data: VNDE_Vge,
          borderColor: "rgb(0, 128, 255)",
          backgroundColor: "rgba(0, 128, 255, 0.5)",
        },
      ],
    };
    const datatemp = {
      labels,
      datasets: [
        {
          label: "Temperature deg C",
          data: TempM,
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
        },
      ],
    };
    const dataarus = {
      labels,
      datasets: [
        {
          label: "Arus R",
          data: ArusR,
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
        },
        {
          label: "Arus S",
          data: ArusS,
          borderColor: "rgb(255, 128, 0)",
          backgroundColor: "rgba(255, 128, 0, 0.5)",
        },
        {
          label: "Arus T",
          data: ArusT,
          borderColor: "rgb(255, 255, 0)",
          backgroundColor: "rgba(255, 255, 0, 0.5)",
        },
      ],
    };
    machinenameslc === "Coat" || machinenameslc === "Metz"
      ? (datavibrasi = datavibrasiCT)
      : (datavibrasi = datavibrasiLine);
    return { datavibrasi, datatemp, dataarus };
    // , datatemp, dataarus
  };

  const selectHandler = (event) => {
    console.log("change part");
    setSelpart(event.target.value);
    sel.current = event.target.value;
  };
  const selclickItem = (evt) => {
    console.log("Set Item");
    setItem(evt.target.name);
    setItemdb(evt.target.value);
  };
  // console.log(dataVib);

  useEffect(() => {
    checkCookis();
  }, []);

  return (
    <>
      <SectionHeader />
      <div className="flex flex-col h-fit bg-slate-100 ">
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/4 overflow-y-scroll h-[74vh]">
            <div className="flex text-xl items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-base">
              <span className="text-xl pr-2">{machinename.current}</span>
              <select
                value={selpart}
                onChange={selectHandler}
                className="border-2 mx-2 rounded-md shadow-sm capitalize text-lg"
              >
                {arrpart.current.map((data, index) => (
                  <option value={data} key={index}>
                    {data}
                  </option>
                ))}
              </select>
            </div>

            {/* // */}
            {linedata.current[selpart].map((data, index) => (
              <div key={index} className="flex flex-row items-center">
                <div className="mx-2 w-5">{index + 1}</div>
                <button
                  key={index}
                  name={data}
                  onClick={selclickItem}
                  value={linevalue.current[selpart][index]}
                  className="w-[80%] min-h-[7vh] border border-black text-center ml-3 my-3 bg-white shadow-lg rounded-sm"
                >
                  {data}
                </button>
              </div>
            ))}

            {/* // */}
          </div>

          <div name="grafik" className="flex flex-col text-center basis-3/4">
            <div className="flex flex-col basis-[5%] mx-auto my-2">
              <span className="text-xl">{item}</span>

              <div className="flex flex-row">
                <div className="flex flex-row mx-2 items-center">
                  <label className="text-lg pr-2">From</label>
                  <input
                    type="date"
                    className="shadow-md rounded-md px-2 py-1 h-8"
                    onChange={(e) => setdateFrom(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-row mx-2 items-center">
                  <label className="text-lg pr-2">Until</label>
                  <input
                    type="date"
                    className="shadow-md rounded-md px-2 py-1 h-8"
                    onChange={(e) => setdateUntil(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <button
                    onClick={handleFetchData}
                    className="w-fit shadow-md text-white bg-[#173D6E] hover:bg-[#9BB6D5] rounded-md px-2 py-1 h-8"
                  >
                    Open data
                  </button>
                </div>
              </div>
            </div>

            <div
              name="grafik"
              className="flex flex-col basis-[85%] bg-white overflow-auto max-h-[69vh]"
            >
              <div name="chart" className="flex flex-col">
                <div>Vibrasi</div>
                <div className="bg-slate-200 h-full">
                  <Line options={options} data={dataVib} />
                </div>
              </div>
              <div name="chart" className="flex flex-col">
                <div>Temp</div>
                <div className="bg-slate-200 h-full">
                  <Line options={options} data={dataTem} />
                </div>
              </div>
              <div name="chart" className="flex flex-col">
                <div>Arus</div>
                <div className="bg-slate-200 h-full">
                  <Line options={options} data={dataArs} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionFooter />
      </div>
    </>
  );
}

export default ReviewSpc;
