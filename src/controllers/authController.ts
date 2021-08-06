import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import secretKey from '../config/jwkey';
import { dao } from '../dao/authDao';   
// import { daoM } from '../dao/mascotasDao';
import { utils } from '../utils/utils';

class AuthController {

    public async login(req: Request, res: Response){
        const { username, password, nombre, apellidos } = req.body;
        //console.log(username, password);
        if (username == null || password == null) {
            return res.status(400).json({ message: "Datos incorrectos" });
        }

        const users = await dao.getUser(username);
        /*const mascotas = await daoM.listaByUsuario(username);
        if(mascotas.length <= 0) {
            return res.status(400).json({ message: "Aún no tiene mascotas en adopción" });
        }*/
        // Verificar si existe el usuario
        if (users.length <= 0) {
            return res.status(400).json({ message: "El usuario no existe" });   
        }
        console.log(users);

        for(let user of users) {
            if(await utils.checkPassword(password, user.password)){

                //for (let mascota of mascotas) {
                const token = jwt.sign({cveUsuario : user.cveUsuario, username}, secretKey.jwtSecret, {expiresIn : '1h'});
                return res.json({ message : "OK", token, cveUsuario : user.cveUsuario, username,  nombre: user.nombre, apellidos: user.apellidos, nombreMascota: user.nombreMascota, nombreRaza: user.nombreRaza, fechaAdopcion: user.fechaAdopcion});

               

            } else {
                return res.status(400).json({message : "La contraseña NO es correcta"});
            }
        }
    }

}

export const authController = new AuthController();