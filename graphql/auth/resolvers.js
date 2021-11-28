import { UserModel } from '../../models/users/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const resolverAuthentication = {
	Mutation: {
		register: async (parent, args) => {
			const salt = await bcrypt.genSalt(10);

			const hashedPassword = await bcrypt.hash(args.password, salt);

			const registarUsuario = await UserModel.create({
				nombre: args.nombre,
				apellido: args.apellido,
				identificacion: args.identificacion,
				rol: args.rol,
				correo: args.correo,
				password: hashedPassword,
			});
			console.log(`new user ${registarUsuario}`);

			return {
				token: generateToken({
					_id: registarUsuario._id,
					nombre: registarUsuario.nombre,
					apellido: registarUsuario.apellido,
					identificacion: registarUsuario.identificacion,
					correo: registarUsuario.correo,
					rol: registarUsuario.rol,
				}),
			};
		},
	}, 
};

export { resolverAuthentication };
