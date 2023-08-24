import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getDataGaleri } from "../../getDataApi";

const Card = ({ setPickOfGaleri }) => {
  const [dataGaleri, setDataGaleri] = useState([]);
  const urlImg = "http://localhost:4000/galeriImg/";
  useEffect(() => {
    getDataGaleri().then((data) => {
      setDataGaleri(data);
    });
  }, []);
  //  ==================== FOR PAGINATION ====================
  const [pageNumber, setPageNumber] = useState(0);
  const [card, setCard] = useState(1000);
  const galeriPerPage = 6;
  const currentPage = pageNumber * galeriPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = dataGaleri.length / galeriPerPage;

  return (
    <>
      <div className="card grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-14 items-stretch justify-between mt-5">
        {dataGaleri
          .slice(0, card)
          .slice(currentPage, currentPage + galeriPerPage)
          .reverse()
          .map((dataGaleri) => (
            <label
              key={dataGaleri.id}
              className="card card-compact bg-base-100 bg-cover rounded-md overflow-hidden relative cursor-pointer"
              onClick={() => {
                window.modalGaleri.showModal();
                setPickOfGaleri({
                  id: dataGaleri.id,
                  title: dataGaleri.judul,
                  image: dataGaleri.gambar,
                });
              }}
            >
              <img
                src={`${urlImg}${dataGaleri.gambar}`}
                alt=""
                className="object-cover h-28 md:h-44 lg:h-64"
              />
              <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-neutral-900 bg-opacity-50 capitalize">
                {dataGaleri.judul}
              </div>
            </label>
          ))}
      </div>

      {/* =============== PAGINATION =============== */}
      <div className="flex justify-center mb-5 mt-3">
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
    </>
  );
};

export default Card;
