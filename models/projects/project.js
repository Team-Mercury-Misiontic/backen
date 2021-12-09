import mongoose from 'mongoose';
import { UserModel } from '../users/user.js';

const { Schema, model } = mongoose;

const projectSchema = new Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		presupuesto: {
			type: Number,
			required: true,
		},
		fechaInicio: {
			type: Date,
			required: false,
		},
		fechaFin: {
			type: Date,
			required: false,
		},
		estado: {
			type: String,
			enum: ['ACTIVO', 'INACTIVO'],
			default: 'INACTIVO',
		},
		fase: {
			type: String,
			enum: ['INICIADO', 'EN DESAROLLO', 'TERMINADO', 'NULA'],
			default: 'NULA',
		},
		lider: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: UserModel,
		},

		objetivos: [
			{
				descripcion: {
					type: String,
					required: true,
				},
				tipo: {
					type: String,
					enum: ['GENERAL', 'ESPECIFICO'],
					required: true,
				},
			},
		],
	},
	{
		toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
		toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
	}
);

projectSchema.virtual('avances', {
	ref: 'Advances',
	localField: '_id',
	foreignField: 'proyecto',
});

projectSchema.virtual('registros', {
	ref:"Inscripcion",
	localField:"_id",
	foreignField:'proyecto'
})

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
