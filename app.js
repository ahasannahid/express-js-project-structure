const express = require('express');
const router = require('./src/routes/api');

const app = new express();

// security middleware import
 const rateLimit = require('express-rate-limit');
 const helmet = require('helmet');
 const mongoSanitize = require('express-mongo-sanitize');
 const xss = require('xss-clean');
 const hpp = require('hpp');
 const cors = require('cors');
 
// security middleware implement
 app.use(express.json());
 app.use(cors());
 app.use(helmet());
 app.use(mongoSanitize());
 app.use(xss());
 app.use(hpp());

// request rate limit
const limiter = rateLimit({
    windowMs : 15 * 60 * 1000, //15 min
    max : 100  //limit maximum 100
})

app.use(limiter);


app.use("/api/v1", router);


// undefine route
app.use('*', (req,res) => {
    res.status(404).json({
        status: "failed",
        data : "Not found"
    })
})

module.exports= app;