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

function App() {
  // const token = sessionStorage.getItem("access_token");
  // if (!token) {
  //   return (
  //     <BrowserRouter>
  //       <ToastContainer autoClose={3000} />
  //       <Routes>
  //         <Route path="/" element={<Login />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // } else {
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
            <Route path="/berita" element={<Berita />} />
            <Route path="/dokumen" element={<Dokumen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// }

export default App;
