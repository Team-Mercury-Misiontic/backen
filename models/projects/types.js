import { gql } from 'apollo-server-core';

const projectTypes = gql`
	type Objetivo {
		_id: ID!
		descripcion: String!
		tipo: Enum_TipoObjetivo!
	}

	input crearObjetivo {
		descripcion: String!
		tipo: Enum_TipoObjetivo!
	}

# 	input camposProyecto {
#     nombre: String
#     presupuesto: Float
#     fechaInicio: Date
#     fechaFin: Date
#     estado: Enum_EstadoProyecto
#     fase: Enum_FaseProyecto
#     lider: String
#   }

	type Proyecto {
		_id: ID!
		nombre: String!
		presupuesto: Float!
		fechaInicio: Date!
		fechaFin: Date!
		estado: Enum_EstadoProyecto!
		fase: Enum_FaseProyecto!
		lider: Usuario!
		objetivos: [Objetivo]
		avances: [Avance]
		registros:[Inscripcion]
	}

	type Query {
		Proyectos: [Proyecto]
		Proyecto(_id: String!):Proyecto
	}

	type Mutation {
		crearProyecto(
			nombre: String!
			presupuesto: Float!
			fechaInicio: Date!
			fechaFin: Date!
			estado: Enum_EstadoProyecto
			fase: Enum_FaseProyecto
			lider: String!
			objetivos: [crearObjetivo]
		): Proyecto

		editarProyecto(
			_id: String!
			nombre: String!
			presupuesto: Float!
			fechaInicio: Date!
			fechaFin: Date!
			estado: Enum_EstadoProyecto!
			fase: Enum_FaseProyecto!
			lider: String!
			objetivos: [crearObjetivo]
		): Proyecto

		createObjective(idProyecto: String!, descripcion:String!, tipo: Enum_TipoObjetivo!):Proyecto
		
		# editObjective(idProyecto: String!, idObjetivo: String!, descripcion:String!, tipo: Enum_TipoObjetivo!):Proyecto
		# opcion para estudiarla

		editObjective(idProyecto: String!, indexObjetivo: Int!, descripcion:String!, tipo: Enum_TipoObjetivo!):Proyecto

		deleteObjective(idProyecto: String!,idObjetivo: String!):Proyecto



	}
`;

export { projectTypes };
