
const { Router} = require("express");
const router = Router();

module.exports = router;


/*router.get('/', (req, res) => {
    res.json(People);    
});*/

router.get('/NoVaccine', (req, res) => {
    let NewVaccine = People.filter((Person) => Person.FirstDose === "Y" || Person.SecondDose === "Y");
    res.json(NewVaccine);    
});