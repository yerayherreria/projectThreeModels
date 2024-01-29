const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const discRoutes = require("./routes/disc");
const artistRoutes = require("./routes/artist");
const songRoutes = require("./routes/song");

const mongoose = require("mongoose");
mongoose.set("strictQuery",false);

async function main() {
    await mongoose.connect("mongodb+srv://yerayherreria:yerayherreria@cluster0.hce5dpg.mongodb.net/");
    console.log("Conectado")
  }
  
main().catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))
app.use('/disc', discRoutes);
app.use('/artist', artistRoutes);
app.use('/song', songRoutes);

app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000");
});