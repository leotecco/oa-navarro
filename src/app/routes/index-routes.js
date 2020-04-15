const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
  const file = path.join(
    __dirname,
    `./../../../logs/${Date.now()}-${parseInt(Math.random() * 1000000)}.json`
  );

  fs.writeFile(
    file,
    JSON.stringify({
      method: req.method,
      path: req.path,
      params: req.params,
      body: req.body,
      query: req.query,
      date: Date.now(),
    }),
    () => {
      next();
    }
  );
});

module.exports = router;