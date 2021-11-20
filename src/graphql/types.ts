import { gql } from 'apollo-server-core';

const typeDefs = gql`
	scalar Date

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

	enum Enum_EstadoProyecto {
		ACTIVO
		INACTIVO
	}

	enum Enum_FaseProyecto {
		INICIADO
		DESARROLLO
		TERMINADO
		NULA
	}

	enum Enum_TipoObjetivo {
		GENERAL
		ESPECIFICO
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

	type Objetivo {
		_id: ID!
		descripcion: String!
		tipo: Enum_TipoObjetivo!
	}

	input crearObjetivo {
		descripcion: String!
		tipo: Enum_TipoObjetivo!
	}

	type Proyecto {
		_id: ID!
		nombre: String!
		presupuesto: Float!
		fechaInicio: Date!
		fechaFin: Date!
		estado: Enum_EstadoProyecto
		fase: Enum_FaseProyecto
		lider: Usuario!
		objetivos: [Objetivo]
	}

	type Query {
		Usuarios: [Usuario]
		Proyectos: [Proyecto]
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
	}
`;

export { typeDefs };
