'use strict'
const User = use('App/Models/User');
const Hash = use('Hash');

class UserController {
    async index({response}) {
        let users = await User.all();
        return response.json(users);
    }

    async show({params, response}) {
        const user = await User.find(params.id);
        return response.json(user);
    }

    async store({request, response }) {
        const userInfo = request.only(['name', 'last_name', 'username', 'email', 'password'])

        const user= new User();
        user.name = userInfo.name;
        user.last_name = userInfo.last_name;
        user.username = userInfo.username;
        user.email = userInfo.email;
        user.password = userInfo.password;

        await user.save()

        return response.status(201).json(user);
    }

    async update({params, request, response}) {
        const userInfo = request.only(['name', 'last_name', 'username', 'email', 'password'])

        const user = await User.find(params.id);

        if(!user) {
            return response.status(404).json({data: "Usuario no encontrado!"});
        }

        user.name = userInfo.name;
        user.last_name = userInfo.last_name;
        user.username = userInfo.username;
        user.email = userInfo.email;
        user.password = userInfo.password;

        await user.save();

        return response.status(200).json(user);
    }

    async login({params, request, response}) {
        const userInfo = request.only(['email', 'password']);
        const user = await User.findBy('email', userInfo.email);
    
        if(!user) {
            return response.status(404).json({data: "Usuario no encontrado!"});
        }
        const isSamePass = await Hash.verify(userInfo.password, user.password);


        if(isSamePass) {
            user.password = userInfo.password;            
            return response.status(200).json(user);
        }
        
        return response.status(422).json({Password: "Password incorrecta!"});

    }

    async delete({params, response }){
        const user = await User.find(params.id)
        if (!user) {
            return response.status(404).json({data: "Usuario no encontrado!"});
        }
        await user.delete()

        return response.status(204).json(null); 
    }

}


module.exports = UserController
