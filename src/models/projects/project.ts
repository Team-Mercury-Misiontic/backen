import { Schema, model } from 'mongoose';
import {
	Enum_EstadoProyecto,
	Enum_FaseProyecto,
	Enum_TipoObjetivo,
} from '../enums/enums';
import { ObjectiveModel } from '../objective';
import { UserModel } from '../users/user';

interface Project {
	nombre: string;
	presupuesto: number;
	fechaInicio: Date;
	fechaFin: Date;
	estado: Enum_EstadoProyecto;
	fase: Enum_FaseProyecto;
	lider: Schema.Types.ObjectId;
	objetivos: [
		{
			descripcion: string;
			tipo: Enum_TipoObjetivo;
		}
	];
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
		default: Enum_EstadoProyecto.INACTIVO,
	},
	fase: {
		type: String,
		default: Enum_FaseProyecto.TERMINADO,
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
				enum: Enum_TipoObjetivo,
				required: true,
			},
		},
	],
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
