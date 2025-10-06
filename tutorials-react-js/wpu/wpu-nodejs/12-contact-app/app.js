const yargs = require("yargs");
const {
  simpanContact,
  listContact,
  detailContact,
  deleteContact
} = require("./contacts");

yargs
  .command({
    command: "add",
    desc: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string"
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string"
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string"
      }
    },
    handler: (argv) => {
      simpanContact(argv.nama, argv.email, argv.noHP);
    }
  })
  .demandCommand();

// Menampilkan semua daftar nama & no hp contqct
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler: () => {
    listContact();
  }
});

// Menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menampilkan detail contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    detailContact(argv.nama);
  }
});

// Menghapus Kontak berdasarkan Nama
yargs.command({
  command: "delete",
  describe: "Menghapus contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    deleteContact(argv.nama);
  }
});

yargs.parse();
