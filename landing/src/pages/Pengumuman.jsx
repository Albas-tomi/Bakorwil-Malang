import React, { useState } from "react";
import { Card } from "../components/pengumuman/Card";
import ReactPaginate from "react-paginate";
import Data from "../Data.json";
import { Modal } from "../components/pengumuman/Modal";

export const Pengumuman = () => {
  const [data, setData] = useState([]);

  const Get = (dataKlik) => {
    setData(dataKlik);
  };

  //  ==================== FOR PAGINATION ====================
  const [pageNumber, setPageNumber] = useState(0);
  const [card, setCard] = useState(100);
  const pengumumanPerPage = 6;
  const currentPage = pageNumber * pengumumanPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const pageCount = Data.length / pengumumanPerPage;

  return (
    <div>
      <h1 className="text-xl text-center font-semibold text-[#094067] mb-5 md:text-4xl">
        Pengumuman Hari ini
      </h1>
      {/* =============== GRID COL CARD =============== */}
      <div className="grid grid-cols-2 gap-2 gap-y-6 justify-items-center md:grid-cols-3">
        {/* =============== CARD PENGUMUMAN PER PAGE =============== */}
        {Data.slice(0, card)
          .slice(currentPage, currentPage + pengumumanPerPage)
          .map((p) => (
            <Card p={p} Get={Get} />
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
