function cetakNama(nama) {
  return `Hi, ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Doddy",
  umur: 20,
  cetakMhs() {
    return `Halo, nama ${this.nama}, ${this.umur} tahun`;
  }
};

class Orang {
  constructor() {
    console.log("Object orang telah dibuat!!");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang
// };

module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang
};
