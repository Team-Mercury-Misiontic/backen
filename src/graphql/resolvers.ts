import { argsToArgsConfig } from 'graphql/type/definition';
import { ProjectModel } from '../models/projects';
import { UserModel } from '../models/user';

const resolvers = {
	Query: {
		Usuarios: async (parent, args) => {
			const usuarios = await UserModel.find();
			return usuarios;
		},

		Proyectos: async (parent, args) => {
			const proyectos = await ProjectModel.find().populate('lider');
			return proyectos;
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
				estado: args.estado,
			});

			return usuarioEditado;
		},

		eliminarUsuario: async (parent, args) => {
			const usuarioEliminado = await UserModel.findByIdAndDelete({
				_id: args._id,
			});
			return usuarioEliminado;
		},

		crearProyecto: async (parent, args) => {
			const proyectoCreado = await ProjectModel.create({
				nombre: args.nombre,
				fechaInicio: args.fechaInicio,
				fechaFin: args.fechaFin,
				presupuesto: args.presupuesto,
				lider: args.lider,
				objetivos: args.objetivos,
			});
			return proyectoCreado;
		},
	},
};

export { resolvers };
