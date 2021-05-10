const { Router, json } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Affiliate = require("../Affiliates/Affiliate");

/*router.get("/", (req, res) => {
    Affiliate.find()
    .exec()
    .then((Affiliate) => res.status(200).json(Affiliate))
    .catch((error) => res.status(500).json({ error}))
});*/


router.post("/", (req, res) => {
    const Affiliate = new Affiliates({
        _Id: new mongoose.Types.ObjectId(),
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        License: req.body.License,
        Email: req.body.Email,
        Gender: req.body.Gender,
        Age : req.body.Age,
        DateConfirmationFirstVaccine: req.body.DateConfirmationFirstVaccine,
        FirstDose: req.body.FirstDose,
        DateConfirmationSecondVaccine: req.body.DateConfirmationSecondVaccine,
        SecondDose: req.body.SecondDose,
    });

    Affiliate.save()
    .then((result) => console.log("result:", result))
    .catch((error) => console.log("error:", error)),

    res.status(201).json({
        state: "ok",
        message: "Affiliate was created",
        createdAffiliate: Affiliate,
    })
});

