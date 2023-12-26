import pool from "../../db/connect.js";

export const createEmployee = async (
  generatedId,
  name,
  phoneNumber,
  email,
  photo,
  address,
  govtId,
  role,
  password
) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO empDetails (id, Name, Phone, EmailAddr, Photo, Address, GovtID, Role, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        generatedId,
        name,
        phoneNumber,
        email,
        photo,
        address,
        govtId,
        role,
        password,
      ]
    );

    return result.insertId; // Return the ID of the inserted row
  } catch (error) {
    throw new Error("Error creating employee in the database");
  }
};

export const getAllEmployees = async () => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM empDetails");
    const count = rows.length; // Get the count of rows

    return { employees: rows, count }; // Return employee data and count
  } catch (error) {
    throw new Error("Error retrieving employees from the database");
  }
};

export const getEmployeeById = async (id) => {
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM empDetails WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return null; // If no employee found with the given id, return null
    }

    const employee = rows[0]; // Fetch the first (and only) row

    return employee; // Return the employee data
  } catch (error) {
    throw new Error("Error retrieving employee from the database");
  }
};

export const deleteEmployeeById = async (id) => {
  try {
    const [result] = await pool.query("DELETE FROM empDetails WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return false; // If no employee was deleted, return false
    }

    return true; // Return true indicating successful deletion
  } catch (error) {
    throw new Error("Error deleting employee from the database");
  }
};

export const updateEmployeeById = async (id, updatedFields) => {
  const { name, phoneNumber, email, photo, address, govtId, role, password } =
    updatedFields;

  const updateFields = {};
  if (name) updateFields.Name = name;
  if (phoneNumber) updateFields.Phone = phoneNumber;
  if (email) updateFields.EmailAddr = email;
  if (photo) updateFields.Photo = photo;
  if (address) updateFields.Address = address;
  if (govtId) updateFields.GovtID = govtId;
  if (role) updateFields.Role = role;
  if (password) updateFields.password = password;

  try {
    const [result] = await pool.query("UPDATE empDetails SET ? WHERE id = ?", [
      updateFields,
      id,
    ]);

    if (result.affectedRows === 0) {
      return null; // If no employee was updated, return null
    }

    // If an employee was updated, fetch and return the updated employee
    const updatedEmployee = await getEmployeeById(id);
    return updatedEmployee;
  } catch (error) {
    throw new Error("Error updating employee in the database");
  }
};
