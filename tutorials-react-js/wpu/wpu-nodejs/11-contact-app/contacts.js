import fs from "node:fs";
import chalk from "chalk";
import validator from "validator";

// Membuat Folder Data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contact.json jika bleum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

export const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const getJsonContact = fs.readFileSync("./data/contacts.json", "utf-8");
  const objectJsonContact = JSON.parse(getJsonContact);

  // Cek Duplikat
  const duplikat = objectJsonContact.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    return false;
  }

  // Cek Email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      return false;
    }
  }

  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
    return false;
  }

  objectJsonContact.push(contact);

  const stringJsonContact = JSON.stringify(objectJsonContact);
  fs.writeFileSync("./data/contacts.json", stringJsonContact);

  console.log("Data berhasil di tambahkan ! ");
};
