import { UserModel } from '../../models/users/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';


const resolverAuthentication={
    Mutation:{
        register: async (parent,args)=>{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(args.password,salt);
            const userCreated= await UserModel.create({
                nombre: args.nombre,
                apellido:args.apellido,
                identificacion: args.identificacion,
                correo:args.correo,
                rol:args.rol,
                password: hashedPassword,
            });
            return {
                token: generateToken({
                    _id: userCreated._id,
                    nombre: userCreated.nombre,
                    apellido: userCreated.apellido,
                    identificacion: userCreated.identificacion,
                    correo: userCreated.correo,
                    rol: userCreated.rol,
                  }),
            };
        },
        login: async (parent, args) => {
            const usuarioEcontrado = await UserModel.findOne({ correo: args.correo });
            if (await bcrypt.compare(args.password, usuarioEcontrado.password)) {
              return {
                token: generateToken({
                  _id: usuarioEcontrado._id,
                  nombre: usuarioEcontrado.nombre,
                  apellido: usuarioEcontrado.apellido,
                  identificacion: usuarioEcontrado.identificacion,
                  correo: usuarioEcontrado.correo,
                  rol: usuarioEcontrado.rol,
                }),
              };
            }
          },
      
          validateToken: async (parent, args, context) => {
            console.log('contexto', context);
          },
    },
};

export {resolverAuthentication};