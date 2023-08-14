import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Beranda from './pages/Beranda';
import { Berita } from './pages/Berita';
import { Pengumuman } from './pages/Pengumuman';
import { Profile } from './pages/Profile';
import Footer from './components/footer/Footer';
import Kinerja from './pages/Kinerja';
import Sakib from './pages/Sakib';
import PPID from './pages/PPID';
import Galeri from './pages/Galeri';

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
          <Route path="/kinerja" element={<Kinerja />} />
          <Route path="/sakib" element={<Sakib />} />
          <Route path="/ppid" element={<PPID />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
