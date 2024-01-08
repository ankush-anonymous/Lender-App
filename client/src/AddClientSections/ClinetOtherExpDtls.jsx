import React, { useState } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";

const ClinetOtherExpDtls = () => {
  const [clLoan, setClLoan] = useState("");
  const [clEducation, setClEducation] = useState("");
  const [clRent, setClRent] = useState("");
  const [clMedical, setClMedical] = useState("");
  const [clOthers, setClOthers] = useState("");
  const [clTotal, setClTotal] = useState("");
  const [clTotalIncome, setClTotalIncome] = useState("");
  const [clTotalExpenses, setClTotalExpenses] = useState("");
  const [clBalance, setClBalance] = useState("");

  return (
    <>
      <Box p={5} id="client-bank-details">
        <Grid container spacing={2}>
          {/* Left column */}
          <Grid item xs={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              {/* Education Amount */}
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
                  Education Amount
                </Typography>
                <TextField
                  type="number"
                  label="Education Amount"
                  value={clEducation}
                  onChange={(e) => setClEducation(e.target.value)}
                  margin="normal"
                  variant="outlined"
                  sx={{ width: "250px" }}
                />
              </Box>

              {/* Rent Amount */}
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
                  Rent Amount
                </Typography>
                <TextField
                  type="number"
                  label="Rent Amount"
                  value={clRent}
                  onChange={(e) => setClRent(e.target.value)}
                  margin="normal"
                  variant="outlined"
                  sx={{ width: "250px" }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right column */}
          <Grid item xs={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              {/* Others */}
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
                  Others
                </Typography>
                <TextField
                  type="number"
                  label="Others"
                  value={clOthers}
                  onChange={(e) => setClOthers(e.target.value)}
                  margin="normal"
                  variant="outlined"
                  sx={{ width: "250px" }}
                />
              </Box>
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
                  Medical Expenses
                </Typography>
                <TextField
                  type="number"
                  label="Medical Expenses"
                  value={clMedical}
                  onChange={(e) => setClMedical(e.target.value)}
                  margin="normal"
                  variant="outlined"
                  sx={{ width: "250px" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ClinetOtherExpDtls;
