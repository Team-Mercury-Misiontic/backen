import { ProjectModel } from './project.js';
import { UserModel } from '../users/user.js';
import { InscriptionModel } from '../registrations/registration.js';

const projectResolvers = {

	Proyecto: {
		lider: async (parent, args, context) => {
		  const usr = await UserModel.findOne({
			_id: parent.lider._id,
		  });
		  return usr;
		},
		registros: async (parent, args, context) => {
			const inscripciones = await InscriptionModel.find({
			  proyecto: parent._id,
			});
			return inscripciones;
		  },
	},
	
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
			}
			);
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
		
		createObjective: async (parent,args)=>{
			const proyectWithObjective= await ProjectModel.findByIdAndUpdate(
				args.idProyecto,
				{
					$addToSet:{
						objetivos:{
							descripcion: args.descripcion,
							tipo: args.tipo,
						},
					},
				},
				{new:true}				
				);

				return proyectWithObjective;
		},

		// editObjective: async (parent,args)=>{
		// 	const editObjectiveProyec= await ProjectModel.findByIdAndUpdate(
		// 		{_id:args.idProyecto,objetivos:args.idObjetivo},
		// 		{
		// 			$set:{
		// 				"objetivos.$.descripcion":args.descripcion,
		// 				"objetivos.$.tipo":args.tipo
		// 			},	
		// 	}, {new:true}
		// 	);
		// 	return 	editObjectiveProyec;
		// }, para estudio

		editObjective: async (parent,args)=>{
			const editObjectiveProyec= await ProjectModel.findByIdAndUpdate(
				args.idProyecto,
				{
					$set:{
						[`objetivos.${args.indexObjetivo}.descripcion`]:args.descripcion,
						[`objetivos.${args.indexObjetivo}.tipo`]:args.tipo,
					},	
				}, 
				{new:true}
			);
			return 	editObjectiveProyec;
		},

		deleteObjective: async (parent,args)=>{
			const deleteObjectiveProyec= await ProjectModel.findByIdAndUpdate(
				{_id: args.idProyecto},
				{
					$pull:{
						objetivos:{
							_id:args.idObjetivo,
						},
					},	
				}, 
				{new:true}
			);
			return 	deleteObjectiveProyec;
		},

	},
};

export { projectResolvers };
