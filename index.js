import { ApolloServer } from 'apollo-server-express';
import connectDB from './db/db.js';
import { types } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { validateToken } from './utils/tokenUtils.js'

dotenv.config();

const getUserData =(token) =>{
	const verification=validateToken(token.split(' ')[1]);
	if(verification.data){
		return verification.data;
	}else{
		return null;
	}
};
const server = new ApolloServer({
	typeDefs: types,
	resolvers: resolvers,
	context: ({ req }) => {
		const token = req.headers?.authorization ?? null;
		if (token) {
		  const userData = getUserData(token);
		  if (userData) {
			return { userData };
		  }
		}
		return null;
	  },
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
