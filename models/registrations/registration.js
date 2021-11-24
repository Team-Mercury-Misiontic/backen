import mongoose from 'mongoose';
import { ProjectModel } from '../projects/project.js';
import { UserModel } from '../users/user.js';

const { Schema, model } = mongoose;


const Registrationschema = new Schema({
	estado: {
		type: String,
		enum:['ACEPTADA', 'RECHAZADA', 'PENDIENTE'],
		default: 'PENDIENTE',
		required: true
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
