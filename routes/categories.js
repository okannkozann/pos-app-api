const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

//!get categories
router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! post category
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Kategori basariyla eklendi.");
  } catch (error) {
    res.status(500).json(error);
  }
});

//!put categories
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("Kategori basariyla guncellendi");
  } catch (error) {
    res.status(500).json(error);
  }
});

//!delete categories

router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("Kategori basariyla silindi");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
