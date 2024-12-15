import chart from "../../assets/showchart.png";
import Image1 from "../../../dist/Frame1.png";
import Image2 from "../../../dist/Frame 2.png";
import item2 from "../../../dist/caps.jpg";



import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "June",
      sales: 4000,
      order: 2400,
      amt: 2400,
    },
    {
      name: "July",
      sales: 3000,
      order: 1398,
      amt: 2210,
    },
    {
      name: "August",
      sales: 2000,
      order: 9800,
      amt: 2290,
    },
    {
      name: "September",
      sales: 2780,
      order: 3908,
      amt: 2000,
    },
    {
      name: "October",
       sales: 1890,
      order: 4800,
      amt: 2181,
    },
    {
      name: "November",
      sales: 2390,
      order: 3800,
      amt: 2500,
    },
    {
      name: "December",
      sales: 3490,
      order: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-full h-full md:px-10 py-4">
      <h2 className="text-2xl ">Dashboard</h2>
      {/* first container */}
      <div>
        {/* sub-containers */}
        <div className="flex flex-col md:flex-row justify-between  mt-6">
          <div className="max-w-sm mb-2 w-full md:w-96 px-3 py-6 bg-white border border-gray-200 rounded-xl shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-500 dark:text-white">
              Expected Earnngs
            </h5>
            <div className="flex flex-row items-center justify-between mt-4">
              <h2 className="text-2xl font-semibold">#5000.00</h2>
              <div className="flex flex-col items-end">
                <div className="  rounded px-2 flex flex-row items-center text-[#79FB95] bg-[#D4FEF2]">
                  <div className="w-4 h-4">
                    <img src={chart} alt="" className="w-full h-full" />
                  </div>
                  <span className="ml-">5.5%</span>
                </div>
                <p className="text-xs mt-2">Expected Earnngs November 2024.</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm mb-2 w-full md:w-96 px-3 py-6 bg-white border border-gray-200 rounded-xl shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-500 dark:text-white">
              Average Sales
            </h5>
            <div className="flex flex-row items-center justify-between mt-4">
              <h2 className="text-2xl font-semibold">#5000.00</h2>
              <div className="flex flex-col items-end">
                <div className="  rounded px-2 flex flex-row items-center text-[#79FB95] bg-[#D4FEF2]">
                  <div className="w-4 h-4">
                    <img src={chart} alt="" className="w-full h-full" />
                  </div>
                  <span className="ml-">5.5%</span>
                </div>
                <p className="text-xs mt-2">Expected Earnngs November 2024.</p>
              </div>
            </div>
          </div>

          <div className="max-w-sm mb-2 w-full md:w-96 px-3 py-6 bg-white border border-gray-200 rounded-xl shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-500 dark:text-white">
              New Customers Ths Month
            </h5>
            <div className="flex flex-row items-center justify-between mt-4">
              <div className="relative">
                <span className="text-xs text-gray-400">Todays Heroes</span>
                <div className="rounded-[50%] w-10 h-10 absolute left-0">
                  <img
                    src={Image1}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="rounded-[50%] w-10 h-10 absolute left-6">
                  <img
                    src={Image1}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="rounded-[50%] w-10 h-10 absolute left-10">
                  <img
                    src={Image2}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="  rounded px-2 flex flex-row items-center text-[#79FB95] bg-[#D4FEF2]">
                  <div className="w-4 h-4">
                    <img src={chart} alt="" className="w-full h-full" />
                  </div>
                  <span className="ml-">5.5%</span>
                </div>
                <p className="text-4xl mt-2">3.8</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="w-full border mt-10">
        <div className="flex flex-row justify-between items-center md:w-[30%] px-6 pt-3">
          <div>
            <h2 className="text-[#111111] font-semibold text-base">
              Sales Ths Month
            </h2>
            <p className="text-xs text-gray-400">Users from all channels</p>
          </div>
          <div>
            <h2 className="text-[#111111] font-semibold text-xl">#6000.00</h2>
            <p className="text-xs text-gray-400">About#3000 to go</p>
          </div>
        </div>
        <ResponsiveContainer width={"100%"} height={400} className="mt-5">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="sales"
              fill="#0039CE"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="order"
              fill="#D7E2FF"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* delivery Details */}

      <div className="w-full mt-10">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="font-semibold text-sm ">Product Delvery</h2>
            <p className="text-sm text-gray-400 mt-2">
              10 Products shpped so far
            </p>
          </div>
          <div className="text-[#9D9DA1] bg-[#EFEFEF] text-sm p-2 rounded-md">
            Order Detals
          </div>
        </div>
        <div className="w-full mt-5">
          {/* card */}
          <div className="flex flex-row justify-between items-center bg-[#dbc9ea] py-6 px-4 rounded mb-3">
            <div className="flex flex-row items-center">
              <div className="w-20 h-10 rounded overflow-hidden">
                <img src={item2} alt="" className="w-full h-full object-fit" />
              </div>
              <div className="ml-2">
                <h2 className="text-base font-semibold leading-5">Nike Cap</h2>
                <span className="text-sm">To: John Paul</span>
              </div>
            </div>
            <div className="bg-[#96CEBD] py-2 px-2 rounded-xl text-white">
              delivered
            </div>
          </div>
          {/* card */}
          <div className="flex flex-row justify-between items-center bg-[#dbc9ea] py-6 px-4 rounded mb-3">
            <div className="flex flex-row items-center">
              <div className="w-20 h-10 rounded overflow-hidden">
                <img src={item2} alt="" className="w-full h-full object-fit" />
              </div>
              <div className="ml-2">
                <h2 className="text-base font-semibold leading-5">Nike Cap</h2>
                <span className="text-sm">To: John Paul</span>
              </div>
            </div>
            <div className="bg-[#96CEBD] py-2 px-2 rounded-xl text-white">
              delivered
            </div>
          </div>
          {/* card */}
          <div className="flex flex-row justify-between items-center bg-[#dbc9ea] py-6 px-4 rounded mb-3">
            <div className="flex flex-row items-center">
              <div className="w-20 h-10 rounded overflow-hidden">
                <img src={item2} alt="" className="w-full h-full object-fit" />
              </div>
              <div className="ml-2">
                <h2 className="text-base font-semibold leading-5">Nike Cap</h2>
                <span className="text-sm">To: John Paul</span>
              </div>
            </div>
            <div className="bg-[#96CEBD] py-2 px-2 rounded-xl text-white">
              delivered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
