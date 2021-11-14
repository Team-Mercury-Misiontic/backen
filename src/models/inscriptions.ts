import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from './enums';
import { ProjectModel } from './projects';
import { UserModel } from './user';

interface Inscriptions {
	proyecto: Schema.Types.ObjectId;
	estudiante: Schema.Types.ObjectId;
	estado: Enum_EstadoInscripcion;
	fechaIngreso: Date;
	fechaEgreso: Date;
}

const inscriptionSchema = new Schema<Inscriptions>({
	estado: {
		type: String,
		required: true,
	},
	fechaIngreso: {
		type: Date,
		required: true,
	},
	fechaEgreso: {
		type: Date,
		required: true,
	},
	proyecto: {
		type: Schema.Types.ObjectId,
		ref: ProjectModel,
		required: true,
	},

	estudiante: {
		type: Schema.Types.ObjectId,
		ref: UserModel,
		required: true,
	},
});

const InscriptionsModel = model('Inscriptions', inscriptionSchema);

export { InscriptionsModel };
