import readline from "node:readline";
import fs from "node:fs";
const { createInterface } = readline;

// Readline
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

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

export const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (dataInput) => {
      resolve(dataInput);
    });
  });
};

export const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const getJsonContact = fs.readFileSync("./data/contacts.json", "utf-8");
  const objectJsonContact = JSON.parse(getJsonContact);

  objectJsonContact.push(contact);

  const stringJsonContact = JSON.stringify(objectJsonContact);
  fs.writeFileSync("./data/contacts.json", stringJsonContact);

  console.log("Data berhasil di tambahkan ! ");
  rl.close();
};

// module.exports = {
//   tulisPertanyaan,
//   simpanContact
// };
