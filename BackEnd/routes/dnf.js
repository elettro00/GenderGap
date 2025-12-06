const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/getDNFdata", async (req, res) => {
  try {

    console.log(req.query);

    let query =``
     

    const [results] = await db.query(query);

    res.json({results});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
