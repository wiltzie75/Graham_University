const express = require('express');
const cors = require("cors");
const path = require('path');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://' : 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log('Route accessed:', req.method, req.path);
    next();
});

app.get('api/debug', asynce (req, res) => {

})

app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
})

// Import route files

// *** API ROUTES MUST COME FIRST ***

// *** STATIC FILES AND CATCH-ALL MUST COME AFTER API ROUTES ***