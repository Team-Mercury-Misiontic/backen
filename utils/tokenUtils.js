import jwt from 'jsonwebtoken';

const validateToken = (token) => {
  if (token) {
    const verification = jwt.verify(token, 'mercury', (err, data) => {
      if (data) {
        return {
          data: data,
        };
      }
      
      if (err) {
        return {
          error: err,
        };
      }
    });
    console.log("info del token",verification);
    return verification;
  }
};

const generateToken = (payload) => {
  return jwt.sign(payload, 'mercury', {
    expiresIn: '24h',
  });
};

export { generateToken, validateToken };
