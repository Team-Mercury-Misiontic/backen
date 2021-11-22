import { gql } from 'apollo-server-core';
import { userTypes } from '../models/users/types.js';
import { projectTypes } from '../models/projects/types.js';
import { advancesTypes } from '../models/advances/types.js';
import { registrationTypes } from '../models/registrations/types.js';

const globalTypes = gql`
	scalar Date
`;

export const types = [globalTypes, userTypes, projectTypes, advancesTypes,registrationTypes];
