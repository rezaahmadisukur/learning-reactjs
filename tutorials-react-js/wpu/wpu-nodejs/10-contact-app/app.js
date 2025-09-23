import { tulisPertanyaan, simpanContact } from "./contacts.js";

const main = async () => {
  const nama = await tulisPertanyaan("Masukan nama anda : ");
  const email = await tulisPertanyaan("Masukan email anda : ");
  const noHP = await tulisPertanyaan("Masukan No HP anda : ");

  simpanContact(nama, email, noHP);
};

main();

// rl.question("Masukan nama anda : ", (nama) => {
//   rl.question("Masukan nomo hp anda : ", (noHP) => {
//     // Ambil Array json kosong dan dia jadi string
//     const getJsonContact = readFileSync("./data/contacts.json", "utf-8");
//     // Ubah / Parse string ke object / array  menggunakan JSON.parse()
//     const objectJsonContact = JSON.parse(getJsonContact);
//     // Buat inisialisasi Objectnya
//     const contact = { nama, noHP };
//     // Push / Masukan inisialisasi object ke array / object kosongnya
//     objectJsonContact.push(contact);
//     // sebelum di masukan ke json ubah menjadi string lagi menggunakan JSON.stringify()
//     const stringJsonContact = JSON.stringify(objectJsonContact);
//     // Terakhir Simpan data yang sudah di push kembali ke array / object kosong yang awal
//     writeFileSync("./data/contacts.json", stringJsonContact);

//     rl.close();
//   });
// });
