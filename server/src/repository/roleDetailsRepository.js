import pool from "../../db/connect.js";

export const createRole = async (roleId, roleTitle, createdOn, createdBy) => {
  try {
    const sql =
      "INSERT INTO roleDetails (id, RoleTitle, CreatedOn, CreatedBy) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query(sql, [
      roleId,
      roleTitle,
      createdOn,
      createdBy,
    ]);
    console.log(sql);

    return result; // Return the ID of the inserted row
  } catch (error) {
    throw new Error("Error creating role in the database");
  }
};
