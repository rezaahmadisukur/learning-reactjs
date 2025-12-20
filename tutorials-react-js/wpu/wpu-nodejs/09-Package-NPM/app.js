const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("reza@ubsi.com"));
// console.log(validator.isMobilePhone("0896345678", "id-ID"));
// console.log(validator.isNumeric("0896345678"));
// console.log(chalk.black.bgBlue.italic("Hello World"));
const nama = "Abdul";
const pesan = chalk`{yellow lorem} ipsum {red dolor}, {green.italic Nama} saya ${nama}`;
console.log(pesan);
