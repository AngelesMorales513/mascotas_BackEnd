import pool from "../database/database";

class MascotaDao {
    public async listaByUsuario(username: string) {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, raza, cveRaza, nombreRaza FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN raza ON mascota.raza = raza.cveRaza WHERE usuario.username = ?", [username]);
        });

        return result;
    }

    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, raza, cveRaza, nombreRaza FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN raza ON mascota.raza = raza.cveRaza");
        });

        return result;
    }
}

export const daoM = new MascotaDao(); 