import { ApolloServer } from 'apollo-server-express';
import connectDB from './db/db';
import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';
import express = require('express');
import cors = require('cors');
import dotenv = require('dotenv');
import { ObjectiveModel } from './models/objective';
import { ProjectModel } from './models/projects';
import { Enum_TipoObjetivo } from './models/enums';

dotenv.config();

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
	introspection: true,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT }, async () => {
	await connectDB();
	await server.start();

	server.applyMiddleware({ app });

	console.log('Ready to launch');
});
