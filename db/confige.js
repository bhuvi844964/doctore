const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://sharmaji232001:bhuvi844964@cluster0.a2txi.mongodb.net/doctor-manage",  {useNewUrlParser: true})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
