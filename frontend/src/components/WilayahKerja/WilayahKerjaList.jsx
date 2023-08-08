import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditWilayahKerja from "./EditWilayahKerja";
import AddWilayahKerja from "./AddWilayahKerja";
import ConfirmDeleteWilayahKerja from "./ConfirmDeleteWilayahKerja";
import { deleteWilayahKerja, getWilayahKerja } from "./apiWilayahKerja";
import ReactPaginate from "react-paginate";

const WilayahKerjaList = () => {
  const [dataWilayahKerja, setDataWilayahKerja] = useState([]);
  const [pickOfWilayahKerjaEdit, setpickOfWilayahKerjaEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");
  const urlImg = "http://localhost:4000/wilayahKerjaImg/";

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const WilayahKerjaPerPage = 10;

  const pageVisited = pageNumber * WilayahKerjaPerPage;
  const pageCount = dataWilayahKerja.length / WilayahKerjaPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  useEffect(() => {
    getWilayahKerja().then((data) => {
      setDataWilayahKerja(data);
    });
  }, []);

  const deleteWilayahKerjaId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteWilayahKerja(id, setDataWilayahKerja, notifyDelete);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (wilayahKerjaData) => {
    setpickOfWilayahKerjaEdit(wilayahKerjaData);
    setDataWilayahKerja((prevData) =>
      prevData.map((wilayahKerja) =>
        wilayahKerja.id === wilayahKerjaData.id
          ? wilayahKerjaData
          : wilayahKerja
      )
    );
  };

  const handleAddWilayahKerja = (newWilayahKerja) => {
    setDataWilayahKerja([...dataWilayahKerja, newWilayahKerja]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th className="text-center">Nomor</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Isi WilayahKerja</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataWilayahKerja
              ?.slice(0, dataWilayahKerja.length)
              .slice(pageVisited, pageVisited + WilayahKerjaPerPage)
              .reverse()
              .map((wilayahKerja, idx) => (
                <tr key={wilayahKerja.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            className="w-24"
                            src={`${urlImg}${wilayahKerja.gambar}`}
                            alt="gambar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{wilayahKerja.judul}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: wilayahKerja.link,
                      }}
                    />
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteWilayahKerja.showModal();
                        setPickIdDelete(wilayahKerja.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEdit({
                          id: wilayahKerja.id,
                          judul: wilayahKerja.judul,
                          link: wilayahKerja.link,
                          gambar: wilayahKerja.gambar,
                        });
                        window.my_modal_editWilayahKerja.showModal();
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
            pageCount={Math.ceil(dataWilayahKerja.length / WilayahKerjaPerPage)}
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

      <AddWilayahKerja handleAddWilayahKerja={handleAddWilayahKerja} />
      <EditWilayahKerja
        pickOfWilayahKerjaEdit={pickOfWilayahKerjaEdit}
        handleEdit={handleEdit}
      />
      <ConfirmDeleteWilayahKerja
        deleteWilayahKerjaId={deleteWilayahKerjaId}
        pickIdDelete={pickIdDelete}
      />
    </div>
  );
};

export default WilayahKerjaList;
