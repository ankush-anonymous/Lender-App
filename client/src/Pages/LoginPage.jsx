import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#A6CF98",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px", // Set the maximum width here
          width: "100%", // Ensure the Paper takes full width within its container
        }}
      >
        <Box sx={{ display: "flex" }}>
          {/* Left Half with Image */}
          <Box sx={{ width: "50%", height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Login"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          {/* Right Half with Login Form */}
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
              LENDER APP
            </Typography>

            <TextField
              label="Phone Number"
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                style: { borderColor: "#739072" },
              }}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                style: { borderColor: "#739072" },
              }}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: "20px",
                backgroundColor: "#557C55",
                "&:hover": {
                  backgroundColor: "#739072",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
