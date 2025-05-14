import express from 'express';
import cors from 'cors';
import dBConnection from './config/db.js';
import AuthRoutes from './routes/AnimalRut.js'; 

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// DB Connection
dBConnection();

const PORT = 9000;

// Routes
app.get('/', (req, res) => {
  res.send("Setup successful"); 
});

app.use("/api/v1", AuthRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
