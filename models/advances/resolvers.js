import { AdvancesModel } from './advance.js';
import { ProjectModel } from '../projects/project.js';
import { UserModel } from '../users/user.js';
//import { ProjectModel } from '../projects/project.js';
const advancesResolver = {
	// Avance: {
	// 	proyecto: async (parent, args, context) => {
	// 	  return await ProjectModel.findOne({ _id: parent.proyecto });
	// 	},
	// 	creadoPor: async (parent, args, context) => {
	// 	  return await UserModel.findOne({ _id: parent.creadoPor });
	// 	},
	//   },
	Query: {
		// filtrarAvance: async (parent, args, context) => {
		// 	let filtro = {};
		// 	if (context.userData) {
		// 	  if (context.userData.rol === 'LIDER') {
		// 		const projects = await ProjectModel.find({ lider: context.userData._id });
		// 		const projectList = projects.map((p) => p._id.toString());
		// 		filtro = {
		// 		  proyecto: {
		// 			$in: projectList,
		// 		  },
		// 		};
		// 	  }
		// 	}
		// 	const avanceFiltrado = await AdvancesModel.find({ ...filtro });
		// 	return avanceFiltrado;
		//   },
		Avances: async (parents, args) => {
			const avance = await AdvancesModel.find()
				.populate('proyecto')
				.populate('creadoPor');
			return avance;
		},
	
		filtrarAvance: async (parents, args) => {
			const avanceFiltrado = await AdvancesModel.find({ proyecto: args._id })
			 .populate('proyecto')
			  .populate('creadoPor');
			return avanceFiltrado;
		  },
		  avanceFiltrado: async (parents, args) => {
			const avanceFiltrado = await AdvancesModel.find({ _id: args._id })
			 .populate('proyecto')
			  .populate('creadoPor');
			return avanceFiltrado;
		  },  
	},
	

	Mutation: {
		crearAvance: async (parents, args) => {
			const nuevoAvance = await AdvancesModel.create({
				proyecto: args.proyecto,
				// fecha: args.fecha,
				descripcion: args.descripcion,
				creadoPor: args.creadoPor,
			});

			return nuevoAvance;
		},

		editarAvance: async (parent, args) => {
			const avanceEditado = await AdvancesModel.findByIdAndUpdate(
				args.id,
				{
					descripcion: args.descripcion,
					fecha: args.fecha
				},
				{ new: true }
			);
			return avanceEditado;
		},

		createAvance: async (parent,args)=>{
			const proyectWithAvance= await AdvancesModel.findByIdAndUpdate(
				args.id,
				{
					$addToSet:{
						observaciones:args.observaciones
					},
				},
				{new:true}				
			);

			return proyectWithAvance;
		}
	},
};

export { advancesResolver };
