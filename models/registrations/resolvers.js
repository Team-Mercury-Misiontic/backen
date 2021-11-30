import { InscriptionModel } from './registration.js';

const resolverInscripciones = {
	Query: {
		Inscripciones: async (parents, args) => {
			const registros = await InscriptionModel.find()
				.populate('estudiante')
				.populate('proyecto');

			return inscripciones;
		},
	},

	Mutation: {
		crearRegistro: async (parents, args) => {
			const nuevoRegistro = await InscriptionModel.create({
				proyecto: args.proyecto,
				estudiante: args.estudiante,
				estado: args.estado,
				fechaIngreso: args.fechaIngreso,
				fechaEgreso: args.fechaEgreso,
			});

			return nuevoRegistro;
		},
		aprobarInscripcion: async (parent, args) => {
			const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
			  args.id,
			  {
				estado: 'ACEPTADA',
				fechaIngreso: Date.now(),
			  },
			  { new: true }
			);
			return inscripcionAprobada;
		  },
	},
};

export { resolverInscripciones };
