import pool from "../../db/connect.js";

export const createClientHouseHold = async (
  id,
  Loan,
  Education,
  Rent,
  Medical,
  Others,
  Total,
  TotalIncome,
  TotalExpenses,
  Balance,
  customerId
) => {
  try {
    const sql = `INSERT INTO clientHouseHoldDetails (
      id,
      Loan,
      Education,
      Rent,
      Medical,
      Others,
      Total,
      TotalIncome,
      TotalExpenses,
      Balance,
      customerId
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const [result] = await pool.query(sql, [
      id,
      Loan,
      Education,
      Rent,
      Medical,
      Others,
      Total,
      TotalIncome,
      TotalExpenses,
      Balance,
      customerId,
    ]);

    return result; // Return the ID of the inserted row
  } catch (error) {
    throw new Error("Error creating client house hold details in the database");
  }
};

export const getAllClientHouseHold = async () => {
  try {
    const sql = "SELECT * FROM clientHouseHoldDetails";
    const [rows] = await pool.query(sql);

    return rows; // Return all client house hold details
  } catch (error) {
    throw new Error(
      "Error retrieving client house hold details from the database"
    );
  }
};

export const getClientHouseHoldById = async (id) => {
  try {
    const sql = "SELECT * FROM clientHouseHoldDetails WHERE id = ?";
    const [rows] = await pool.query(sql, [id]);

    if (rows.length === 0) {
      return null; // If no client house hold details found with the given ID, return null
    }

    const clientHouseHold = rows[0]; // Fetch the first (and only) row

    return clientHouseHold; // Return the client house hold details
  } catch (error) {
    throw new Error(
      "Error retrieving client house hold details from the database"
    );
  }
};

export const updateClientHouseHoldById = async (id, updatedFields) => {
  const {
    Loan,
    Education,
    Rent,
    Medical,
    Others,
    Total,
    TotalIncome,
    TotalExpenses,
    Balance,
    customerId,
  } = updatedFields;

  const updateFields = {};
  if (Loan !== undefined) updateFields.Loan = Loan;
  if (Education !== undefined) updateFields.Education = Education;
  if (Rent !== undefined) updateFields.Rent = Rent;
  if (Medical !== undefined) updateFields.Medical = Medical;
  if (Others !== undefined) updateFields.Others = Others;
  if (Total !== undefined) updateFields.Total = Total;
  if (TotalIncome !== undefined) updateFields.TotalIncome = TotalIncome;
  if (TotalExpenses !== undefined) updateFields.TotalExpenses = TotalExpenses;
  if (Balance !== undefined) updateFields.Balance = Balance;
  if (customerId !== undefined) updateFields.customerId = customerId;

  try {
    const fieldEntries = Object.entries(updateFields);
    const fieldValues = fieldEntries.map(([key, value]) => value);
    fieldValues.push(id);

    const updateQuery = `UPDATE clientHouseHoldDetails SET ${fieldEntries
      .map(([key]) => `${key} = ?`)
      .join(", ")} WHERE id = ?`;

    const [result] = await pool.query(updateQuery, fieldValues);

    if (result.affectedRows === 0) {
      return null; // If no client house hold details were updated, return null
    }

    // If client house hold details were updated, fetch and return the updated details
    const updatedClientHouseHold = await getClientHouseHoldById(id);
    return updatedClientHouseHold;
  } catch (error) {
    throw new Error("Error updating client house hold details in the database");
  }
};

export const deleteClientHouseHoldById = async (id) => {
  try {
    const sql = "DELETE FROM clientHouseHoldDetails WHERE id = ?";
    const [result] = await pool.query(sql, [id]);

    if (result.affectedRows === 0) {
      return false; // If no client house hold details were deleted, return false
    }

    return true; // Return true indicating successful deletion
  } catch (error) {
    throw new Error(
      "Error deleting client house hold details from the database"
    );
  }
};
