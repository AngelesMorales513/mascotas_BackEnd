import pool from '../database/database'

class AuthDAO {

    public async getUser(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, password, cveMascota, nombreMascota,fechaAdopcion ,raza, cveRaza, nombreRaza FROM usuario LEFT JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario LEFT JOIN raza ON mascota.raza = raza.cveRaza WHERE usuario.username = ?", [usuario]);
        });

        return result;
    }

    public async getUserById(cveUsuario: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM usuario WHERE cveUsuario = ?', [cveUsuario]);
        });

        return result;
    }

}

export const dao = new AuthDAO();