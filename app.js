const express = require('express');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');


dotenv.config();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Database connected"))
app.listen(process.env.PORT ,()=> console.log(`Server is running on port ${PORT}`));
app.use(cors());
app.use(router);

