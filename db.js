import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = () => {
    mongoose
        .connect(MONGODB_URI)
        .then(() => {
            console.log("DB Connected");
        })
        .catch((err) => {
            console.log("Error while connecting to the DB", err);
        });
};

export default connectToDB;
