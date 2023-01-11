import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
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

function ReviewSpecific() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100 ">
        <SectionHeader />
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/4 border-x border-black text overflow-auto max-h-[79vh]">
            <div className="flex text-xl items-center justify-center h-fit m-2 self-center sm:flex-row sm:text-base">
              <span>Area: </span>
              <select className="border-2 mx-2 rounded-sm text-center shadow-sm">
                <option>Silo</option>
                <option>Extrusion</option>
                <option>Chill Roll</option>
                <option>MDO</option>
                <option>TDO</option>
                <option>Big Grinder</option>
                <option>Pullroll</option>
              </select>
            </div>
            <div
              name="konten"
              className="flex  flex-row w-[80%] min-h-[7vh] border border-black text-center mx-auto my-8 bg-white shadow-lg rounded-md"
            >
              <div className="flex h-[4vh] border-b border-r border-black p-1">
                no
              </div>
              <div className="flex m-auto">conveyor fan granulate</div>
            </div>
          </div>

          <div name="grafik" className="flex flex-col text-center basis-3/4">
            <div className="flex flex-col basis-[5%] mx-auto my-2">
              <div>
                <span className="text-xl">Trend Line-4</span>
                <span className="text-xl ml-2">Fan Cvy Grn</span>
                <span className="text-xl ml-2">Silo</span>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col mx-2">
                  <label>From</label>
                  <input
                    type="date"
                    className="shadow-md rounded-md px-2 py-1 h-8"
                  ></input>
                </div>

                <div className="flex flex-col mx-2">
                  <label>Until</label>
                  <input
                    type="date"
                    className="shadow-md rounded-md px-2 py-1 h-8"
                  ></input>
                </div>
                <div className="flex flex-col mx-2">
                  <label>Parameter</label>
                  <select className="shadow-md rounded-md px-2 py-1 h-8">
                    <option>Vibrasi</option>
                    <option>Temperature</option>
                    <option>Arus</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>&nbsp;</label>
                  <button className="w-fit shadow-md text-white bg-[#173D6E] hover:bg-[#9BB6D5] rounded-md px-2 py-1 h-8">
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

export default ReviewSpecific;
