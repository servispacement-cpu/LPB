import dns from 'dns';
import express from 'express';
import mongoose from 'mongoose';
import cors  from 'cors';

//dns.setDefaultResultOrder('ipv4first');

// Create a new Express.js instance
const app = express();

 

// Set up middleware

app.use(express.json());

 

// Connect to the MongoDB database

mongoose.connect('mongodb://servispacement_db_user:test@ac-wrbrxfi-shard-00-00.r3itdqv.mongodb.net:27017,ac-wrbrxfi-shard-00-01.r3itdqv.mongodb.net:27017,ac-wrbrxfi-shard-00-02.r3itdqv.mongodb.net:27017/LPB?ssl=true&replicaSet=atlas-10s15u-shard-0&authSource=admin&appName=Cluster0', {
});

 

// Define a schema for our data

const Schema = new mongoose.Schema({
});



// Define a model based on the schema

const Item = mongoose.model('Item', Schema);

 

// Define routes
app.use(cors()); 



/////////////////////////////////////////////////////////////  Post/récup les billets quands réservés
app.post("/hello" , async (req, res)=>{
  res.json(req.body);
})


app.use(express.static("public"));

// Start the server

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});