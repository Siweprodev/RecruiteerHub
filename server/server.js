const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// set port, listen for requests
const PORT = process.env.PORT || 6060;

var corsOptions = {
    origin: '*',
    allowCredentials: "true",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to RecruitHub application." });
});



app.use('/auth', require("./routes/admin/auth.route"))


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});