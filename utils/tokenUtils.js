import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
	return jwt.sign(payload, 'secret', {
		expiresIn: '24h',
	});
};

const validateToken = (token) => {
	if (token) {
		const validation = jwt.verify(token, 'secret', (error, data) => {
			if (data) {
				return {
					data
				};
			}
			if (error) {
				return {
					error,
				};
			}
		});
		return validation;
	}
};

export { generateToken, validateToken };
