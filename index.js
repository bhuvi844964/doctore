const express = require('express');
require("./db/confige")
const fileUpload = require("express-fileupload")
const route = require("./routes/route")
const app = express()


app.use(fileUpload({useTempFiles : true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route); 


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


