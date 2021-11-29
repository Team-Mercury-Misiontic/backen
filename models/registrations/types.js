import { gql } from 'apollo-server-core';

const registrationTypes = gql`
	type Inscripcion {
		_id: ID!
		proyecto: Proyecto!
		estudiante: Usuario!
		estado: Enum_EstadoInscripcion!
		fechaIngreso: Date
		fechaEgreso: Date
	}

	type Query {
		Inscripciones: [Inscripcion]
	}

	type Mutation {
		crearRegistro(
			proyecto: String!
			estudiante: String!
			estado: Enum_EstadoInscripcion!
			fechaIngreso: Date!
			fechaEgreso: Date!
		): Inscripcion
		
		aprobarInscripcion(id: String!): Inscripcion
	}
`;

export { registrationTypes };
