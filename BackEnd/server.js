const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const req = require('express/lib/request');
const res = require('express/lib/response');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Kelan Was here!')
})

    const databaseURL= 'mongodb+srv://admin:admin@cluster0.jc4zq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    mongoose.connect(databaseURL, {useNewUrlParser: true});
    const Schema = mongoose.Schema;
    let houseSchema = new Schema(

            {
            _id:String,
            date:String,
            ownedOrLeased:String,
            parkingSpaces:String,
            status: String,
            type: String,
            adaAccessible:String,
            ansiUsable:String
              }
    );

    var houseModel = mongoose.model("house", houseSchema)

app.get('/api/houses', (req, res)=>{

    houseModel.find((err,data)=>{
        res.json(data);
    })
})


app.get('/api/houses/:id', (req,res)=>{
    console.log(req.params.id);

    houseModel.findById(req.params.id, (err,data) =>{
        res.json(data);
    })
})

app.delete('/api/houses/:id', (req,res)=>{
    console.log("Delete Listing: " + req.params.id);

    houseModel.findByIdAndDelete(req.params.id,(err, data)=>{
    res.send(data);
    })
})



app.put('/api/houses/:id', (req,res)=>{
    console.log("Hosuing specifications changed!" +req.params.id);
    console.log(req.body);

    houseModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.post('/api/houses', (req,res)=>{
    console.log(req.body);
    console.log(req.body.date);
    console.log(req.body.ownedOrLeased);
    console.log(req.body.parkingSpaces);
    console.log(req.body.status);
    console.log(req.body.type);
    console.log(req.body.adaAccessible);
    console.log(req.body.ansiUsable);


    houseModel.create({
        date:req.body.date,
        ownedOrLeased:req.body.ownedOrLeased,
        parkingSpaces:req.body.parkingSpaces,
        status:req.body.status,
        type:req.body.type,
        adaAccessible:req.body.adaAccessible,
        ansiUsable:req.body.ansiUsable,

    })
    res.send('Item Added');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})