// Core Module
// File System
// const fs = require("node:fs");
// import { readFileSync } from "fs";
// const { readFileSync, readFile } = fs;

// Menuliskan string ke file secara synchronous
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous");
// } catch (err) {
//   console.log(err);
// }

// Menliskan string ke file secara Asynchronous
// fs.writeFile("data/test.txt", "Hello World Secara Asynchronous", (err) => {
//   console.log(err);
// });

// const data = readFileSync("test.txt", "utf-8");
// console.log(data);
// readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

import readline from "node:readline";
import fs from "node:fs";
const { createInterface } = readline;
const { writeFileSync, readFileSync } = fs;
// Readline
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukan nama anda : ", (nama) => {
  rl.question("Masukan nomo hp anda : ", (noHP) => {
    // Ambil Array json kosong dan dia jadi string
    const getJsonContact = readFileSync("./data/contacts.json", "utf-8");
    // Ubah / Parse string ke object / array  menggunakan JSON.parse()
    const objectJsonContact = JSON.parse(getJsonContact);
    // Buat inisialisasi Objectnya
    const contact = { nama, noHP };
    // Push / Masukan inisialisasi object ke array / object kosongnya
    objectJsonContact.push(contact);
    // sebelum di masukan ke json ubah menjadi string lagi menggunakan JSON.stringify()
    const stringJsonContact = JSON.stringify(objectJsonContact);
    // Terakhir Simpan data yang sudah di push kembali ke array / object kosong yang awal
    writeFileSync("./data/contacts.json", stringJsonContact);

    rl.close();
  });
});
