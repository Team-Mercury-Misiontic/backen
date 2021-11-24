import mongoose from 'mongoose';

const connectDB = async () => {
	return await mongoose
		.connect(process.env.DATABASE_URL)
		.then(() => {
			console.log('Connection succesfully');
		})
		.catch((err) => {
			console.error(`Something went wrong ${err}`);
		});
};

export default connectDB;
