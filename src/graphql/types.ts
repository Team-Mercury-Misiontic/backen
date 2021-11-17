import { gql } from 'apollo-server-core';

const typeDefs = gql`
	type Usuario {
		nombre: String!
	}

	type Query {
		Usuarios: [Usuario]
	}
`;

export { typeDefs };
