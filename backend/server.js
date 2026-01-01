const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { products } = require('./productsData');
const { getMonthlyOffer } = require('./offersData');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allow all CORS requests
app.use(bodyParser.json());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Serve Frontend Static Files
// The '../frontend' directory is served at the root URL
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// API Routes
app.get('/api/products', (req, res) => {
    // Simulate network delay
    setTimeout(() => {
        if (!products) {
            return res.status(500).json({ error: "Products data missing" });
        }
        res.json(products);
    }, 500);
});

app.get('/api/offers', (req, res) => {
    setTimeout(() => {
        try {
            const offer = getMonthlyOffer();
            res.json(offer);
        } catch (err) {
            res.status(500).json({ error: "Failed to fetch offers" });
        }
    }, 500);
});

app.post('/api/contact', (req, res) => {
    setTimeout(() => {
        const { name, email, message } = req.body;
        console.log(`[CONTACT FORM] Name: ${name}, Email: ${email}, Message: ${message}`);
        res.json({ success: true, message: "Message received successfully!" });
    }, 1000);
});

// Root Route - Explicitly serve index.html (Express Static usually handles this, but being explicit helps)
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n=========================================================`);
    console.log(`   CRICKET SHOP SERVER RUNNING`);
    console.log(`   ---------------------------------------------`);
    console.log(`   Local URL:   http://localhost:${PORT}`);
    console.log(`   Frontend:    ${frontendPath}`);
    console.log(`=========================================================\n`);
});
