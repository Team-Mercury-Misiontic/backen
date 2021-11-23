import { RegistrationModel } from './registration.js';

const registrationsResolvers = {
	Query: {
		Registros: async (parents, args) => {
			const registros = await RegistrationModel.find()
				.populate('estudiante')
				.populate('proyecto');

			return registros;
		},
	},

	Mutation: {
		crearRegistro: async (parents, args) => {
			const nuevoRegistro = await RegistrationModel.create({
				proyecto: args.proyecto,
				estudiante: args.estudiante,
				estado: args.estado,
				fechaIngreso: args.fechaIngreso,
				fechaEgreso: args.fechaEgreso,
			});

			return nuevoRegistro;
		},
	},
};

export { registrationsResolvers };
