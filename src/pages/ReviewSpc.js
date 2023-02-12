import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
import Cookies from "universal-cookie";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
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
import { faker } from "@faker-js/faker";

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
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function ReviewSpc() {
  const cookies = new Cookies();
  const dates = new Date();
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
  const [item, setItem] = useState(linedata.current[selpart][0]);
  const [itemdb, setItemdb] = useState(linevalue.current[selpart][0]);
  const [dateFrom, setdateFrom] = useState("");
  const [dateUntil, setdateUntil] = useState("");
  const sel = useRef(arrpart.current[0]); //send to db
  let refdata = useRef();

  const handleFetchData = () => {
    console.log("fetching");
    const datas = {
      item: itemdb,
      datefrom: dateFrom,
      dateuntil: dateUntil,
      machinename: machinename.current,
      partname: sel.current,
    };
    console.log(datas);
  };

  const selectHandler = (event) => {
    console.log("change part");
    //setDataform();
    // document.getElementById("forms").reset();
    setSelpart(event.target.value);
    sel.current = event.target.value;
    // handleFetchData();
    //console.log(machinename.current);
  };
  const selclickItem = (evt) => {
    setItem(evt.target.name);
    setItemdb(evt.target.value);
  };

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
                  <Line options={options} data={data} />
                </div>
              </div>
              <div name="chart" className="flex flex-col">
                <div>Vibrasi</div>
                <div className="bg-slate-200 h-full">
                  <Line options={options} data={data} />
                </div>
              </div>
              <div name="chart" className="flex flex-col">
                <div>Vibrasi</div>
                <div className="bg-slate-200 h-full">
                  <Line options={options} data={data} />
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
