import React from "react";

function Coin({ name, price, change, symbol, onClick }) {
  const getBackgroundColorClass = () => {
    return change > 0 ? "green" : "red";
  };

  return (
    <div
      className={`overflow-hidden m-2 p-2 flex items-center justify-between rounded border lg:m-1 ${
        getBackgroundColorClass() === "green"
          ? "bg-green-900/50 border-green-600"
          : "bg-red-900/50 border-red-600"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <img
          src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
          className="h-12 w-12"
          alt={name}
        />
        <span
          style={{ backgroundColor: getBackgroundColorClass() }}
          className="italic font-light px-1 rounded text-white ml-2"
        >
          {change}%
        </span>
      </div>
      <div className="ml-14 text-left">
        <p className="text-base break-words">{name}</p>
        <p className="font-thin">{symbol}</p>
        <p className="font-bold">${price}</p>
      </div>
    </div>
  );
}

export default Coin;
