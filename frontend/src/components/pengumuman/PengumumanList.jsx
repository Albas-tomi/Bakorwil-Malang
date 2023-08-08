import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditPengumuman from "./EditPengumuman";
import AddPengumuman from "./AddPengumuman";
import ConfirmDeletePengumuman from "./ConfirmDeletePengumuman";
import { deletePengumuman, getPengumuman } from "./apiPengumuman";
import ReactPaginate from "react-paginate";

const PengumumanList = () => {
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const [pickOfPengumumanEdit, setpickOfPengumumanEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");
  const urlImg = "http://localhost:4000/pengumumanImg/";

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const pengumumanPerPage = 10;

  const pageVisited = pageNumber * pengumumanPerPage;
  const pageCount = dataPengumuman.length / pengumumanPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  useEffect(() => {
    getPengumuman().then((data) => {
      setDataPengumuman(data);
    });
  }, []);

  const deletePengumumanId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deletePengumuman(id, setDataPengumuman, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (pengumumanData) => {
    setpickOfPengumumanEdit(pengumumanData);
    setDataPengumuman((prevData) =>
      prevData.map((pengumuman) =>
        pengumuman.id === pengumumanData.id ? pengumumanData : pengumuman
      )
    );
  };

  const handleAddPengumuman = (newPengumuman) => {
    setDataPengumuman([...dataPengumuman, newPengumuman]);
  };

  return (
    <div className="flex flex-col gap-2 min-h-screen justify-between">
      <div className="overflow-x-auto  ">
        <table className="table shadow-md">
          <thead className="bg-base-200">
            <tr>
              <th className="text-center">Nomor</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Isi Pengumuman</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPengumuman
              ?.slice(0, dataPengumuman.length)
              .slice(pageVisited, pageVisited + pengumumanPerPage)
              .reverse()
              .map((pengumuman, idx) => (
                <tr key={pengumuman.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            className="w-24"
                            src={`${urlImg}${pengumuman.gambar}`}
                            alt="gambar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{pengumuman.judul}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: pengumuman.deskripsi,
                      }}
                    />
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeletePengumuman.showModal();
                        setPickIdDelete(pengumuman.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEdit({
                          id: pengumuman.id,
                          judul: pengumuman.judul,
                          deskripsi: pengumuman.deskripsi,
                          gambar: pengumuman.gambar,
                        });
                        window.my_modal_edit.showModal();
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
            pageCount={Math.ceil(dataPengumuman.length / pengumumanPerPage)}
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

      <AddPengumuman handleAddPengumuman={handleAddPengumuman} />
      <EditPengumuman
        pickOfPengumumanEdit={pickOfPengumumanEdit}
        handleEdit={handleEdit}
      />
      <ConfirmDeletePengumuman
        deletePengumumanId={deletePengumumanId}
        pickIdDelete={pickIdDelete}
      />
    </div>
  );
};

export default PengumumanList;
