var express = require('express')
var app = express();
var hbs =require('hbs');

app.set('view engine', 'hbs')

var anh = require('path').join(__dirname,'/anh');
app.use(express.static(anh))

app.get('/', (req,res)=>{

   res.render('index')
})

app.get('/student', (req,res)=>{

    res.render('index1')

})

app.listen(5000);
console.log('Node.js web server at port 5000 is running..')