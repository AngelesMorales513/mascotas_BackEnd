import pool from "../database/database";

class GeneralDao {

    public async razas() {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT cveRaza, nombreRaza FROM raza ORDER BY cveRaza ASC")
        });

        return result;
    }

}
 export const dao = new GeneralDao();