// Mongoose
const mongoose = require("mongoose");

// Conectar mongoose con MongoDB
db_uri = "mongodb+srv://ericlucerogonzalez:mydatabase2019*mongodb@cluster0-j4waz.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(db_uri, { useNewUrlParser: true }, err => {
  if (!err) {
    console.log("Conexion exitosa!!");
  }
});
