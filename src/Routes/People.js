const { Router} = require("express");
const router = Router();

module.exports = router;

const People =[
    {
    Id: "1",  
    FirstName : "Anderson ",
    LastName : "Llano",
    License: "1097394765",
    Email: "llano360@hotmail.com",
    Gender: "M",
    Age : "31",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "Y",
    SecondDose: "Y",
 },
 {
    Id: "2",
    FirstName : "Juan Carlos",
    LastName : "Bermudez",
    License: "41987543",
    Email: "jcarbe@gmail.com",
    Gender: "M",
    Age : "39",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "N",
    SecondDose: "N",
},
{
    Id: "3",
    FirstName : "Camila",
    LastName : "Borja",
    License: "1091794764",
    Email: "Camilaborja@gmail.com",
    Gender: "F",
    Age : "23",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "Y",
    SecondDose: "N",
},
{
    Id: "4",
    FirstName : "Julian",
    LastName : "Llano",
    License: "1091394098",
    Email: "jllano@gmail.com",
    Gender: "M",
    Age : "30",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "N",
    SecondDose: "Y",
},
];

router.get('/', (req, res) => {
    res.json(People);    
});

router.post( "/", (req, res) => {
    People.push(req.body);
    res.status(201).json({ state: "ok"});
});

router.get('/male', (req, res) => {
    let NewPeopleMale = People.filter((Person) => Person.Gender === "M");
    res.json(NewPeopleMale);    
});

router.get('/female', (req, res) => {
    let NewPeopleFemale = People.filter((Person) => Person.Gender === "F");
    res.json(NewPeopleFemale);    
});

router.get('/NoVaccine', (req, res) => {
    let NewVaccine = People.filter((Person) => Person.FirstDose === "N" || Person.SecondDose === "N");
    res.json(NewVaccine);    
});

router.get("/:Id", (req, res) => {
    let newPerson = People.find((Person) => Person.Id === req.params.Id);
    if (newPerson === undefined){
        res.status(404).json({ error: "Not Found"});
    }else{
        res.status(200).json({newPerson});
    }
});

