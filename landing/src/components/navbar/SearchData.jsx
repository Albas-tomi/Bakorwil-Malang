import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Data from "../../Data.json";

const SearchData = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value === "") {
      setFilteredData([]);
    } else {
      const filtered = Data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
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
            onClick={() => setShowSearch(false)}
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
            showSearch ? "opacity-100 " : "opacity-0"
          } duration-500 top-16 bg-birumuda2 ease-in-out absolute w-screen text-text  right-0`}
        >
          {filteredData.length > 0 &&
            filteredData.map((data) => (
              <div
                className="flex justify-center items-center overflow-y-visible flex-col bg-birumuda2 rounded-md"
                key={data.id}
              >
                <p>{data.title}</p>
                <img className="w-280" src={data.image} alt="" />
              </div>
            ))}
        </div>
        <FaMagnifyingGlass />
      </a>
    </>
  );
};

export default SearchData;
