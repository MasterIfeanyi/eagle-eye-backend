import mongoose from 'mongoose';


export default async function connectDb() {

    const dbUrl = process.env.DB_URL || "mongo string"

    if (!dbUrl) {
        console.error('Database URL is not defined in the environment variables');
        process.exit(1); // Exit the process with an error code
    }

    try {
        await mongoose.connect(dbUrl);
        console.log('App has connected to the database');
    } catch (err) {
        console.error('Error connecting to database:', err);
        process.exit(1); // Exit the process with an error code on failure
    }

    // // Connect to MongoDB without deprecated options
    // mongoose.connect(dbUrl)
    //     .then(() => console.log('Celestique app has connected to the database'))
    //     .catch(err => {
    //         console.error('Error connecting to database:', err);
    //         process.exit(1); // Exit the process with an error code on failure
    //     });
}