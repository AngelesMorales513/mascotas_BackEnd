import pool from "../database/database";

class MascotaDao {
    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, raza, cveRaza, nombreRaza  FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN raza ON mascota.raza = raza.cveRaza ORDER BY usuario.nombre, usuario.apellidos ASC");
        });

        return result;
    }
}

export const dao = new MascotaDao(); 