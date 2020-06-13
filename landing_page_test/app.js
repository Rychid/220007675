const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));


require('./config/dbconnection');

app.use('/', require('./routes/index'));

const patientList = [
  {
      "Fullname": "Pablo Frimpong Escobar",
      "dob": "25/12/1960",
      "contactNo": "0244258888",
      "resAddress": "14th kente Street",
      "EmergencyNo": "0202000214"
  },
  {
      "Fullname": "Francis Aquah",
      "dob": "25/11/1960",
      "contactNo": "0244258886",
      "resAddress": "14th cantoments Ave",
      "EmergencyNo": "0202001254"
  },
  {
    "Fullname": "Philip Ansah",
    "dob": "11/11/1960",
    "contactNo": "0245874125",
    "resAddress": "7th ayawaso Ave",
    "EmergencyNo": "0265852145"
  },
  {
    "Fullname": "Christian SOlomon",
    "dob": "25/06/1960",
    "contactNo": "0244257776",
    "resAddress": "st. johns Ave",
    "EmergencyNo": "0202111254"
  }
  
]

const port = 4100;
app.listen(port, ()=>{
    console.log("Running on port " + port)
});