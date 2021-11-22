import { ProjectModel } from './project.js';


const projectResolvers = {
	Query: {
		Proyectos: async (parent, args) => {
			const proyectos = await ProjectModel.find().populate('lider');
			return proyectos;
		},
	},

	Mutation: {
		crearProyecto: async (parent, args) => {
			const nuevoProyecto = await ProjectModel.create({
				nombre: args.nombre,
				fechaInicio: args.fechaInicio,
				fechaFin: args.fechaFin,
				presupuesto: args.presupuesto,
				lider: args.lider,
				objetivos: args.objetivos,
			});
			return nuevoProyecto;
		},
	},
};

export { projectResolvers };
