const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user')
const paymentRoutes = require('./routes/paymentRoutes'); 

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    const PORT = process.env.PORT || 4000; 
    app.listen(PORT, () => {
      console.log(`MongoDB Connected & Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  
  });



app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use('/api/user', userRoutes)
app.use('/api/payments', paymentRoutes);
app.listen(process.env.PORT, () => {
  console.log('Listening on port ', process.env.PORT);
});
