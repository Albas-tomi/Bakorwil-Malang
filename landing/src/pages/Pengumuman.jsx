import React, { useState } from 'react';
import { Card } from '../components/pengumuman/Card';
import ReactPaginate from 'react-paginate';
import Data from '../Data.json';
import { Modal } from '../components/pengumuman/Modal';

const Pengumuman = () => {
  const [data, setData] = useState([]);

  const Get = (dataKlik) => {
    setData(dataKlik);
  };

  //  ==================== FOR PAGINATION ====================
  const [pageNumber, setPageNumber] = useState(0);
  const [card, setCard] = useState(1000);
  const pengumumanPerPage = 6;
  const currentPage = pageNumber * pengumumanPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const pageCount = Data.length / pengumumanPerPage;

  return (
    <div className="px-5 md:px-10 lg:px-20">
      <h1 className="text-xl text-center font-semibold text-[#094067] mb-6 mt-5 md:my-10 lg:my-15 md:text-4xl">Pengumuman Hari ini</h1>
      {/* =============== GRID COL CARD =============== */}
      <div className="card grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-14 items-stretch justify-between mt-5">
        {/* =============== CARD PENGUMUMAN PER PAGE =============== */}
        {Data.slice(0, card)
          .slice(currentPage, currentPage + pengumumanPerPage)
          .map((pengumumanData) => (
            <Card pengumumanData={pengumumanData} Get={Get} />
          ))}
      </div>
      {/* =============== PAGINATION =============== */}
      <div className="flex justify-center mb-10 mt-3">
        <ReactPaginate
          className="flex gap-3 mx-auto my-5 mb-7"
          previousLabel={'< Prev'}
          nextLabel={'Next >'}
          onPageChange={changePage}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          activeClassName={'paginationActivate'}
          disabledLinkClassName={'paginationDisabled'}
        />
      </div>
      <Modal data={data} />
    </div>
  );
};

export default Pengumuman;
