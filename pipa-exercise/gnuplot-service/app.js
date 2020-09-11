const express = require("express");
const bodyParser = require("body-parser");
const gnuplot = require("gnuplot");

// asenna paketit konsolissa
// npm install express, gnuplot, 
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( 
    {
        extended: true
    }
));


//Käsittelijä POST kutsulle, jossa JSON muotoinen data
// {
//    "formula": 
//}

app.post("/", (req, res, next) => {
    const formula = req.body.formula;

    // plottaa png kuva
    gnuplot()
    .set("term png")
    .unset("output") // ei haluta tiedostoon, vaan suoraan streamiin
    .plot(formula,{
        end: true   
    })
    .pipe(res);

    console.log(formula);
    res.send("ok")
});

//Kuuntele porttia 80
app.listen(80);