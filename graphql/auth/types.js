import {gql} from 'apollo-server-express';

const typesAuthentication =gql `
    type Mutation{
        register(
            nombre: String!
			apellido: String!
			identificacion: String!
			correo: String!
			rol: Enum_Rol!
			estado: Enum_EstadoUsuario!
            password: String!
        ):String
    }
`;

export {typesAuthentication};