const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();

console.log(process.env.MONGODB_DATABASE);
const main = async () => {
  await mongoose.connect(process.env.MONGODB_DATABASE);
  console.log("DB Connected Successfully");
};
main().catch((err) => console.log(err.mmessage));

const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, min: [0, "Wrong price"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discount"],
    max: [50, "Wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
  },
  stock: { type: Number },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = mongoose.model("products", schema);
