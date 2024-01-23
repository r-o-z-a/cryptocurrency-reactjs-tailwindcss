import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <nav
      className={`bg-[#242424] place-content-between p-4 mb-16 flex items-center border-b border-white 2xl:w-screen`}
    >
      <div className="text-white">
        <h1 className="text-2xl font-bold">Crypto App</h1>
      </div>
      <div className="flex items-center">
        <div className="relative ">
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "0.5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              style={{ pointerEvents: "none" }}
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </span>
          <input
            type="text"
            className="w-full py-2 pl-8 pr-4 border-b-2 border-white bg-transparent focus:outline-none ml-3"
            placeholder="Search Cryptocurrency"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
