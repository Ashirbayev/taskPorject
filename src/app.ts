import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', taskRoutes);

const DB_URI = 'mongodb://localhost:27017/mydatabase';

const connectDB = async () => {
    console.log('1');
    try {
        console.log('2');
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as any);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
console.log('1');
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
