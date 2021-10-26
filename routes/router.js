const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/blogs", (req, res) => {
  res.render("blogs");
});
router.get("/service", (req, res) => {
  res.render("service");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact", async (req, res) => {
  const { name, email, phone, address, password } = req.body;
  if (!name || !email || !phone || !address || !password) {
    res.status(401).json({ error: "plz.. fill the field properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email-Id already present" });
    }
    const userData = new User({ name, email, phone, address, password });
    await userData.save();

    res.status(201).render("index");
    // res.status(201).json({ message: "User created successfully..." });
  } catch (error) {
    console.log(error);
    console.log("failed to Register!!");
  }
});

module.exports = router;
