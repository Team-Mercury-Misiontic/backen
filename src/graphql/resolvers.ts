import { argsToArgsConfig } from 'graphql/type/definition';
import { UserModel } from '../models/user';

const resolvers = {
	Query: {
		Usuarios: async (parent, args) => {
			const usuarios = await UserModel.find();
			return usuarios;
		},
	},

	Mutation: {
		crearUsuario: async (parent, args) => {
			const usuarioCreado = await UserModel.create({
				nombre: args.nombre,
				apellido: args.apellido,
				identificacion: args.identificacion,
				correo: args.correo,
				rol: args.rol,
			});

			if (Object.keys(args).includes('estado')) {
				usuarioCreado.estado = args.estado;
			}

			return usuarioCreado;
		},

		editarUsuario: async (parent, args) => {
			const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
				nombre: args.nombre,
				apellido: args.apellido,
				identificacion: args.identificacion,
				correo: args.correo,
				rol: args.rol,
				estado: args.estado
			});

			return usuarioEditado;
		},

		eliminarUsuario: async (parent, args) => {
			const usuarioEliminado = await UserModel.findByIdAndDelete({
				_id: args._id,
			});
			return usuarioEliminado;
		},
	},
};

export { resolvers };
