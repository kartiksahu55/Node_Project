// const fs = require("fs");

const model = require("../model/product");
const Product = model.Product;

console.log();

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product
    .save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};
exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(401).json(err.message);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(202).json(doc);
  } catch (err) {
    res.status(402).json(err.message);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(204).json(doc);
  } catch (err) {
    res.status(403).json(err.message);
  }
};
