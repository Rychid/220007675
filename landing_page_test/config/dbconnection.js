const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/GoodhealthDb', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log(`database connected `);})
.catch((error)=>{console.log("There was an error connecting - " + error.message)});
