import { gql } from 'apollo-server-core';
import { enumTypes } from '../models/enums/types';
import { userTypes } from '../models/users/types';
import { projectTypes } from '../models/projects/types';
import { advancesTypes } from '../models/advances/types';
import { registrationTypes } from '../models/registrations/types';

const globalTypes = gql`
	scalar Date
`;

export const types = [globalTypes, enumTypes, userTypes, projectTypes, advancesTypes,registrationTypes];
