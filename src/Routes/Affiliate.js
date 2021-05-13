const { Router, json } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Affiliate = require("../Models/Affiliate");

router.get("/", (req, res) => {
    Affiliate.find()
    .exec()
    .then((Affiliate) => res.status(200).json(Affiliate))
    .catch((error) => res.status(500).json({ error}))
});

router.get("/:License", (req, res) => {
    const License = req.params.License;
    Affiliate.find({ License : License})
    .exec()
    .then((Affiliate) => res.status(200).json(Affiliate))
    .catch((error) => res.status(500).json({ error}))
});


router.post("/", (req, res) => {
    const Affiliates = new Affiliate({
        _Id: new mongoose.Types.ObjectId(),
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        License: req.body.License,
        Address: req.body.Address,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Gender: req.body.Gender,
        Age : req.body.Age,
        DateConfirmationFirstVaccine: req.body.DateConfirmationFirstVaccine,
        FirstDose: req.body.FirstDose,
        DateConfirmationSecondVaccine: req.body.DateConfirmationSecondVaccine,
        SecondDose: req.body.SecondDose,
    });

    Affiliates.save()
    .then((result) => console.log("result:", result))
    .catch((error) => console.log("error:", error)),

    res.status(201).json({
        state: "ok",
        message: "Affiliate was created",
        createdAffiliate: Affiliate,
    })
});

router.patch("/:License", (req, res) => {
    const License = req.params.License;

    Affiliate.updateOne(
        {
            License: License,
        },
        {
            $set: {
                //FirstName : req.body.FirstName,
                //LastName : req.body.LastName,
                //License: req.body.License,
                //Address: req.body.Address,
                //Phone: req.body.Phone,
                //Email: req.body.Email,
                //Gender: req.body.Gender,
                //Age : req.body.Age,
                DateConfirmationFirstVaccine: req.body.DateConfirmationFirstVaccine,
                FirstDose: req.body.FirstDose,
                //DateConfirmationSecondVaccine: req.body.DateConfirmationSecondVaccine,
                //SecondDose: req.body.SecondDose, 
            },
        }
    )
    .exec()
    .then((result) => res.status(200).json({ result}))
    .catch((error) => res.status(500).json({ error}));
})

router.delete("/:License", (req, res) => {
    const License = req.params.License;
    Affiliate.remove({ License: License})
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ error}));
})

module.exports = router;
