const { Router, json } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Affiliate = require("../Affiliates/Affiliate");

router.get("/", (req, res) => {
    res.end("laksaksfjk f"),
});

