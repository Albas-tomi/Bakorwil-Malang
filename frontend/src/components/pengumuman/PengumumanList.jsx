import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AddPengumuman from "./addPengumuman";
import EditPengumuman from "./EditProduct";

const PengumumanList = () => {
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const [idPengumumanEdit, setIdPengumumanEdit] = useState("");
  const urlImg = "http://localhost:5000/beranda/pengumumanImg";

  // ================= RETRIEVE DATA ULANG =============
  useEffect(() => {
    getPengumuman();
  }, []);
  // ================= LAST RETRIEVE DATA ULANG =============

  // ================ GET DATA BE ======================
  const getPengumuman = async () => {
    const res = await axios.get("http://localhost:5000/pengumuman");
    setDataPengumuman(res.data);
  };
  // ================ LAST GET DATA BE ======================

  //================DELETE DATA ========================
  const deletePengumuman = async (id) => {
    const notifyDelete = (message) => toast.success(message);

    try {
      await axios.delete(`http://localhost:5000/pengumuman/${id}`);
      getPengumuman();
      notifyDelete("Data Berhasil Dihapus!");
    } catch (error) {
      console.log("Ga iso ndk download data e");
    }
  };
  //================LAST DELETE DATA ========================

  //  ===============EDIT DATA=====================
  const handleEdit = (pengumumanData) => {
    setIdPengumumanEdit(pengumumanData);
    // =============== RETRIEVE DATA ULANG SETELAH DI EDIT ===============
    setDataPengumuman(
      (prevData) =>
        prevData.map((pengumuman) =>
          pengumuman.id === pengumumanData.id ? pengumumanData : pengumuman
        )
      // =============== RETRIEVE DATA ULANG SETELAH DI EDIT ===============
    );
  };
  //  ================= LAST EDIT DATA=====================

  //  =================HANDLE ADD DATA & RETRIEVE DATA ULANG =====================
  const handleAddPengumuman = (newPengumuman) => {
    setDataPengumuman([...dataPengumuman, newPengumuman]);
  };
  //  ================= LAST HANDLE ADD DATA & RETRIEVE DATA ULANG ===============

  return (
    <div className="flex flex-col gap-2">
      {/* <button onClick={notify}>Notify !</button> */}
      {dataPengumuman.map((pengumuman) => (
        <div
          key={pengumuman.id}
          className="flex flex-col  bg-base-100 shadow-xl"
        >
          <figure>
            <img
              className="h-24"
              src={`${urlImg}/${pengumuman.img}`}
              alt="foto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{pengumuman.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: pengumuman.content }} />
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  deletePengumuman(pengumuman.id);
                }}
                className="btn btn-primary"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleEdit({
                    id: pengumuman.id,
                    title: pengumuman.title,
                    content: pengumuman.content,
                    file: pengumuman.img,
                  });
                  window.my_modal_edit.showModal();
                }}
                className="btn btn-success"
              >
                {" "}
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
      <AddPengumuman handleAddPengumuman={handleAddPengumuman} />
      <EditPengumuman
        idPengumumanEdit={idPengumumanEdit}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default PengumumanList;
