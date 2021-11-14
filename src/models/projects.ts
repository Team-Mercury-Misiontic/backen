import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto } from './enums';
import { UserModel } from './user';

interface Project {
	nombre: string;
	presupuesto: number;
	fechaInicio: Date;
	fechaFin: Date;
	estado: Enum_EstadoProyecto;
	fase: Enum_FaseProyecto;
	lider: Schema.Types.ObjectId;
}

const projectSchema = new Schema<Project>({
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
		required: true,
	},
	fechaFin: {
		type: Date,
		required: true,
	},
	estado: {
		type: String,
		default: Enum_EstadoProyecto.inactivo,
	},
	fase: {
		type: String,
		default: Enum_FaseProyecto.terminado,
	},
	lider: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: UserModel,
	},
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
