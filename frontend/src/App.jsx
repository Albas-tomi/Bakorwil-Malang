import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EditProduct from "./components/pengumuman/EditProduct";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";
import Berita from "./components/berita/Berita";
import StrukturOrganisasi from "./components/struktur/StrukturOrganisasi";
import Pengumuman from "./components/pages/Pengumuman";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={4000} />
        <Routes>
          <Route element={<NavigationLayout />}>
            <Route path="/pengumuman" element={<Pengumuman />} />
            <Route path="/berita" element={<Berita />} />
            <Route
              path="/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
