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
		Inscripciones: async (parent, args, context) => {
			let filtro = {};
			if (context.userData) {
			  if (context.userData.rol === 'LIDER') {
				const projects = await ProjectModel.find({ lider: context.userData._id });
				const projectList = projects.map((p) => p._id.toString());
				filtro = {
				  proyecto: {
					$in: projectList,
				  },
				};
			  }
			}
			const inscripciones = await InscriptionModel.find({ ...filtro });
			return inscripciones;
		  },
	  
		  // inscripcionesNoAprobadas: async () => {
		  //   const ina = await InscriptionModel.find({ estado: 'PENDIENTE' }).populate('estudiante');
		  // },
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
		  rechazarInscripcion: async (parent, args) => {
			const inscripcionRechazada = await InscriptionModel.findByIdAndUpdate(
			  args.id,
			  {
				estado: 'RECHAZADA',
				fechaIngreso: Date.now(),
			  },
			  { new: true }
			);
			return inscripcionRechazada;
		  },
		  finalizarInscripcion: async (parent, args) => {
			const inscripcionFinalizada = await InscriptionModel.updateMany(
				{proyecto:args.id},
			  {
				fechaEgreso: Date.now(),
			  },
			  { new: true }
			);
			return inscripcionFinalizada;
		  },
	},
};

export { resolverInscripciones};
