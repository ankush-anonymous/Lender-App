import React, { useState } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";

const ClientVerificationDtls = () => {
  const [clSmartCard, setClSmartCard] = useState("");
  const [clAadharCard, setClAadharCard] = useState("");
  const [clVoterId, setClVoterId] = useState("");
  const [clPanCard, setClPanCard] = useState("");
  const [clOthers1, setClOthers1] = useState("");
  const [clOthers2, setClOthers2] = useState("");
  const [grSmartCard, setGrSmartCard] = useState("");
  const [grAadharCard, setGrAadharCard] = useState("");
  const [grVoterId, setGrVoterId] = useState("");
  const [grPanCard, setGrPanCard] = useState("");
  const [grOthers1, setGrOthers1] = useState("");
  const [grOthers2, setGrOthers2] = useState("");

  return (
    <Box
      p={5}
      id="client-id-details"
      sx={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              borderRight: "1px solid #ccc",
              paddingRight: "10px",
              marginRight: "10px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Client Details
            </Typography>
            <TextField
              label="Aadhar Card No"
              value={clAadharCard}
              onChange={(e) => setClAadharCard(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Voter ID No"
              value={clVoterId}
              onChange={(e) => setClVoterId(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="PAN Card No"
              value={clPanCard}
              onChange={(e) => setClPanCard(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 1"
              value={clOthers1}
              onChange={(e) => setClOthers1(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 2"
              value={clOthers2}
              onChange={(e) => setClOthers2(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            {/* Other fields */}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              borderLeft: "1px solid #ccc",
              paddingLeft: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Guarantor Details
            </Typography>
            <TextField
              label="Aadhar Card No"
              value={grAadharCard}
              onChange={(e) => setGrAadharCard(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Voter ID No"
              value={grVoterId}
              onChange={(e) => setGrVoterId(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="PAN Card No"
              value={grPanCard}
              onChange={(e) => setGrPanCard(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 1"
              value={grOthers1}
              onChange={(e) => setGrOthers1(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              label="Other 2"
              value={grOthers2}
              onChange={(e) => setGrOthers2(e.target.value)}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            {/* Other fields */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientVerificationDtls;
