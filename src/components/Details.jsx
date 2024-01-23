// Details.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Details({ coin, onClose }) {
  console.log("Coin Details:", coin);
  const data = [
    { name: "1h", uv: parseFloat(coin.percent_change_1h), pv: 0, amt: 0 },
    { name: "24h", uv: parseFloat(coin.percent_change_24h), pv: 0, amt: 0 },
    { name: "7d", uv: parseFloat(coin.percent_change_7d), pv: 0, amt: 0 },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#252525] rounded p-4 w-full md:max-w-2xl lg:max-w-3xl text-slate-300">
        <button
          onClick={onClose}
          className="text-red-600 bg-transparent p-0 m-0 rounded font-bold"
        >
          🗙
        </button>
        <h2 className="text-2xl mb-4 text-center">{coin.name} Details</h2>

        {/* Render line chart */}
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className=" ml-20 text-justify">
          <p className="mb-2 ">Symbol: {coin.symbol}</p>
          <p className="mb-2 ">Price (USD): {coin.price_usd}</p>
          <p className="mb-2 ">Rank: {coin.rank}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
