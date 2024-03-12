const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const FoodModel = require("./models/Food");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://abhi:abhi@atlascluster.7dulseo.mongodb.net/foods?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.get("/read", async(req,res)=>{
    try{
        const result = await FoodModel.find({});
        res.send(result)
    } catch(err){
        res.status(500).send(err);
    }
})
app.post("/insert", async(req,res) => {

    const reqfoodName = req.body.foodname;
    const reqdays = req.body.days;
    const food = new FoodModel({
        foodName: reqfoodName,
        lastAteDate: reqdays
    });

    try{
        await food.save();
        res.send("inserted data")
    } catch(err){
        console.log(err);
    }
})

app.listen(3001, ()=> {
    console.log("Server running on port 3001")
});