import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";
import pengumumanRoute from "./routes/pengumumanRoute.js";
import beritaRoute from "./routes/beritaRoute.js";
import galeriRoute from "./routes/galeriRoute.js";
import dokumenRoute from "./routes/dokumenRoute.js";
import wilayahkerjaRoute from "./routes/wilayahkerjaRoute.js";
import bakorwilRoute from "./routes/bakorwilRoute.js";
import videoRoute from "./routes/videoRoute.js";
import ppidRoute from "./routes/ppidRoute.js";
import programRoute from "./routes/programRoute.js";
import sakibRoute from "./routes/sakibRoute.js";
import carrouselRoute from "./routes/carrouselRoute.js";
import fotoRoute from "./routes/fotoRoute.js";
import usersRoute from "./routes/usersRoute.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));

// PENGUMUMAN
app.use(pengumumanRoute);
// BERITA
app.use(beritaRoute);
// GALERI
app.use(galeriRoute);
// DOKUMEN
app.use(dokumenRoute);
// WILAYAH KERJA
app.use(wilayahkerjaRoute);
// BAKORWIL
app.use(bakorwilRoute);
// VIDEO
app.use(videoRoute);
// PPID
app.use(ppidRoute);
// PROGRAM
app.use(programRoute);
// SAKIB
app.use(sakibRoute);
// CARROUSEL
app.use(carrouselRoute);
// FOTO
app.use(fotoRoute);
// USERS
app.use(usersRoute);

app.listen(PORT, () =>
  console.log(`the server is running on port ${PORT}....`)
);
