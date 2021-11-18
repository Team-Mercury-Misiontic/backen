import { UserModel } from '../models/user';

const resolvers = {
	Query: {
		Usuarios: async (parent, args) => {
			const usuarios = await UserModel.find();
			return usuarios;
		},
	},
};

export { resolvers };
