import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ObjectiveSchema = new Schema<Objective>({
	descripcion: {
		type: String,
		required: true,
	},
	tipo: {
		type: String,
		enum: Enum_TipoObjetivo,
		required: true,
	},
	proyecto: {
		type: Schema.Types.ObjectId,
		ref: ProjectModel,
	},
});

const ObjectiveModel = model('Objective', ObjectiveSchema);

export { ObjectiveModel };
