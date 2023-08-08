import React, { useEffect, useState } from "react";
import ConfirmDeleteCarrousel from "./ConfirmDeleteCarrousel";
import { toast } from "react-toastify";
import AddCarrousel from "./AddCarrousel";
import EditCarrousel from "./EditCarrousel";
import { deleteCarrousel, getCarrouesel } from "./apiCarrousel";
import ReactPaginate from "react-paginate";

const CarrouselList = () => {
  const [dataCarrousel, setDataCarrousel] = useState([]);
  const [pickOfCarrouselEdit, setpickOfCarrouselEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const CarrouselPerPage = 10;

  const pageVisited = pageNumber * CarrouselPerPage;
  const pageCount = dataCarrousel.length / CarrouselPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  const urlImg = "http://localhost:4000/carrouselImg/";

  useEffect(() => {
    getCarrouesel().then((data) => {
      setDataCarrousel(data);
    });
  }, []);

  const deleteCarrouselId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteCarrousel(id, setDataCarrousel, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCarrousel = (carrouselData) => {
    setpickOfCarrouselEdit(carrouselData);
    setDataCarrousel((prevData) =>
      prevData.map((carrousel) =>
        carrousel.id === carrouselData.id ? carrouselData : carrousel
      )
    );
  };

  const handleAddCarrousel = (newCarrousel) => {
    setDataCarrousel([...dataCarrousel, newCarrousel]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th className="text-center">Nomor</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Gambar Carrousel</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataCarrousel
              ?.slice(0, dataCarrousel.length)
              .slice(pageVisited, pageVisited + CarrouselPerPage)
              .reverse()
              .map((carrousel, idx) => (
                <tr key={carrousel.id}>
                  <td className="text-center">{pageVisited + idx + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{carrousel.judul}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="mask mx-auto  mask-squircle w-12 h-12">
                      <img
                        className="w-24"
                        src={`${urlImg}${carrousel.gambar}`}
                        alt="gambar"
                      />
                    </div>
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteCarrousel.showModal();
                        setPickIdDelete(carrousel.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditCarrousel({
                          id: carrousel.id,
                          judul: carrousel.judul,
                          gambar: carrousel.gambar,
                        });
                        window.my_modal_editCarrousel.showModal();
                      }}
                      className="btn btn-outline btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          {/* foot */}
        </table>
        <div className="w-full flex justify-end shadow-md bg-whiterounded-md h-14 p-4 items-center">
          <ReactPaginate
            className="flex gap-4"
            previousLabel={"< Prev"}
            nextLabel={"Next >"}
            pageCount={Math.ceil(dataCarrousel.length / CarrouselPerPage)}
            onPageChange={changePage}
            marginPagesDisplayed={2}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            activeClassName={"paginationActivate"}
            nextLinkClassName={"nextBttn"}
            disabledLinkClassName={"paginationDisabled"}
          />
        </div>
      </div>
      <AddCarrousel handleAddCarrousel={handleAddCarrousel} />
      <EditCarrousel
        handleEditCarrousel={handleEditCarrousel}
        pickOfCarrouselEdit={pickOfCarrouselEdit}
      />
      <ConfirmDeleteCarrousel
        deleteCarrouselId={deleteCarrouselId}
        pickIdDelete={pickIdDelete}
      />
    </div>
  );
};

export default CarrouselList;
