import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://aritradebnath1:ytGsNuzGyqo3K0jr@backenddb.kfsgfic.mongodb.net/blogger');
    console.log("DB Connected");
}