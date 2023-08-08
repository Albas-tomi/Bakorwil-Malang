import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ConfirmDeleteGaleri from "./ConfirmDeleteGaleri";
import { deleteGaleri, getGaleri } from "./apiGaleri";
import EditGaleri from "./EditGaleri";
import AddGaleri from "./AddGalei";
import ReactPaginate from "react-paginate";

const GaleriList = () => {
  const [dataGaleri, setDataGaleri] = useState([]);
  const [pickOfGaleriEdit, setpickOfGaleriEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const GaleriPerPage = 10;

  const pageVisited = pageNumber * GaleriPerPage;
  const pageCount = dataGaleri.length / GaleriPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  const urlImg = "http://localhost:4000/GaleriImg/";

  useEffect(() => {
    getGaleri().then((data) => {
      setDataGaleri(data);
    });
  }, []);

  const deleteGaleriId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteGaleri(id, setDataGaleri, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditGaleri = (GaleriData) => {
    setpickOfGaleriEdit(GaleriData);
    setDataGaleri((prevData) =>
      prevData.map((Galeri) =>
        Galeri.id === GaleriData.id ? GaleriData : Galeri
      )
    );
  };

  const handleAddGaleri = (newGaleri) => {
    setDataGaleri([...dataGaleri, newGaleri]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Nomor</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Isi Galeri</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataGaleri
              ?.slice(0, dataGaleri.length)
              .slice(pageVisited, pageVisited + GaleriPerPage)
              .reverse()
              .map((Galeri, idx) => (
                <tr key={Galeri.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            className="w-24"
                            src={`${urlImg}${Galeri.gambar}`}
                            alt="gambar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{Galeri.judul}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: Galeri.kategori,
                      }}
                    />
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteGaleri.showModal();
                        setPickIdDelete(Galeri.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditGaleri({
                          id: Galeri.id,
                          judul: Galeri.judul,
                          kategori: Galeri.kategori,
                          gambar: Galeri.gambar,
                        });
                        window.my_modal_editGaleri.showModal();
                      }}
                      className="btn btn-outline btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end shadow-md bg-whiterounded-md h-14 p-4 items-center">
          <ReactPaginate
            className="flex gap-4"
            previousLabel={"< Prev"}
            nextLabel={"Next >"}
            pageCount={Math.ceil(dataGaleri.length / GaleriPerPage)}
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
      <AddGaleri handleAddGaleri={handleAddGaleri} />
      <EditGaleri
        handleEditGaleri={handleEditGaleri}
        pickOfGaleriEdit={pickOfGaleriEdit}
      />
      <ConfirmDeleteGaleri
        deleteGaleriId={deleteGaleriId}
        pickIdDelete={pickIdDelete}
      />
    </div>
  );
};

export default GaleriList;
