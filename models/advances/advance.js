import mongoose from 'mongoose';
import { ProjectModel } from '../projects/project.js';
import { UserModel } from '../users/user.js';

const { Schema, model } = mongoose;
// interface Advances {
// 	proyecto: Schema.Types.ObjectId;
// 	fecha: Date;
// 	descripcion: string;
// 	observaciones: [string];
// 	creadoPor: Schema.Types.ObjectId;
// }

const objectSchema = new Schema({
	proyecto: {
		type: Schema.Types.ObjectId,
		ref: ProjectModel,
	},
	fecha: {
		type: Date,
		required: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
	observaciones: [
		{
			type: String,
		},
	],
	creadoPor: {
		type: Schema.Types.ObjectId,
		ref: UserModel,
		required: true,
	},
});

const AdvancesModel = model('Advances', objectSchema);

export { AdvancesModel };
