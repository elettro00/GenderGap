const express = require("express");
const router = express.Router();
const db = require("../config/database");


router.get("/getByFilter", async (req, res) => {
  try {
      let query = ``;


    // let [results] = await db.query(query);

    // res.json(results);
    res.json({cicero:"cicero"})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
