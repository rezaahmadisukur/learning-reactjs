import fs from "node:fs";
import chalk from "chalk";
import validator from "validator";
import { json } from "node:stream/consumers";

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

const loadContact = () => {
  const getJsonContact = fs.readFileSync("./data/contacts.json", "utf-8");
  const objectJsonContact = JSON.parse(getJsonContact);
  return objectJsonContact;
};

export const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  // const getJsonContact = fs.readFileSync("./data/contacts.json", "utf-8");
  // const objectJsonContact = JSON.parse(getJsonContact);
  const objectJsonContact = loadContact();

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

  console.log(chalk.green.inverse.bold("Data berhasil di tambahkan ! "));
};

export const listContact = () => {
  const objectJsonContact = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar Kontak ! "));
  objectJsonContact.forEach((contact, i) => {
    console.log(`${i + 1}.  ${contact.nama} - ${contact.noHP}`);
  });
};

export const detailContact = (nama) => {
  const objectJsonContact = loadContact();

  const contact = objectJsonContact.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHP);
  if (contact.email) {
    console.log(contact.email);
  }
};

export const deleteContact = (nama) => {
  const objectJsonContact = loadContact();
  const newContacts = objectJsonContact.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (objectJsonContact.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }
  fs.writeFileSync("./data/contacts.json", JSON.stringify(newContacts));

  console.log(
    chalk.green.inverse.bold(`Data contact ${nama} berhasil dihapus!`)
  );
};
