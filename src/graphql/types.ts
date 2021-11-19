import { gql } from 'apollo-server-core';

const typeDefs = gql`
	enum Enum_EstadoUsuario {
		PENDIENTE
		AUTORIZADO
		NO_AUTORIZADO
	}

	enum Enum_Rol {
		ESTUDIANTE
		LIDER
		ADMINISTRADOR
	}

	type Usuario {
		_id: ID
		nombre: String!
		apellido: String!
		identificacion: String!
		correo: String!
		estado: Enum_EstadoUsuario!
		rol: Enum_Rol!
	}

	type Query {
		Usuarios: [Usuario]
	}

	type Mutation {
		crearUsuario(
			nombre: String!
			apellido: String!
			identificacion: String!
			correo: String!
			rol: Enum_Rol!
			estado: Enum_EstadoUsuario
		): Usuario

		editarUsuario(
			nombre: String!
			apellido: String!
			identificacion: String!
			correo: String!
			rol: Enum_Rol!
			estado: Enum_EstadoUsuario
		): Usuario

		eliminarUsuario(_id: String!): Usuario
	}
`;

export { typeDefs };
