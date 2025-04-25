import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model
const contactSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  email: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Route to handle form submission
app.post('/api/contact', async (req, res) => {
  const { fullName, phoneNumber, email } = req.body;

  try {
    const newContact = new Contact({ fullName, phoneNumber, email });
    await newContact.save();
    res.status(201).send({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Error saving contact' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
