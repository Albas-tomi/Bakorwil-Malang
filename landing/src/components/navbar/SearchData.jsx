import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getDataBerita, getDataPengumuman } from "../../getDataApi";
import { useEffect } from "react";
import CardSeacrhDisplay from "./CardSeacrhDisplay";
import ModalDisplaySearch from "./ModalDisplaySearch";

const SearchData = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [dataBerita, setDataBerita] = useState([]);
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [dataModal, setDataModal] = useState("");

  useEffect(() => {
    getDataBerita().then((data) => {
      setDataBerita(data);
    });
    getDataPengumuman().then((data) => {
      setDataPengumuman(data);
    });
  }, []);

  useEffect(() => {
    setDataSearch([...dataBerita, ...dataPengumuman]);
  }, [dataBerita, dataPengumuman]);

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
        className="bg-second px-3 py-2 rounded-lg overflow-y-auto "
      >
        <div
          className={`${
            showSearch ? "block " : "hidden"
          } duration-500 top-16 ease-in-out absolute w-screen text-text  right-0`}
        >
          {filteredData.length <= 0 ? (
            <div className="text-lg text-center"></div>
          ) : (
            <div className=" gap-3 bg-text/70 grid grid-flow-row grid-cols-4  justify-center mx-auto">
              <CardSeacrhDisplay
                setDataModal={setDataModal}
                filteredData={filteredData}
              />
            </div>
          )}
        </div>
        <ModalDisplaySearch dataModal={dataModal} />
        <FaMagnifyingGlass />
      </a>
    </>
  );
};

export default SearchData;
