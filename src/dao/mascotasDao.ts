import pool from "../database/database";

class MascotaDao {
    public async listaByUsuario(username: string) {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota,fechaAdopcion, raza, cveRaza, nombreRaza FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN raza ON mascota.raza = raza.cveRaza WHERE usuario.username = ?", [username]);
        });

        return result;
    }

    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, nombre, apellidos, username, cveMascota, nombreMascota, raza, cveRaza, nombreRaza FROM usuario JOIN mascota ON usuario.cveUsuario = mascota.cvePropietario JOIN raza ON mascota.raza = raza.cveRaza");
        });

        return result;
    }
    public async insert(mascota: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("INSERT INTO mascota SET ?", [mascota]);
        });
        return result;

    }

    public async update(mascota: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("UPDATE mascota SET ? WHERE cveMascota = ?", [mascota, mascota.cveMascota]); 
        });
        return result;

    }
    public async delete(cveMascota: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query("DELETE FROM mascota WHERE cveMascota = ?", [cveMascota]);
        });

        return result;
    }


}

export const daoM = new MascotaDao(); 