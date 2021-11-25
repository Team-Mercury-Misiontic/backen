import { ProjectModel } from './project.js';

const projectResolvers = {
	Query: {
		Proyectos: async (parent, args) => {
			const proyectos = await ProjectModel.find()
				.populate('lider')
				.populate('avances')
				.populate('registros');
			return proyectos;
		},

		Proyecto: async (parent, args) => {
			const proyecto = await ProjectModel.findOne({ _id: args._id })
				.populate('lider')
				.populate('avances')
				.populate('registros');
			return proyecto;
		},
	},

	Mutation: {
		crearProyecto: async (parent, args) => {
			const nuevoProyecto = await ProjectModel.create({
				nombre: args.nombre,
				estado: args.estado,
       			fase: args.fase,
				fechaInicio: args.fechaInicio,
				fechaFin: args.fechaFin,
				presupuesto: args.presupuesto,
				lider: args.lider,
				objetivos: args.objetivos,
			});
			return nuevoProyecto;
		},

		editarProyecto:async (parent, args) => {
			const proyectoEditado = await ProjectModel.findByIdAndUpdate(
			  args._id,
				{
					nombre: args.nombre,
					estado: args.estado,
					fase: args.fase,
					fechaInicio: args.fechaInicio,
					fechaFin: args.fechaFin,
					presupuesto: args.presupuesto,
					lider: args.lider,
					objetivos: args.objetivos,
				},
				{ new: true }
			);

			return proyectoEditado;
		},	

	},
};

export { projectResolvers };
