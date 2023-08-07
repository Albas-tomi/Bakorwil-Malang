import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Beranda from './pages/Beranda';
import { Berita } from './pages/Berita';
import { Pengumuman } from './pages/Pengumuman';
import { Profile } from './pages/Profile';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
