const express = require('express');
const app = express();
const port = 3000;
const Router = require('./router')

app.use('view engine','ejs')
app.use(Router);


app.listen(3000,()=>{
    console.log(`Server on ${port} successully`)
});




