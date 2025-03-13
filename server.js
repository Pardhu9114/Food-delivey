const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Import order routes
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);  // ✅ Make sure this path is correct

// Test API endpoint
app.get('/', (req, res) => {
    res.send('🚀 API is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Server running on http://localhost:${PORT}`));
