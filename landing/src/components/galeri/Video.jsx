import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getDataVideo } from "../../getDataApi";

const Video = () => {
  const [dataVideo, setDataVideo] = useState([]);

  // ===================== FOR GET API ======================
  useEffect(() => {
    getDataVideo().then((data) => {
      setDataVideo(data);
    });
  }, []);

  //  ==================== FOR PAGINATION ====================
  const [pageNumber, setPageNumber] = useState(0);
  const [card, setCard] = useState(1000);
  const galeriPerPage = 6;
  const currentPage = pageNumber * galeriPerPage;

  const changePageVideo = ({ selected }) => {
    setPageNumber(selected);
  };
  const pageCount = dataVideo.length / galeriPerPage;

  return (
    <>
      <div className="kategori grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 md:gap-x-10 md:gap-y-14 justify-items-center text-sm font-medium capitalize">
        {dataVideo
          .slice(0, card)
          .slice(currentPage, currentPage + galeriPerPage)
          .reverse()
          .map((video) => (
            <iframe
              src={video.link}
              allow="navigation"
              className="rounded-lg w-full h-24 md:h-36 lg:h-52"
            ></iframe>
          ))}
      </div>

      {/* =============== PAGINATION =============== */}
      <div className="flex justify-center mb-4">
        <ReactPaginate
          className="flex gap-3 mx-auto my-5"
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          onPageChange={changePageVideo}
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

export default Video;
