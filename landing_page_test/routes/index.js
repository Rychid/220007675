const express = require('express');
const router = express.Router();

const User = require('../model/User')
const material = require('../model/User')


//Home route
router.get('/', (req, res)=>{
    res.render('home')
});

// Registration route
router.get('/register', (req, res)=>{
    res.render('registration');
});

//Post route
router.post('/register', (req, res)=>{
    const registrationData = {
        patientID: req.body.patientID,
        userName: req.body.userName,
        password: req.body.password,
    }
    User.findOne({patientID: registrationData.patientID}).then((user)=>{
        if(user){
            console.log('Sorry there is a student with that ID please check if your ID is correct');
            return res.redirect('/register')
        } else {
            User.create(registrationData).then((newUser)=>{
                res.redirect('/')
            })
        }
    })
});

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
    },
    
  ]

  router.get('/patients', async(req, res)=>{
    const patients = await patient.find({}).toArray();
      console.table(patients)
      res.render('patients', {
        patients
    })
  });

router.get('/materials', (req, res)=>{
    res.render('materials')
})

  router.post('/material/add', async (req, res) => {
    const material = new material({
        materialCode: req.body.materialCode,
        materialName: req.body.materialName,
        materialUnitPrice: req.body.materialUnitPrice,
        matarialStockLevel: req.body.matarialStockLevel,

    })
    try {
      const newMaterial = await material.save()
      res.status(201).json(newMaterial)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
    console.log(req.body);
    res.json(req.body);
  })
  
  // Updating One
  router.put('/material/update/:id', getMaterial, async (req, res) => {
    if (req.body.name != null) {
      res.material.materialName = req.body.materialName
    }
    if (req.body.materialUnitPrice != null) {
      res.material.materialUnitPrice = req.body.materialUnitPrice
    }
    if (req.body.matarialStockLevel != null) {
      res.material.matarialStockLevel = req.body.matarialStockLevel
    }
    try {
      const updatedMaterial = await res.material.save()
      res.json(updatedMaterial)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
    console.log(req.body);
    res.json(req.body);
  })
  
  // Deleting One
  router.delete('/material/detele/:id', getMaterial, async (req, res) => {
    try {
      await res.material.remove()
      res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
    
  })
  
  async function getMaterial(req, res, next) {
    let material
    try {
      material = await material.findById(req.params.id)
      if (material == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.material = material
    next()
  }
  

module.exports = router;
