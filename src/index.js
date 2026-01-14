import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config("./.env");

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database", error);
    process.exit(1);
});

