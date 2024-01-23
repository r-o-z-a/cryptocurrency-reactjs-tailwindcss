import React, { useState, useEffect } from "react";
import Axios from "axios";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";
import Details from "./components/Details";

function App() {
  const [listOfCoins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinlore.net/api/tickers/")
      .then((response) => {
        console.log(response.data);
        setCoins(response.data.data || []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchWord(term);
  };

  const handleCoinClick = (coin) => {
    setSelectedCoin(coin);
  };

  const handleCloseDetails = () => {
    setSelectedCoin(null);
  };

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div>
      <Navbar onSearch={handleSearch} />

      {selectedCoin && (
        <Details coin={selectedCoin} onClose={handleCloseDetails} />
      )}

      <div className=" w-[80%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.price_usd}
              symbol={coin.symbol.toUpperCase()}
              change={coin.percent_change_1h}
              onClick={() => handleCoinClick(coin)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
