import pool from "../../db/connect.js";

export const createCenterEntry = async (
  id,
  centerCode,
  centerName,
  IFSC,
  TotalAmount
) => {
  try {
    const sql = `INSERT INTO centerDetails (id, centerCode, centerName, IFSC, TotalAmount) VALUES (?, ?, ?, ?, ?)`;
    const [result] = await pool.query(sql, [
      id,
      centerCode,
      centerName,
      IFSC,
      TotalAmount,
    ]);
    return result;
  } catch (error) {
    throw new Error("Error creating center entry in the database");
  }
};

export const getAllCenterEntries = async () => {
  try {
    const sql = "SELECT * FROM centerDetails";
    const [rows] = await pool.query(sql);
    return rows;
  } catch (error) {
    throw new Error("Error retrieving center entries from the database");
  }
};

export const getCenterEntryById = async (id) => {
  try {
    const sql = "SELECT * FROM centerDetails WHERE id = ?";
    const [rows] = await pool.query(sql, [id]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    throw new Error("Error retrieving center entry from the database");
  }
};

export const updateCenterEntryById = async (id, updatedFields) => {
  try {
    const fieldEntries = Object.entries(updatedFields);
    const fieldValues = fieldEntries.map(([key, value]) => value);
    fieldValues.push(id);

    const updateQuery = `UPDATE centerDetails SET ${fieldEntries
      .map(([key]) => `${key} = ?`)
      .join(", ")} WHERE id = ?`;
    const [result] = await pool.query(updateQuery, fieldValues);

    if (result.affectedRows === 0) {
      return false;
    }
    return true;
  } catch (error) {
    throw new Error("Error updating center entry in the database");
  }
};

export const deleteCenterEntryById = async (id) => {
  try {
    const sql = "DELETE FROM centerDetails WHERE id = ?";
    const [result] = await pool.query(sql, [id]);

    if (result.affectedRows === 0) {
      return false;
    }
    return true;
  } catch (error) {
    throw new Error("Error deleting center entry from the database");
  }
};
