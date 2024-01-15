import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const ClientBankDtls = ({ activeStep }) => {
  const [clAccountDetails, setClAccountDetails] = useState("");
  const [clIFSC, setClIFSC] = useState("");
  const [clBranchName, setClBranchName] = useState("");
  const [clBankName, setClBankName] = useState("");

  const handleSaveData = async () => {
    // Create an object to hold all the data
    const clientPersonalData = {
      clAccountDetails,
      clIFSC,
      clBranchName,
      clBankName,
      clientID: localStorage.getItem("CustomerId"), // Corrected assignment
      // ... add other fields here
    };

    try {
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <Box p={5} id="client-bank-details">
        {/* Account Details */}
        <Box
          sx={{
            border: "1px solid #ccc",
            p: 2,
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Account Details
          </Typography>
          <TextField
            label="Account Details"
            value={clAccountDetails}
            onChange={(e) => setClAccountDetails(e.target.value)}
            margin="normal"
            variant="outlined"
            sx={{ width: "250px" }}
          />
        </Box>

        {/* IFSC Details  */}
        <Box
          sx={{
            border: "1px solid #ccc",
            p: 2,
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            IFSC
          </Typography>
          <TextField
            label="IFSC Details"
            value={clIFSC}
            onChange={(e) => setClIFSC(e.target.value)}
            margin="normal"
            variant="outlined"
            sx={{ width: "250px" }}
          />
        </Box>

        {/* Branch Name */}
        <Box
          sx={{
            border: "1px solid #ccc",
            p: 2,
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Bank's Branch Name
          </Typography>
          <TextField
            label="Branch Name"
            value={clBranchName}
            onChange={(e) => setClBranchName(e.target.value)}
            margin="normal"
            variant="outlined"
            sx={{ width: "250px" }}
          />
        </Box>

        {/* Bank Name */}
        <Box
          sx={{
            border: "1px solid #ccc",
            p: 2,
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Bank's Name
          </Typography>
          <TextField
            label="Bank Name"
            value={clBankName}
            onChange={(e) => setClBankName(e.target.value)}
            margin="normal"
            variant="outlined"
            sx={{ width: "250px" }}
          />
        </Box>
      </Box>
      <Button variant="outlined" onClick={handleSaveData}>
        Save Data
      </Button>
    </>
  );
};

export default ClientBankDtls;
