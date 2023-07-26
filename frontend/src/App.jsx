import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";
import StrukturOrganisasi from "./components/struktur/StrukturOrganisasi";
import Pengumuman from "./components/pages/Pengumuman";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Berita from "./components/pages/Berita";

function App() {
  const token = sessionStorage.getItem("access_token");

  // if (!token) {
  //   return (
  //     <BrowserRouter>
  //       <ToastContainer autoClose={3000} />
  //       <Routes>
  //         <Route path="/login" element={<Login />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // } else {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route element={<NavigationLayout />}>
            <Route path="/pengumuman" element={<Pengumuman />} />
            <Route path="/login" element={<Login />} />
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
// }

export default App;
