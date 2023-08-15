import React, { useEffect, useState } from 'react';
import { Card } from '../components/berita/Card';
import ReactPaginate from 'react-paginate';
import Data from '../Data.json';
import { Modal } from '../components/berita/Modal';
const Berita = () => {
  const [query, setQuery] = useState('');
  // console.log(Data.filter((d) => d.title.toLowerCase().includes("ketiga")));

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
    <>
      <div className="px-5 md:px-10 lg:px-20">
        {/* =================== SEARCH BAR =================== */}
        <div className="p-3 grid grid-cols-2 items-center gap-2">
          <div>
            <input type="text" placeholder="Cari Apenih..." className="input input-bordered input-accent w-full max-w-xs" onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>
        <h1 className="p-5 text-xl text-center font-semibold text-[#094067] md:text-4xl">Berita Hari ini</h1>
        {/* =============== CARD =============== */}
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between mt-4 md:mt-8 gap-x-5 gap-y-10 md:gap-y-14 md:gap-x-10">
          {/* =============== CARD BERITA PER PAGE =============== */}
          {Data.filter((search) => search.title.toLocaleLowerCase().includes(query))
            .slice(0, card)
            .slice(currentPage, currentPage + beritaPerPage)
            .map((beritaData) => (
              <Card beritaData={beritaData} Get={Get} />
            ))}
        </div>
        {/* =============== PAGINATION =============== */}
        <div className="flex justify-center mb-10 mt-3">
          <ReactPaginate
            className="flex gap-3 mx-auto my-5"
            previousLabel={'< Prev'}
            nextLabel={'Next >'}
            onPageChange={changePage}
            pageCount={Math.ceil(pageCount)}
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
    </>
  );
};
export default Berita;
