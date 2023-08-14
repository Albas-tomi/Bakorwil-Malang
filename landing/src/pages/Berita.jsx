import React, { useEffect, useState } from "react";
import { Card } from "../components/berita/Card";
import ReactPaginate from "react-paginate";
import Data from "../Data.json";
import { Modal } from "../components/berita/Modal";

export const Berita = () => {
  // =========== STATE FOR DATA CARD ===========
  const [data, setData] = useState([]);
  const Get = (dataKlik) => {
    setData(dataKlik);
  };

  //  ==================== FOR PAGINATION ====================
  const [pageNumber, setPageNumber] = useState(0);
  const [card, setCard] = useState(1000);
  const beritaPerPage = 6;
  const currentPage = pageNumber * beritaPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const pageCount = Data.length / beritaPerPage;

  return (
    <div>
      {/* =================== SEARCH BAR =================== */}
      {/* <div className="p-3 grid grid-cols-2 items-center gap-2 md: ">
        <button className="bg-second text-white rounded-md w-8 h-8 flex justify-center items-center order-last ml-5">
          <FaMagnifyingGlass />
        </button>
        <div>
          <input
            type="text"
            placeholder="Cari Apenih..."
            className="input input-bordered input-accent w-full max-w-xs"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </div> */}
      <h1 className="p-5 text-xl text-center font-semibold text-[#094067] md:text-4xl">
        Berita Hari ini
      </h1>
      {/* =============== CARD =============== */}
      <div className="grid grid-cols-2 gap-2 gap-y-6 justify-items-center md:grid-cols-3">
        {/* =============== CARD BERITA PER PAGE =============== */}
        {Data.slice(0, card)
          .slice(currentPage, currentPage + beritaPerPage)
          .map((beritaData) => (
            <Card beritaData={beritaData} Get={Get} />
          ))}
      </div>
      {/* =============== PAGINATION =============== */}
      <div className="flex justify-center">
        <ReactPaginate
          className="flex gap-3 mx-auto my-5"
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          onPageChange={changePage}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          activeClassName={"paginationActivate"}
          disabledLinkClassName={"paginationDisabled"}
        />
      </div>
      <Modal data={data} />
    </div>
  );
};
