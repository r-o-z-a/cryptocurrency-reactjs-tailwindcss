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
      <div className="flex items-center space-x-5">
        <img
          src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
          className="h-12 w-12"
          alt={name}
        />
      </div>
      <div className="ml-14 text-left">
        {/* <p className="text-base break-words">{name}</p> */}
        <p className="font-thin">{symbol}</p>
        <p className="font-bold">${price}</p>
      </div>
      <span
        style={{ backgroundColor: getBackgroundColorClass() }}
        className="italic font-light px-1 rounded text-white m-x-7"
      >
        {change}%
      </span>
    </div>
  );
}

export default Coin;
