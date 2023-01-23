import React from 'react';
import Accordion from '../components/Accordion';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="py-28 flex justify-center  bg-neutral-900">
        <div className="flex flex-col   w-2/3">
          <h1 className="text-6xl font-semibold text-white mb-16">hadir_in</h1>
          <h2 className="max-w-xl text-2xl mb-3 text-white  ">
            Layanan kami dapat menyimpan data peserta yang hadir pada acara yang
            anda buat.
          </h2>
          <h2 className="max-w-xl text-2xl text-white">
            Daftarkan akun segera untuk dapat menggunakan layanan kami secara
            gratis.
          </h2>
        </div>
      </main>
      <Accordion/>
    </div>
  );
};

export default Home;
