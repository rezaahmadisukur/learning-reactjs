import fs from "node:fs";

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

// get all data in json contacts
export const loadContact = () => {
  const getJsonContact = fs.readFileSync("./data/contacts.json", "utf-8");
  const objectJsonContact = JSON.parse(getJsonContact);
  return objectJsonContact;
};

// Mencari Contact By Name
export const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};

// Menimpa file contacts.json dengan data baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

// Menambahkan data contact baru
export const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// Check nana yang duplikat
export const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
};
