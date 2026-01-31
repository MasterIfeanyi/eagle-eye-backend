import mongoose from 'mongoose';


export default function connectDb() {

    if (!dbUrl) {
        console.error('Database URL is not defined in the environment variables');
        process.exit(1); // Exit the process with an error code
    }


}