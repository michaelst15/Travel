import DanauToba from '../components/image/DanauToba.jpg';
import DanauToba2 from '../components/image/wisata-danau-toba-2.jpg';
import DanauToba3 from '../components/image/wisata-danau-toba-3.jpg';
import PantaiKuta from '../components/image/pantai-kuta.jpg';
import PantaiKuta2 from '../components/image/wisata-kuta-bali-2.jpg';
import PantaiKuta3 from '../components/image/wisata-kuta-bali-3.jpg';
import RajaAmpat from '../components/image/RajaAmpat.jpg';
import RajaAmpat2 from '../components/image/wisata-raja-ampat-2.jpeg';
import RajaAmpat3 from '../components/image/wisata-raja-ampat-3.jpg';

const dataWisata = [
    {
          'image': [[DanauToba],[DanauToba2], [DanauToba3]],
          'sale': 222,
          'title': "Danau Toba",
          'description': "Keindahan alam Danau Toba seringkali menjadi ikon pariwisata Indonesia. Danau Toba juga telah ditetapkan sebagai Unesco Global Geopark dalam sidang ke-209 Dewan Eksekutif UNESCO di Paris, Prancis pada 2 Juli 2020 lalu.",
    },
    {
        'image': [[PantaiKuta],[PantaiKuta2], [PantaiKuta3]],
        'sale': 178,
        'title': "Pantai Kuta Bali",
        'description': "Daya tarik utama dari pantai Kuta sebagai destinasi liburan di Bali terdapat pada pasir putih, pemandangan sunset, garis pesisir sangat panjang, serta sarana pariwisata sangat lengkap. Anda akan dengan mudah menemukan hotel, restoran, dan fasilitas pariwisata lainnya di area dekat pantai Kuta."
    },
    {
         'image': [[RajaAmpat],[RajaAmpat2],[RajaAmpat3]],
         'sale': 155,
         'title': 'RajaAmpat',
         'description': `Raja Ampat merupakan sebuah kabupaten di Provinsi Papu Barat. Kabupaten ini memiliki empat pulau besar yaitu Pulau Waigeo, Batanta, Salawati, dan Misool. Selain itu ada juga 1.847 pulau kecil yang ada di Raja Ampat.
                   Artikel ini telah tayang di Katadata.co.id dengan judul "Raja Ampat, Destinasi Wisata Favorit yang Memiliki Banyak Keindahan"
                   `
    }
] 

export default dataWisata;