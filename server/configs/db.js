import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));
        await mongoose.connect(`${process.env.MONGODB_URL}/quickshow`);
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;