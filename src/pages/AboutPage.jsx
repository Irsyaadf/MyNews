import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Tentang Kami</h1>
          <img src='https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D' className='w-full object-cover h-auto'/>
          <p className="text-lg text-gray-600 text-center mb-12">
            MyNews menyajikan informasi aktual dan terverifikasi untuk masyarakat Indonesia.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Misi Kami</h2>
            <p className="text-gray-600 mb-4">
              Sejak 2025, kami berkomitmen menyajikan berita yang akurat, berimbang, dan tepat waktu 
              untuk pembaca di seluruh Indonesia.
            </p>
            <p className="text-gray-600">
              Kami percaya informasi berkualitas adalah hak setiap warga negara dan fondasi 
              bagi terciptanya masyarakat yang demokratis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nilai-Nilai</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">• Transparansi dalam pemberitaan</li>
                <li className="text-gray-600">• Akurasi informasi</li>
                <li className="text-gray-600">• Relevansi dengan kebutuhan masyarakat</li>
                <li className="text-gray-600">• Profesionalisme jurnalistik</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Kontak</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">Email: mynews@beritaterbaru.id</li>
                <li className="text-gray-600">Telepon: (021) 1234-5678</li>
                <li className="text-gray-600">Alamat: Jl. Merdeka No. 123, Jakarta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;