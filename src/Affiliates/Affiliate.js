const mongoose = require("mongoose");

const affiliateSchema = mongoose.Schema({
    _Id: mongoose.Schema.Types.ObjectId,
    FirstName : String,
    LastName : String,
    License: String,
    Email: String,
    Gender: String,
    Age : Number,
    DateConfirmationFirstVaccine: Date,
    DateConfirmationSecondVaccine: Date,
    FirstDose: String,
    SecondDose: String,
});

module.exports = mongoose.model("Affiliate", affiliateSchema);