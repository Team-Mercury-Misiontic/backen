import { gql } from 'apollo-server-core';

const registrationTypes = gql`
	type Registro {
		_id: ID!
		proyecto: Proyecto!
		estudiante: Usuario!
		estado: String!
		fechaIngreso: Date!
		fechaEgreso: Date!
	}

	type Query {
		Registros: [Registro]
	}

	type Mutation {
		crearRegistro(
			proyecto: String!
			estudiante: String!
			estado: String!
			fechaIngreso: Date!
			echaEgreso: Date!
		): Registro
	}
`;

export { registrationTypes };
