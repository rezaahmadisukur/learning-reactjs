const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

/**  Add one data */
// const contact1 = new Contact({
//   nama: "Doddy Ferdiansyah",
//   noHP: "08963246787",
//   email: "doddy@gmail.com"
// });

/**  Save to Collection */
// contact1
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
