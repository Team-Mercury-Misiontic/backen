import {gql} from 'apollo-server-express';

const typesAuthentication =gql `

    type Token{
        token:String
        error:String
    }

    type Mutation{
        register(
            nombre: String!
			apellido: String!
			identificacion: String!
			correo: String!
			rol: Enum_Rol!
			estado: Enum_EstadoUsuario
            password: String!
        ):Token
        login(correo: String!, password: String!): Token
        cambiarClave(correo: String, password:String, clave: String): String

        refreshToken: Token
    }
`;

export {typesAuthentication};