import { connect } from 'mongoose';

const connectDB = async () => {
	return await connect(
		'UrlLink'
	)
    .then(() => {
        console.log('Connection succesfully');
    })
    .catch((err) => {
        console.error(`Something went wrong ${err}`)
    })
};

export default connectDB;
