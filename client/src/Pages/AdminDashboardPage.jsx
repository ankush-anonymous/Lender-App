import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { PieChart, Pie, Cell } from "recharts";

import SalesExeTableComponent from "../Components/SalesExeTableComponent";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      {/* Header Section */}
      <section className="header">
        <Box
          sx={{
            marginTop: "70px",
            backgroundColor: "grey.200",
            width: "100%",
            minHeight: "20px",
            padding: "20px",
          }}
        >
          <Typography variant="h5">Hi Admin</Typography>
        </Box>
      </section>
      <section className="ChartSection">
        <Box>
          {/* Adjust the marginTop to make sure the content is below the navbar */}
          <Box
            sx={{
              backgroundColor: "grey.200",
              width: "100%",
              minHeight: "40vh",
              padding: "20px", // Adding padding to create space around the cards
            }}
          >
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={6}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "white",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px", // Padding for the inner Box
                    borderRadius: "10px",
                  }}
                >
                  <Card variant="outlined" sx={{ width: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Money Floating with clients:
                      </Typography>
                      <Typography
                        variant="h3"
                        component="div"
                        sx={{ textAlign: "right" }}
                      >
                        <CurrencyRupeeIcon fontSize="large" /> 250,000
                      </Typography>
                      <Box
                        sx={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <PieChart width={200} height={200}>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={40} // Define innerRadius
                            outerRadius={50}
                            fill="#596FB7"
                            label
                          />
                          <Pie
                            data={[{ value: 100 }]}
                            cx="50%"
                            cy="50%"
                            innerRadius={0}
                            outerRadius={40} // Define outerRadius
                            fill="transparent" // Set the inner circle to transparent
                          />
                        </PieChart>
                      </Box>
                      <Box sx={{ marginTop: "20px", textAlign: "right" }}>
                        <Button variant="contained" color="primary">
                          Explore
                        </Button>
                      </Box>
                      {/* New content ends here */}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "white",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px", // Padding for the inner Box
                  }}
                >
                  <Card variant="outlined" sx={{ width: "100%" }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Money from investors:
                      </Typography>
                      <Typography
                        variant="h3"
                        component="div"
                        sx={{ textAlign: "right" }}
                      >
                        <CurrencyRupeeIcon fontSize="large" /> 250,000
                      </Typography>
                      <Box
                        sx={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <PieChart width={200} height={200}>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={40} // Define innerRadius
                            outerRadius={50}
                            fill="#176B87"
                            label
                          />
                          <Pie
                            data={[{ value: 100 }]}
                            cx="50%"
                            cy="50%"
                            innerRadius={0}
                            outerRadius={40} // Define outerRadius
                            fill="transparent" // Set the inner circle to transparent
                          />
                        </PieChart>
                      </Box>
                      <Box sx={{ marginTop: "20px", textAlign: "right" }}>
                        <Button variant="contained" color="primary">
                          Explore
                        </Button>
                      </Box>
                      {/* New content ends here */}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>
      <section>
        <Box sx={{ backgroundColor: "grey.400", p: 2 }}>
          <Grid container spacing={2}>
            {/* Box occupying 3/5th */}
            <Grid item xs={7}>
              <Box
                sx={{
                  backgroundColor: "white",
                  height: "200px",
                  padding: "20px",
                  height: "550px",
                }}
              >
                <Box>
                  <Typography variant="h5" fontWeight="bold" mb={"5px"}>
                    Sales Executives
                  </Typography>
                </Box>
                <SalesExeTableComponent />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "20px", // Adjust spacing as needed
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: "5px" }}
                  >
                    Add More Sales Exec
                  </Button>
                  <Button variant="contained" color="primary">
                    See More
                  </Button>
                </Box>
              </Box>
            </Grid>
            {/* Box occupying 2/5th */}
            <Grid item xs={5}>
              <Box sx={{ backgroundColor: "white", height: "200px" }}>
                {/* Your content for the 2/5th box */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default AdminDashboard;
