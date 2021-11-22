import { gql } from 'apollo-server-core';

const projectTypes = gql`
	type Objetivo {
		_id: ID!
		descripcion: String!
		tipo: String!
	}

	input crearObjetivo {
		descripcion: String!
		tipo: String!
	}

	type Proyecto {
		_id: ID!
		nombre: String!
		presupuesto: Float!
		fechaInicio: Date!
		fechaFin: Date!
		estado: String!
		fase: String!
		lider: Usuario!
		objetivos: [Objetivo]
	}

	type Query {
		Proyectos: [Proyecto]
	}

	type Mutation {
		crearProyecto(
			nombre: String!
			presupuesto: Float!
			fechaInicio: Date!
			fechaFin: Date!
			estado: String!
			fase: String!
			lider: String!
			objetivos: [crearObjetivo]
		): Proyecto
	}
`;

export { projectTypes };
