const mongoose = require('mongoose')
var Float = require('mongoose-float').loadType(mongoose);

const PatientSchema = new mongoose.Schema({
    Firstname: { type: String, required: true },
    Lastname: { type: String, required: true },
    dob: {type: Date, required: true},
    contactNo: { type: String },
    resAddress: String,
    EmergencyNo: String
});
const paymentSchema = new mongoose.Schema({
    Fullname: { type: String, required: true },
    dob: {type: Date, required: true},
    contactNo: { type: String },
    resAddress: String,
    EmergencyNo: String
});

const materialSchema = new mongoose.Schema({
    materialCode: String,
    materialName: String,
    materialUnitPrice: Float,
    matarialStockLevel: Float
})

// Model for the schema
const patient = mongoose.model('patient', PatientSchema);
const payment = mongoose.model('payment', paymentSchema);

module.export = mongoose.model('materials', materialSchema);
module.exports = patient;
module.exports = payment;