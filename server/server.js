const express = require('express');
const cors = require("cors");
const path = require('path');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();