// Core Module tanpa './'
// const fs = require('fs');
// Local Module karena ada './' & di simpan di bawah core module
// const cetakNama = require("./coba.js");
// const PI = require("./coba.js");
// Third Party Module / npm module / node_modules & di simpan dibawah local module
// const moment = require('moment')

const coba = require("./coba.js");
const { cetakNama, PI, mahasiswa, Orang } = coba;
// console.log(coba);

console.log(cetakNama("Sandhika"));
console.log(PI);
console.log(mahasiswa.cetakMhs());
console.log(new Orang());
