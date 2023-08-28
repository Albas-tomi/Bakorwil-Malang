import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Pengumuman from "./pages/Pengumuman";
import Berita from "./pages/Berita";
import Dokumen from "./pages/Dokumen";
import PrivateRoute from "./PrivateRoute";
import Carrousel from "./pages/Carrousel";
import Bakorwil from "./pages/Bakorwil";
import WilayahKerja from "./pages/WilayahKerja";
import Video from "./pages/Video";
import Program from "./pages/Program";
import Galeri from "./pages/Galeri";
import NotFound from "./pages/NotFound";
import Pejabat from "./pages/Pejabat";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            element={
              <PrivateRoute>
                <NavigationLayout />
              </PrivateRoute>
            }
          >
            <Route path="/pengumuman" element={<Pengumuman />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/dokumen" element={<Dokumen />} />
            <Route path="/carrousel" element={<Carrousel />} />
            <Route path="/bakorwil" element={<Bakorwil />} />
            <Route path="/wilayah-kerja" element={<WilayahKerja />} />
            <Route path="/video" element={<Video />} />
            <Route path="/program" element={<Program />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/struktur-pejabat" element={<Pejabat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
