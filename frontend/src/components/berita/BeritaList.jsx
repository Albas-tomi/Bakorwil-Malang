import React, { useEffect, useState } from "react";
import { deleteBerita, getBerita } from "../../../getApi";
import { toast } from "react-toastify";
import AddBerita from "./AddBerita";
import EditBerita from "./EditBerita";
import ConfirmDeleteBerita from "./ConfirmDeleteBerita";

const BeritaList = () => {
  const [dataBerita, setDataBerita] = useState([]);
  const [pickOfBeritaEdit, setpickOfBeritaEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  const urlImg = "http://localhost:4000/beritaImg/";

  useEffect(() => {
    getBerita().then((data) => {
      setDataBerita(data);
    });
  }, []);

  const deleteBeritaId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteBerita(id, setDataBerita, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditBerita = (beritaData) => {
    setpickOfBeritaEdit(beritaData);
    setDataBerita((prevData) =>
      prevData.map((berita) =>
        berita.id === beritaData.id ? beritaData : berita
      )
    );
  };
  const handleAddBerita = (newBerita) => {
    setDataBerita([...dataBerita, newBerita]);
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
              <th className="text-center">Isi Berita</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataBerita.map((berita, idx) => (
              <tr key={berita.id}>
                <td>{(idx += 1)}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="w-24"
                          src={`${urlImg}${berita.gambar}`}
                          alt="gambar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{berita.judul}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className="line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: berita.deskripsi,
                    }}
                  />
                </td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => {
                      window.my_modal_confirmDeleteBerita.showModal();
                      setPickIdDelete(berita.id);
                    }}
                    className="btn btn-outline btn-error"
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => {
                      handleEditBerita({
                        id: berita.id,
                        judul: berita.judul,
                        deskripsi: berita.deskripsi,
                        gambar: berita.gambar,
                      });
                      window.my_modal_editBerita.showModal();
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
      </div>
      <AddBerita handleAddBerita={handleAddBerita} />
      <EditBerita
        handleEditBerita={handleEditBerita}
        pickOfBeritaEdit={pickOfBeritaEdit}
      />
      <ConfirmDeleteBerita
        deleteBeritaId={deleteBeritaId}
        pickIdDelete={pickIdDelete}
      />
    </div>
  );
};

export default BeritaList;
