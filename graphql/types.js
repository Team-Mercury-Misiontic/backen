import { gql } from 'apollo-server-core';
import { enumTypes } from '../models/enums/types.js';
import { userTypes } from '../models/users/types.js';
import { projectTypes } from '../models/projects/types.js';
import { advancesTypes } from '../models/advances/types.js';
import { registrationTypes } from '../models/registrations/types.js';
import {typesAuthentication} from './auth/types.js';

const globalTypes = gql`
	scalar Date
`;

export const types = [globalTypes, enumTypes,userTypes, projectTypes, advancesTypes,registrationTypes,typesAuthentication];
