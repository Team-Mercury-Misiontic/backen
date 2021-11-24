import { gql } from 'apollo-server-core';

const registrationTypes = gql`
	type Registro {
		_id: ID!
		proyecto: Proyecto!
		estudiante: Usuario!
		estado: Enum_EstadoInscripcion!
		fechaIngreso: Date
		fechaEgreso: Date
	}

	type Query {
		Registros: [Registro]
	}

	type Mutation {
		crearRegistro(
			proyecto: String!
			estudiante: String!
			estado: Enum_EstadoInscripcion!
			fechaIngreso: Date!
			fechaEgreso: Date!
		): Registro
		
		aprobarInscripcion(id: String!): Registro
	}
`;

export { registrationTypes };
