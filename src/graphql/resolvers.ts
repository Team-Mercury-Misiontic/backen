const resolvers = {
	Query: {
		Usuarios: async (parent, args) => {
			const usuarios = [
				{
					nombre: 'Daniel',
				},
				{
					nombre: 'Sammuel',
				},
				{
					nombre: 'Justacio',
				},
			];
			return usuarios;
		},
	},
};

export { resolvers };
