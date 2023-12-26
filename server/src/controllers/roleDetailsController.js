import { StatusCodes } from "http-status-codes";
import * as roleDetailsRepository from "../repository/roleDetailsRepository.js";
import { nanoid } from "nanoid";

export const createRole = async (req, res) => {
  try {
    const { roleTitle, createdOn, createdBy } = req.body;

    if (!roleTitle || !createdBy) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "RoleTitle and CreatedBy are required fields",
      });
    }

    const roleId = nanoid(10); // Generate a 10-character ID using nanoid

    const result = await roleDetailsRepository.createRole(
      roleId,
      roleTitle,
      createdOn,
      createdBy
    );

    if (result) {
      return res
        .status(StatusCodes.CREATED)
        .json({ message: "Role created successfully", roleId });
    } else {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to create role" });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error creating role", error: error.message });
  }
};
