import { gql } from 'apollo-server-core';

const advancesTypes = gql`
	type Avance {
		_id: ID!
		proyecto: Proyecto
		fecha: Date
		descripcion: String!
		observaciones: [String]
		creadoPor: Usuario!
	}

	type Query {
		Avances: [Avance]
	}

	type Mutation {
		crearAvance(
			proyecto: String!
			fecha: Date
			descripcion: String!
			creadoPor: String!
		): Avance

		editarAvance(
            id: String!
            descripcion: String
        ): Avance
	}
`;

export { advancesTypes };
