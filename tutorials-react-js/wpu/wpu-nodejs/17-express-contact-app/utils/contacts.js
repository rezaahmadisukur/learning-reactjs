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

//
export const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};
