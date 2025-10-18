const { MongoClient, ObjectID } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpu";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((error, client) => {
  if (error) {
    return console.log("Failed Connection!!");
  }

  // Select Database
  const db = client.db(dbName);

  // Add Data to Collection Mahasiswa
  // db.collection("mahasiswa").insertOne(
  //   {
  //     nama: "Marwa",
  //     email: "marwa@gmail.com"
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Failed add data !!");
  //     }
  //     console.log(result);
  //   }
  // );

  // Add Many data to Collection
  // db.collection("mahasiswa").insertMany(
  //   [
  //     {
  //       nama: "Erik",
  //       email: "erik@ubsi.co.id"
  //     },
  //     {
  //       nama: "Avip",
  //       email: "avip@yahoo.com"
  //     }
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Failed add data !!");
  //     }
  //     console.log(result);
  //   }
  // );

  // Show all data in collection
  // console.log(
  //   db
  //     .collection("mahasiswa")
  //     .find()
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // Show data by criteria in collection
  // console.log(
  //   db
  //     .collection("mahasiswa")
  //     .find({ _id: ObjectID("68f355313f0ee22960b99b71") })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  /** Update data by ID in Collection */
  // const updatePrmise = db.collection("mahasiswa").updateOne(
  //   {
  //     _id: ObjectID("68f355313f0ee22960b99b71")
  //   },
  //   {
  //     $set: {
  //       email: "avip@yahoo.com"
  //     }
  //   }
  // );

  // updatePrmise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  /** Update Many Data */
  // db.collection("mahasiswa").updateMany(
  //   {
  //     nama: "Erik"
  //   },
  //   {
  //     $set: {
  //       nama: "Erik Doank"
  //     }
  //   }
  // );

  /** Delete one data */
  // db.collection("mahasiswa")
  //   .deleteOne({
  //     _id: ObjectID("68f355313f0ee22960b99b71")
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  /** Delete Many Data */
  db.collection("mahasiswa")
    .deleteMany({
      nama: "Erik Doank"
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
