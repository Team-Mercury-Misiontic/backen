import connectDB from './db/db';
import { AdvancesModel } from './models/advances';
import { Enum_Rol } from './models/enums';
import { ProjectModel } from './models/projects';
import { UserModel } from './models/user';

const main = async () => {
	await connectDB();

	await AdvancesModel.create({
		proyecto: '61905821724cdf89ac8b2776',
		descripcion: 'Maquetacion modelos',
		fecha: Date.now(),
		observaciones: 'Buen progreso',
		creadoPor: '618dbbbe9983fa2356ef2212',
	});

	// ****Create Project****
	// await ProjectModel.create({
	// 	nombre: 'Proyecto2',
	// 	presupuesto: 3000,
	// 	fechaInicio: Date.now(),
	// 	fechaFin: new Date('2021/11/11'),
	// 	lider: '618dbbbe9983fa2356ef2212'
	// });

	// const project2 = await ProjectModel.find({
	// 	nombre: 'Proyecto2',
	// }).populate('lider');

	// console.log('The project leader', project2)

	//****Create one time user****
	// await UserModel.create({
	// 	nombre: 'Juan',
	// 	apellido: 'Alimaña',
	// 	correo: 'algo@yopmail.com',
	// 	identificacion: '52588',
	// 	rol: Enum_Rol.estudiante,
	// })
	// 	.then((user) => {
	// 		console.log(`New user ${user}`);
	// 	})
	// 	.catch((err) => {
	// 		console.error(`Whoops ${err}`);
	// 	});

	//****Update User**** */
	// await UserModel.findOneAndUpdate(
	// 	{ correo: 'danielmelo276@gmail.com' },
	// 	{
	// 		nombre: 'Juan',
	// 		apellido: 'Mata',
	// 	}
	// )
	// 	.then((user) => {
	// 		console.log(`new user ${user}`);
	// 	})
	// 	.catch((err) => {
	// 		console.error(`Something went wrong ${err}`);
	// 	});

	//****Get User**** */
	// await UserModel.find()
	// 	.then((user) => {
	// 		console.log(`list of users: ${user}`);
	// 	})
	// 	.catch((err) => {
	// 		console.error(`Whoops ${err}`);
	// 	});
};

main();
