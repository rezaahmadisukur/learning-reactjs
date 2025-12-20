const mongoose = require("mongoose");

/** Make Schema Collection */
const Contact = mongoose.model("Contact", {
  nama: {
    type: String,
    required: true
  },
  noHP: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

module.exports = Contact;
