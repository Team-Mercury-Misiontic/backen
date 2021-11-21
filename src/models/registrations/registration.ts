import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from '../enums/enums';
import { ProjectModel } from '../projects/project';
import { UserModel } from '../users/user';

interface Registration {
	proyecto: Schema.Types.ObjectId;
	estudiante: Schema.Types.ObjectId;
	estado: Enum_EstadoInscripcion;
	fechaIngreso: Date;
	fechaEgreso: Date;
}

const Registrationschema = new Schema<Registration>({
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

const RegistrationModel = model('Registrations', Registrationschema);

export { RegistrationModel };
