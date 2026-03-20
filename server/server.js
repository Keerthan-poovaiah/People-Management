const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Person = require("./models/Person");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/peopleDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/person", async (req, res) => {
  const people = await Person.find();
  res.json(people);
});

app.post("/person", async (req, res) => {
  const newPerson = new Person(req.body);
  const savedPerson = await newPerson.save();
  res.json(savedPerson);
});

app.put("/person/:id", async (req, res) => {
  const updatedPerson = await Person.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedPerson);
});

app.delete("/person/:id", async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});