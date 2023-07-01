const fs = require("fs");
const path = require("path");
const userData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data.json", "utf-8"))
);
const users = userData.users;

exports.createuser = (req, res) => {
  console.log(req.body);
  const newuser = req.body;
  users.push({ id: users.length + 1, ...newuser });
  res.send(`user Successfully Added with title:${newuser.title}`);
};
exports.getAllusers = (req, res) => {
  res.send(users);
};
exports.getuser = (req, res) => {
  const id = req.params.id;
  const user = users.find((p) => p.id == id);
  res.send(user);
};
exports.replaceuser = (req, res) => {
  const id = req.body.id;
  const userIndex = users.findIndex((p) => p.id == id);
  console.log(userIndex);
  users.splice(userIndex, 1, req.body);
  res.send(202);
};
exports.updateuser = (req, res) => {
  const id = req.body.id;
  const updateuser = req.body;
  const userIndex = users.findIndex((p) => p.id == id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...updateuser });
  res.send(201);
};
exports.deleteuser = (req, res) => {
  const id = req.params.id;
  const userIndex = users.findIndex((p) => p.id == id);
  users.splice(userIndex, 1);
  res.send(200);
};
