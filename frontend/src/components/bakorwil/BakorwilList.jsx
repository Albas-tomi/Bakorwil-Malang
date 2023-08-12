import React, { useEffect, useState } from "react";
import { deleteBakorwil, getBakorwil } from "./apiBakorwil";
import { toast } from "react-toastify";
import ConfirmDeleteBakorwil from "./ConfirmDeleteBakorwil";
import AddBakorwil from "./AddBakorwil";
import EditBakorwil from "./EditBakorwil";
import ReactPaginate from "react-paginate";

const BakorwilList = () => {
  const [dataBakorwil, setDataBakorwil] = useState([]);
  const [pickOfBakorwilEdit, setpickOfBakorwilEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const BakorwilPerPage = 10;
  const pageVisited = pageNumber * BakorwilPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // Last Pagination

  const urlImg = "http://localhost:4000/bakorwilImg/";

  useEffect(() => {
    getBakorwil().then((data) => {
      setDataBakorwil(data);
    });
  }, []);

  const deleteBakorwilId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteBakorwil(id, setDataBakorwil, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditBakorwil = (bakorwilData) => {
    setpickOfBakorwilEdit(bakorwilData);
    setDataBakorwil((prevData) =>
      prevData.map((bakorwil) =>
        bakorwil.id === bakorwilData.id ? bakorwilData : bakorwil
      )
    );
  };

  const handleAddBakorwil = (newBakorwil) => {
    setDataBakorwil([...dataBakorwil, newBakorwil]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th className="text-center">Nomor</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Link</th>
              <th className="text-center">Gambar Bakorwil</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataBakorwil
              ?.slice(0, dataBakorwil.length)
              .slice(pageVisited, pageVisited + BakorwilPerPage)
              .reverse()
              .map((bakorwil, idx) => (
                <tr key={bakorwil.id}>
                  <td className="text-center">{pageVisited + idx + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{bakorwil.judul}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      className="text-blue-600"
                      href={bakorwil.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {bakorwil.judul}
                    </a>
                  </td>
                  <td className="text-center">
                    <div className="mask mx-auto  mask-squircle w-12 h-12">
                      <img
                        className="w-24"
                        src={`${urlImg}${bakorwil.gambar}`}
                        alt="gambar"
                      />
                    </div>
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        setPickIdDelete(bakorwil.id);
                        window.my_modal_confirmDeleteBakorwil.showModal();
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditBakorwil({
                          id: bakorwil.id,
                          judul: bakorwil.judul,
                          link: bakorwil.link,
                          gambar: bakorwil.gambar,
                        });
                        window.my_modal_editBakorwil.showModal();
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
            pageCount={Math.ceil(dataBakorwil.length / BakorwilPerPage)}
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
      <AddBakorwil handleAddBakorwil={handleAddBakorwil} />
      <EditBakorwil
        handleEditBakorwil={handleEditBakorwil}
        pickOfBakorwilEdit={pickOfBakorwilEdit}
      />
      <ConfirmDeleteBakorwil
        deletebakorwilId={deleteBakorwilId}
        pickIdDelete={pickIdDelete}
      />
    </div>
  );
};

export default BakorwilList;
