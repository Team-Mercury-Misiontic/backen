import { gql } from 'apollo-server-core';

const userTypes = gql`
	type Usuario {
		_id: ID
		nombre: String!
		apellido: String!
		identificacion: String!
		correo: String!
		estado: String!
		rol: String!
	}

	type Query {
		Usuarios: [Usuario]
        Usuario(_id: String!):Usuario
	}

	type Mutation {
		crearUsuario(
			nombre: String!
			apellido: String!
			identificacion: String!
			correo: String!
			rol: String!
			estado: String!
		): Usuario

		editarUsuario(
			nombre: String!
			apellido: String!
			identificacion: String!
			correo: String!
			rol: String!
			estado: String!
		): Usuario

		eliminarUsuario(_id: String!): Usuario

	}
`;

export { userTypes };