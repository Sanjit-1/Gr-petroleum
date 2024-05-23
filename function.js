import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.get("/",(req, res) => {
    const happy = "I am great"
    res.render("index.ejs",{
        name:happy,
    })

});
app.listen(port,() =>{
    console.log(`Server is running on port 3000`);
})