import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const ClientGuarantorDetails = () => {
  const [guarantorName, setGuarantorName] = useState("");
  const [grSpouseName, setGrSpouseName] = useState("");
  const [grFatherName, setGrFatherName] = useState("");
  const [grMotherName, setGrMotherName] = useState("");
  const [grRelation, setGrRelation] = useState("");
  const [grDateOfBirth, setGrDateOfBirth] = useState("");
  const [grAge, setGrAge] = useState("");
  const [grMobileNo1, setGrMobileNo1] = useState("");
  const [grMobileNo2, setGrMobileNo2] = useState("");
  const [grAddress, setGrAddress] = useState("");
  const [grIsOwned, setGrIsOwned] = useState("");
  const [grIsRented, setGrIsRented] = useState("");

  return (
    <Box p={5} id="client-guarantor-details">
      {/* Guarantor Personal Info */}
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
          Personal Information
        </Typography>
        {/* ... (Existing code for Personal Information) */}
        <TextField
          label="Relation with Client"
          value={grRelation}
          onChange={(e) => setGrRelation(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "250px" }}
        />
        <br />
        <TextField
          label="Guarantor Name"
          value={guarantorName}
          onChange={(e) => setGuarantorName(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "350px", marginRight: "10px" }}
        />
        <TextField
          label="Guarantor's Spouse Name"
          value={grSpouseName}
          onChange={(e) => setGrSpouseName(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "350px" }}
        />
        <br />
        <TextField
          label="Guarantor's Father Name"
          value={grFatherName}
          onChange={(e) => setGrFatherName(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <TextField
          label="Guarantor's Mother Name"
          value={grMotherName}
          onChange={(e) => setGrMotherName(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <TextField
          type="date"
          label="Date of Birth"
          value={grDateOfBirth}
          onChange={(e) => setGrDateOfBirth(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "200px", marginRight: "10px" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="number"
          label="Age"
          value={grAge}
          onChange={(e) => setGrAge(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "200px", marginRight: "10px" }}
        />
      </Box>
      {/* Address */}
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        {/* ... (Existing code for Address) */}
        <Typography
          variant="body2"
          sx={{ marginBottom: 1, fontWeight: "bold" }}
        >
          Address
        </Typography>
        <TextField
          label="Address"
          multiline
          rows={4} // Adjust the number of rows as needed
          value={grAddress}
          onChange={(e) => setGrAddress(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth // Takes the full width of the container
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={grIsOwned} // Use the state directly for checked property
              onChange={(e) => setGrIsOwned(e.target.checked)} // Update the state directly with the checked value
              name="grIsOwned"
            />
          }
          label="Owned"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={grIsRented} // Use the state directly for checked property
              onChange={(e) => setGrIsRented(e.target.checked)} // Update the state directly with the checked value
              name="isRented"
            />
          }
          label="Rented"
        />
      </Box>
      {/* Mobile Number */}
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
          Contact
        </Typography>

        <TextField
          type="number"
          label="Mobile Number"
          value={grMobileNo1}
          onChange={(e) => setGrMobileNo1(e.target.value)}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
        <TextField
          type="number"
          label="Alternate Mobile Number"
          value={grMobileNo2}
          onChange={(e) => setGrMobileNo2(e.target.value)}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default ClientGuarantorDetails;
