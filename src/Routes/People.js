const { Router} = require("express");
const router = Router();

module.exports = router;

const People =[
    {
    Id: "1",  
    FirstName : "Anderson ",
    LastName : "Llano",
    License: "1097394765",
    Address: "cra 32a No 89a-11",
    Phone: "3136313145",
    Email: "llano360@hotmail.com",
    Gender: "M",
    Age : "31",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "Y",
    SecondDose: "N",
    Status: "Estudio",
 },
 {
    Id: "2",
    FirstName : "Juan Carlos",
    LastName : "Bermudez",
    License: "41987543",
    Address: "cra 32 No 34-11",
    Phone: "3123457689",
    Email: "jcarbe@gmail.com",
    Gender: "M",
    Age : "39",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "Y",
    SecondDose: "N",
    Status: "Aprobado",
},
{
    Id: "3",
    FirstName : "Camila",
    LastName : "Borja",
    License: "1091794764",
    Address: "calle 11 No 12-32",
    Phone: "3112347645",
    Email: "Camilaborja@gmail.com",
    Gender: "F",
    Age : "23",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "Y",
    SecondDose: "N",
    Status: "Estudio",
},
{
    Id: "4",
    FirstName : "Julian",
    LastName : "Llano",
    License: "1091394098",
    Address: "cra 10 # 23-21",
    Phone: "3113665439",
    Email: "jllano@gmail.com",
    Gender: "M",
    Age : "30",
    DateConfirmationFirstVaccine: " 7/05/2021",
    DateConfirmationSecondVaccine: " 30/05/2021",
    FirstDose: "N",
    SecondDose: "N",
    Status: "Estudio",
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

router.get('/Vaccine', (req, res) => {
    let NewVaccine = People.filter((Person) => Person.FirstDose === "Y" || Person.SecondDose === "Y");
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

