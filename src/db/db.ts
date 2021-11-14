import { connect } from 'mongoose';

const connectDB = async () => {
	return await connect(
		'mongodb+srv://admin:admin1234@cluster0.4crxc.mongodb.net/projectManagement?retryWrites=true&w=majority'
	)
    .then(() => {
        console.log('Connection succesfully');
    })
    .catch((err) => {
        console.error(`Something went wrong ${err}`)
    })
};

export default connectDB;
