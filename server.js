const { default: mongoose } = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then((con) => {
    console.log("sucesssssss");
    // console.log(con.connections);
  })
  .catch((err) => console.log("Somethign Wrong", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const cors = require("cors");
app.use(cors());

const mainSliderImgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // unique: true,
    },
    // imgURL: {
    //   // required: [true, "sadujiadbibadi"],
    // },
    // quantity: Number,
    // date: Date,
    // name: String,
    // imgURL: String,
  },
  {
    strict: false,
  }
);

const MainSliderImg = mongoose.model("mainsliderimgs", mainSliderImgSchema);
const SecMainSliderImg = mongoose.model(
  "secmainsliderImg",
  mainSliderImgSchema,
  "secmainsliderImg"
);

const productsmongose = mongoose.model(
  "secmainsliderImg",
  mainSliderImgSchema,
  "secmainsliderImg"
);

app.get("/getImg", async (req, res) => {
  const ImgData = await MainSliderImg.find();
  res.json(ImgData);
});

app.get("/getSecImg", async (req, res) => {
  const SecImgData = await SecMainSliderImg.find();
  res.json(SecImgData);
});

app.get("/getProducts", async (req, res) => {
  const products = await productsmongose.find();
  res.json(products);
});
