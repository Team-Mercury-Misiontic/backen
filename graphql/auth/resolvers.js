import { UserModel } from '../../models/users/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';


const resolverAuthentication={
    Mutation:{
        register: async (parent,args)=>{
          const usuarioEcontrado = await UserModel.findOne({ correo: args.correo }); 
        	if(usuarioEcontrado){
          		throw new Error('Este correo ya fue registrado');
        	}else{
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
          }  
        },
        login: async (parent, args) => {
        const usuarioEcontrado = await UserModel.findOne({ correo: args.correo }); 
        if(!usuarioEcontrado){
          throw new Error('El usuario no existe');
        }
        const passwordCorrecto = await bcrypt.compare(args.password, usuarioEcontrado.password);    
            if (!passwordCorrecto) {
                throw new Error('El password es incorrecto');
              }else{
                return {
                  token: generateToken({
                    _id: usuarioEcontrado._id,
                    nombre: usuarioEcontrado.nombre,
                    apellido: usuarioEcontrado.apellido,
                    identificacion: usuarioEcontrado.identificacion,
                    correo: usuarioEcontrado.correo,
                    rol: usuarioEcontrado.rol,
                  }),
              }
            }
          },
      
          refreshToken: async (parent, args, context) => {
            console.log('contexto', context);
            if(!context.userData){
              return {
                error: 'token no valido'
              };
            }else{
              return{
                token: generateToken({
                  _id: context.userData._id,
                  nombre: context.userData.nombre,
                  apellido: context.userData.apellido,
                  identificacion: context.userData.identificacion,
                  correo: context.userData.correo,
                  rol: context.userData.rol,
                }),
              }
            }
          },
    },
};

export {resolverAuthentication};