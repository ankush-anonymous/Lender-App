import { StatusCodes } from "http-status-codes";
import { nanoid } from "nanoid";
import * as employeeRepository from "../repository/employeeRepository.js";

export const loginEmployee = async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    const { token, role } = await employeeRepository.loginUser(
      phoneNumber,
      password
    );

    if (!token) {
      res.status(404).json({ message: "User not found" }); // Sending 404 if user is not found
      return;
    }

    // Send a 201 status upon successful login with the token and a success message
    res
      .status(201)
      .json({ token: token, role: role, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: `Error logging in: ${error.message}` });
  }
};

export const registerEmployee = async (req, res) => {
  try {
    const generatedId = nanoid(6)
      .replace(/[^a-zA-Z0-9]/g, "")
      .substring(0, 7);

    const { name, phoneNumber, email, photo, address, govtId, Role, password } =
      req.body;

    const { generatedId: customerId, token } =
      await employeeRepository.createEmployee(
        generatedId,
        name,
        phoneNumber,
        email,
        photo,
        address,
        govtId,
        Role,
        password
      );

    const responseMessage = `Data inserted: success. Employee ID: ${customerId}`;

    res
      .status(StatusCodes.OK)
      .json({ message: responseMessage, generatedId: customerId, token });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error registering employee", error: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const { phoneNumber, EmailAddr, Role } = req.query; // Extract query parameters

    const { employees, count } = await employeeRepository.getAllEmployees({
      phoneNumber,
      EmailAddr,
      Role,
    });

    const responseMessage = `Retrieved ${count} employees`;

    res
      .status(StatusCodes.OK)
      .json({ message: responseMessage, employees, count });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error retrieving employees", error: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params; // Access the id from URL parameters
    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid ID provided" });
    }

    const employee = await employeeRepository.getEmployeeById(id);

    if (!employee) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Employee not found" });
    }

    res.status(StatusCodes.OK).json({ message: "Employee found", employee });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error retrieving employee", error: error.message });
  }
};

export const updateEmployeeById = async (req, res) => {
  try {
    const { id } = req.params; // Access the id from URL parameters
    const updatedFields = req.body; // Fields to be updated

    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid ID provided" });
    }

    const updatedEmployee = await employeeRepository.updateEmployeeById(
      id,
      updatedFields
    );

    if (!updatedEmployee) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Employee not found or not updated" });
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error updating employee", error: error.message });
  }
};

export const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params; // Access the id from URL parameters
    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid ID provided" });
    }

    const deletionStatus = await employeeRepository.deleteEmployeeById(id);

    if (!deletionStatus) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Employee not found or already deleted" });
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "Employee deleted successfully" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error deleting employee", error: error.message });
  }
};
