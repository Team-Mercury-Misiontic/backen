import { Schema, model } from 'mongoose';
import { Enum_Rol, Enum_EstadoUsuario } from './enums';

interface User {
	correo: string;
	identificacion: string;
	nombre: string;
	apellido: string;
	rol: Enum_Rol;
}

const userSchema = new Schema<User>({
	correo: {
		type: String,
		required: true,
		unique: true,
	},
	identificacion: {
		type: String,
		required: true,
		unique: true,
	},
	nombre: {
		type: String,
		required: true,
	},
	apellido: {
		type: String,
		required: true,
	},
	rol: {
		type: String,
		required: true,
		enum: Enum_Rol,
	},
});

const UserModel = model('User', userSchema);

export default UserModel;
