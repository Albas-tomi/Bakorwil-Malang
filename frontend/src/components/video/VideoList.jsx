import React, { useEffect, useState } from "react";
import AddVideo from "./AddVideo";
import { toast } from "react-toastify";
import ConfirmDeleteVideo from "./ConfirmDeleteVideo";
import EditVideo from "./EditVideo";
import { deleteVideo, getVideo } from "./apiVideo";
import ReactPaginate from "react-paginate";

const VideoList = () => {
  const [dataVideo, setDataVideo] = useState([]);
  const [pickOfVideoEdit, setpickOfVideoEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const VideoPerPage = 10;

  const pageVisited = pageNumber * VideoPerPage;
  const pageCount = dataVideo.length / VideoPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  useEffect(() => {
    getVideo().then((data) => {
      setDataVideo(data);
    });
  }, []);

  const handleAddVideo = (newVideo) => {
    setDataVideo([...dataVideo, newVideo]);
  };

  const deleteVideoId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteVideo(id, setDataVideo, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditVideo = (VideoData) => {
    setpickOfVideoEdit(VideoData);
    setDataVideo((prevData) =>
      prevData.map((Video) => (Video.id === VideoData.id ? VideoData : Video))
    );
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
              <th className="text-center">Link</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataVideo
              ?.slice(0, dataVideo.length)
              .slice(pageVisited, pageVisited + VideoPerPage)
              .reverse()
              .map((Video, idx) => (
                <tr key={Video.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>{Video.judul}</td>
                  <td>
                    <iframe
                      title={Video.judul}
                      width="240"
                      height="150"
                      src={Video.link} // Use the proper video URL here
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteVideo.showModal();
                        setPickIdDelete(Video.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditVideo({
                          id: Video.id,
                          judul: Video.judul,
                          link: Video.link,
                        });
                        window.my_modal_editVideo.showModal();
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
            pageCount={Math.ceil(dataVideo.length / VideoPerPage)}
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
      <AddVideo handleAddVideo={handleAddVideo} />
      <ConfirmDeleteVideo
        deleteVideoId={deleteVideoId}
        pickIdDelete={pickIdDelete}
      />
      <EditVideo
        pickOfVideoEdit={pickOfVideoEdit}
        handleEditVideo={handleEditVideo}
      />
    </div>
  );
};

export default VideoList;
