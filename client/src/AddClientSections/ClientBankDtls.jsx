import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import axios from "axios";

const ClientBankDtls = ({ activeStep }) => {
  const [accountNo, setAccountNo] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [branchName, setBranchName] = useState("");
  const [bankName, setBankName] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  //for alerts
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const clientId = localStorage.getItem("CustomerId");

  const handleSaveData = async () => {
    // Create an object to hold all the data
    const clientBankDtls = {
      AccountNo: accountNo,
      IFSC: ifsc,
      BranchName: branchName,
      BankName: bankName,
    };

    try {
      const response = await axios.patch(
        `/api/v1/client/bankdetails/updateClientBankDetailsById/${clientId}`,
        clientBankDtls
      );
      console.log(response.data);
      localStorage.setItem("BankID: ", response.data.id);
      setIsSaved(true);
      setSuccessMessage(
        "Client Bank Details Updated Successfully. Proceed Further."
      );
      setShowSuccess(true);
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
            Account Number
          </Typography>
          <TextField
            label="Account Number"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
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
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
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
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
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
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            margin="normal"
            variant="outlined"
            sx={{ width: "250px" }}
          />
        </Box>
      </Box>
      {showAlert && <Alert severity="error">{alertMessage}</Alert>}
      {showSuccess && <Alert severity="success">{successMessage}</Alert>}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "5px",
        }}
      >
        {!isSaved ? (
          <Button variant="outlined" onClick={handleSaveData}>
            Save Data
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleSaveData}>
            Update Data
          </Button>
        )}
      </Box>
    </>
  );
};

export default ClientBankDtls;
