const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const discRoutes = require("./routes/disc");
const artistRoutes = require("./routes/artist");
const songRoutes = require("./routes/song");
const userRoutes = require("./routes/user");
const loginRouter = require("./routes/login")
const mongoose = require("mongoose");
mongoose.set("strictQuery",false);
require('dotenv').config()
//SECRET=d82bc92f35b5d5ee6d751dec2b73da2681546bcf626acd75b32a101710d431a4
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
app.use('/user',userRoutes)
app.use('/auth',loginRouter)

app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000");
});