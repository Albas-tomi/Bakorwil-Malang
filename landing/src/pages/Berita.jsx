import React, { useState } from "react";
import { Card } from "../components/berita/Card";
import ReactPaginate from "react-paginate";
import Data from "../Data.json";
import { Modal } from "../components/berita/Modal";

export const Berita = () => {
  const [data, setData] = useState([]);

  const Get = (dataKlik) => {
    setData(dataKlik);
  };

  //  ==================== FOR PAGINATION ====================
  const [pageNumber, setPageNumber] = useState(0);
  const [card, setCard] = useState(50);
  const beritaPerPage = 6;
  const currentPage = pageNumber * beritaPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const pageCount = Data.length / beritaPerPage;

  return (
    <div>
      <h1 className="text-xl text-center font-semibold text-[#094067] mb-5 md:text-4xl">
        Berita Hari ini
      </h1>
      {/* =============== GRID COL CARD =============== */}
      <div className="grid grid-cols-2 gap-2 gap-y-6 justify-items-center md:grid-cols-3">
        {/* =============== CARD BERITA PER PAGE =============== */}
        {Data.slice(0, card)
          .slice(currentPage, currentPage + beritaPerPage)
          .map((b) => (
            <Card b={b} Get={Get} />
          ))}
      </div>
      {/* =============== PAGINATION =============== */}
      <div className="flex justify-center">
        <ReactPaginate
          className="flex gap-3 mx-auto my-5"
          breakLabel="..."
          previousLabel={
            <button className="join-item btn-sm btn btn-outline">Prev</button>
          }
          nextLabel={
            <button className="join-item btn-sm btn btn-outline">Next</button>
          }
          onPageChange={changePage}
          pageCount={pageCount}
          // containerClassName={"paginationBttns"}
          // previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={
            <button className="join-item btn btn-sm btn-active">
              {pageCount}
            </button>
          }
          renderOnZeroPageCount={null}
        />
      </div>
      <Modal data={data} />
    </div>
  );
};
