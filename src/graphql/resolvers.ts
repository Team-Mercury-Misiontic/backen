import { userResolvers } from '../models/users/resolvers';
import { projectResolvers } from '../models/projects/resolvers';
import { advancesResolver } from '../models/advances/resolvers';
import { registrationsResolvers } from '../models/registrations/resolvers';

export const resolvers = [userResolvers, projectResolvers, advancesResolver, registrationsResolvers];
