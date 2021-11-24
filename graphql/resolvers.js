import { userResolvers } from '../models/users/resolvers.js';
import { projectResolvers } from '../models/projects/resolvers.js';
import { advancesResolver } from '../models/advances/resolvers.js';
import { registrationsResolvers } from '../models/registrations/resolvers.js';
import {resolverAuthentication} from './auth/resolvers.js';
export const resolvers = [userResolvers, projectResolvers, advancesResolver, registrationsResolvers,resolverAuthentication];
