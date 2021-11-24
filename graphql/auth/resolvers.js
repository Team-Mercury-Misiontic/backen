

const resolverAuthentication={
    Mutation:{
        register: async (parent,args)=>{
            console.log('Crear Usuario');
            return 'User create';
        },
    },
};

export {resolverAuthentication};