import { ApolloServer } from 'apollo-server-express';
import connectDB from './db/db.js';
import { types } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
	typeDefs: types,
	resolvers: resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
	await connectDB();
	await server.start();

	server.applyMiddleware({ app });

	console.log('Ready to launch');
});
