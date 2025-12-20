import mongoose from "mongoose";

const connectionDB = () => {
  try {
    mongoose.connect(process.env.DB_SERVER);

    const db = mongoose.connection;
    db.on("error", (error) => {
      console.log(error);
    });

    db.once("open", () => {
      console.log("MongoDB Connected ....");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectionDB;
