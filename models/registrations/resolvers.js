import { InscriptionModel } from './registration.js';
import { ProjectModel } from '../projects/project.js';
import { UserModel } from '../users/user.js';


const resolverInscripciones = {
	Inscripcion: {
		proyecto: async (parent, args, context) => {
		  return await ProjectModel.findOne({ _id: parent.proyecto });
		},
		estudiante: async (parent, args, context) => {
		  return await UserModel.findOne({ _id: parent.estudiante });
		},
	  },

	Query: {
		Inscripciones: async (parents, args) => {
			const registros = await InscriptionModel.find()
				.populate('estudiante')
				.populate('proyecto');

			return registros;
		},
	},

	Mutation: {
		crearRegistro: async (parents, args) => {
			const nuevoRegistro = await InscriptionModel.create({
				proyecto: args.proyecto,
				estudiante: args.estudiante,
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
