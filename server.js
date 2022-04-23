require("dotenv").config();
const express=require("express");
const ejs=require("ejs");
const cors=require("cors");
const fs=require("fs");
const bodyParser = require("body-parser");
const path=require("path");
const mongoose=require("mongoose")

const app = express();
const invoiceroutes=require("./routes/invoiceroutes")
const issueroutes=require("./routes/issueroutes")
const mainroutes=require("./routes/mainroutes")
const projectroutes=require("./routes/projectroutes")
const productroutes=require("./routes/productroutes")
const userroutes=require("./routes/userroutes")


app.set('view engine','ejs');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.URI, {useNewUrlParser:true, useUnifiedTopology: true});
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);


app.use("/", invoiceroutes)
app.use("/", issueroutes)
app.use("/", mainroutes)
app.use("/", projectroutes)
app.use("/", productroutes)
app.use("/", userroutes)

const port = process.env.PORT || 3001;

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));

    app.get("*", function(req, res){
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log('Listening on port '+port)
});