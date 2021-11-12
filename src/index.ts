import connectDB from './db/db';
import UserModel from './models/user';

const main = async () => {
	await connectDB();

	//****Create one time user****
	// await UserModel.create({

	// })
	// 	.then((user) => {
	// 		console.log(`New user ${user}`);
	// 	})
	// 	.catch((err) => {
	// 		console.error(`Whoops ${err}`);
	// 	});

	await UserModel.findOneAndUpdate(
		{ correo: 'danielmelo276@gmail.com' },
		{
			nombre: 'Juan',
			apellido: 'Mata',
		}
	)
		.then((user) => {
			console.log(`new user ${user}`);
		})
		.catch((err) => {
			console.error(`Something went wrong ${err}`);
		});

	await UserModel.find()
		.then((user) => {
			console.log(`list of users: ${user}`);
		})
		.catch((err) => {
			console.error(`Whoops ${err}`);
		});
};

main();
