import { AdvancesModel } from './advance.js';

const advancesResolver = {
	Query: {
		Avances: async (parents, args) => {
			const avance = await AdvancesModel.find()
				.populate('proyecto')
				.populate('creadoPor');
			return avance;
		},
	},

	Mutation: {
		crearAvance: async (parents, args) => {
			const nuevoAvance = await AdvancesModel.create({
				proyecto: args.proyecto,
				fecha: args.fecha,
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
					fecha: Date.now(),
				},
				{ new: true }
			);
			return avanceEditado;
		},
	},
};

export { advancesResolver };
