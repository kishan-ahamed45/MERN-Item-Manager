require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Model
const Item = mongoose.model("Item", {
  name: String,
  quantity: Number,
  price: Number
});

// Routes
app.post("/api/items", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE ITEM
app.delete("/api/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: "Item deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));