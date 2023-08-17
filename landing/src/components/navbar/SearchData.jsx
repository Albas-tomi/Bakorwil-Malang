import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Data from "../../Data.json";
import { getDataBerita, getDataPengumuman } from "../../getDataApi";
import { useEffect } from "react";

const SearchData = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    getDataBerita().then((data) => {
      setDataSearch(data);
    });
    getDataPengumuman().then((data) => {
      setDataSearch(data);
    });
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value === "") {
      setFilteredData([]);
    } else {
      const filtered = dataSearch.filter((item) =>
        item.judul.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <div
        className={`${
          showSearch ? "translate-y-0 " : "translate-y-[-200px]"
        } duration-500 top-0 ease-in-out absolute w-screen right-0 flex justify-center items-center h-20 bg-birumuda`}
      >
        <section className="flex w-1/2 gap-8 ">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            className="w-full p-2  text-text rounded-md"
            name="search"
            id="search"
          />
          <button
            onClick={() => {
              setFilteredData([]);
              setShowSearch(false);
              setQuery("");
            }}
            className="text-text font-bold"
            type="button"
          >
            X
          </button>
        </section>
      </div>
      <a
        onClick={() => setShowSearch(true)}
        className="bg-second px-3 py-2 rounded-lg"
      >
        <div
          className={`${
            showSearch ? "block " : "hidden"
          } duration-500 top-16 bg-birumuda2 ease-in-out absolute w-screen text-text  right-0`}
        >
          {filteredData.length < 0 ? (
            <div>Data Kosong</div>
          ) : (
            filteredData.map((data) => (
              <div
                className="flex justify-center items-center overflow-y-visible flex-col bg-birumuda2 rounded-md"
                key={data.id}
              >
                <p>{data.judul}</p>
                <img className="w-280" src={data.url} alt="" />
              </div>
            ))
          )}
        </div>
        <FaMagnifyingGlass />
      </a>
    </>
  );
};

export default SearchData;
