const express = require ("express");
const app = express();
const todoRoutes = require("./routes/termins");


// var bodyParser = require("body-parser"); // omogućava rad za req.body

/* app.use(bodyParser.json()); // omogućava rad za req.body
app.use(bodyParser.urlencoded({extended: true})); // omogućava rad za req.body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(cors())
app.use("/api", todoRoutes);


app.listen(process.env.PORT || 3001 , ()=>{
    console.log("Server started!!");
})