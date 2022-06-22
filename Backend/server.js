const shopCards = require('./data/shop_cards');  // Import shop cards
const showCaseCards = require('./data/showcase_cards'); // Import showcase cards

// Creating a server
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import connectDB for connecting to MongoDB
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
 
dotenv.config(); // Configure dotenv
connectDB();  // Connect to MongoDB

app.use(express.json())


app.get('/api/shopCards', (req,res)=>{
    res.json(shopCards);
})

app.get('/api/showCaseCards', (req,res)=>{  
    res.json(showCaseCards);
}) 

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server runninng on port ${PORT}`)); 