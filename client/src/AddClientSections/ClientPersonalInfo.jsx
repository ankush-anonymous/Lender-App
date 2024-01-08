import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const ClientPersonalInfo = ({ activeStep }) => {
  const [centerName, setCenterName] = useState("");
  const [cutomerID, setCutomerID] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [isTatchedHouse, setIsTatchedHouse] = useState("");
  const [isRoofTiles, setIsRoofTiles] = useState("");
  const [isMetalsheetsRoof, setIsMetalsheetsRoof] = useState("");
  const [isCementSheetsRoof, setIsCementSheetsRoof] = useState("");
  const [isCementConcreteCeil, setIsCementConcreteCeil] = useState("");
  const [isHindu, setIsHindu] = useState("");
  const [isMuslim, setIsMuslim] = useState("");
  const [isChristian, setIsChristian] = useState("");
  const [isOthers, setIsOthers] = useState("");
  const [isMarried, setIsMarried] = useState("");
  const [isSingle, setIsSingle] = useState("");
  const [isWidow, setIsWidow] = useState("");
  const [isDivorced, setIsDivorced] = useState("");
  const [isSeparate, setIsSeparate] = useState("");
  const [address, setAddress] = useState("");
  const [isOwned, setIsOwned] = useState("");
  const [isRented, setIsRented] = useState("");
  const [residenceCustYr, setResidenceCustYr] = useState("");
  const [mobileNo1, setMobileNo1] = useState("");
  const [mobileNo2, setMobileNo2] = useState("");

  const handleSaveData = () => {
    // Create an object to hold all the data
    const clientPersonalData = {
      CenterName: centerName,
      CutomerID: cutomerID,
      CustomerName: customerName,
      SpouseName: spouseName,
      FatherName: fatherName,
      MotherName: motherName,
      DateOfBirth: dateOfBirth,
      Age: age,
      isTatchedHouse: isTatchedHouse,
      isRoofTiles: isRoofTiles,
      isMetalsheetsRoof: isMetalsheetsRoof,
      isCementSheetsRoof: isCementSheetsRoof,
      isCementConcreteCeil: isCementConcreteCeil,
      isHindu: isHindu,
      isMuslim: isMuslim,
      isChristian: isChristian,
      isOthers: isOthers,
      isMarried: isMarried,
      isSingle: isSingle,
      isWidow: isWidow,
      isDivorced: isDivorced,
      isSeparate: isSeparate,
      Address: address,
      isOwned: isOwned,
      isRented: isRented,
      ResidenceCustYr: residenceCustYr,
      MobileNo1: mobileNo1,
      MobileNo2: mobileNo2,
      // ... add other fields here
    };
    // Perform action to save data here (e.g., send to API, update state, etc.)
    console.log(clientPersonalData); // Log data for demonstration purposes
  };

  return (
    <Box
      p={5}
      id="client-personal-info"
      style={{ display: activeStep === 0 ? "block" : "none" }}
    >
      {/* Personal info */}
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
        <TextField
          label="Center Name"
          value={centerName}
          onChange={(e) => setCenterName(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ width: "250px" }}
        />
        <br />
        <TextField
          label="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          margin="normal"
          sx={{ width: "350px", marginRight: "10px" }}
        />
        <TextField
          label="Spouse Name"
          value={spouseName}
          onChange={(e) => setSpouseName(e.target.value)}
          margin="normal"
          sx={{ width: "350px" }}
        />
        <br />
        <TextField
          label="Father Name"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          margin="normal"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <TextField
          label="Mother Name"
          value={motherName}
          onChange={(e) => setMotherName(e.target.value)}
          margin="normal"
          sx={{ width: "250px", marginRight: "10px" }}
        />
        <TextField
          type="date"
          label="Date of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
        <TextField
          type="number"
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          margin="normal"
          sx={{ width: "200px", marginRight: "10px" }}
        />
      </Box>
      <br />
      {/* House Status */}
      {/* ... Rest of the code for House Status */}
      {/* Religion */}
      {/* ... Rest of the code for Religion */}
      {/* Martial Status */}
      {/* ... Rest of the code for Martial Status */}
      {/* Address */}
      {/* ... Rest of the code for Address */}
      {/* Mobile Number */}
      {/* ... Rest of the code for Mobile Number */}
      <Box>
        <Button onClick={handleSaveData}>Save Data</Button>
      </Box>
      {/* Add more TextField or other input components for each field */}
      {/* Display completion message or complete step button */}
    </Box>
  );
};

export default ClientPersonalInfo;
