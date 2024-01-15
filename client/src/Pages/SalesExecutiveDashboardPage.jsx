import React, { useState } from "react";
import SalesExecNavbar from "../Components/SalesExecNavbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "react-select";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  ListItem,
  List,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SalesExecutiveDashboardPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedCenter, setSelectedCenter] = useState(null);

  const alternateRowColor = (index) => {
    const backgroundColor = index % 2 === 0 ? "grey.300" : "#f2f2f2"; // Black and grayish colors
    const textColor = index % 2 === 0 ? "white" : "black"; // White and black text colors
    return { backgroundColor, color: textColor };
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const listOfCenters = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    // Add more options as needed
  ];

  const handleCenterSelect = (selectedOption) => {
    setSelectedCenter(selectedOption);
    console.log(selectedOption.value);
  };

  const clientColumns = [
    { id: "slno", label: "Slno.", minWidth: 100, align: "center" },
    { id: "name", label: "Name", minWidth: 150, align: "center" },
    {
      id: "phoneNumber",
      label: "Phone Number",
      minWidth: 150,
      align: "center",
    },
    { id: "dateOfLoan", label: "Date of Loan", minWidth: 150, align: "center" },
    { id: "amount", label: "Amount", minWidth: 150, align: "center" },
  ];
  const centerDtlRows = [
    {
      slno: 1,
      centerId: "C001",
      centerName: "Center A",
      IFSCcode: "XYZ123",
      amount: 50000,
    },
    {
      slno: 2,
      centerId: "C002",
      centerName: "Center B",
      IFSCcode: "ABC456",
      amount: 75000,
    },
    {
      slno: 3,
      centerId: "C003",
      centerName: "Center B",
      IFSCcode: "ABC456",
      amount: 75000,
    },
    {
      slno: 4,
      centerId: "C004",
      centerName: "Center B",
      IFSCcode: "ABC456",
      amount: 75000,
    },
    {
      slno: 5,
      centerId: "C005",
      centerName: "Center B",
      IFSCcode: "ABC456",
      amount: 75000,
    },
    // Add more centerDtlRows as needed
  ];

  return (
    <>
      <SalesExecNavbar />
      <Box mt={10}>
        <section>
          <Box
            sx={{
              backgroundColor: "white",
              width: "100%",
              minHeight: "40vh",
              padding: "20px", // Adding padding to create space around the cards
            }}
          >
            <Grid container spacing={2} alignItems="stretch">
              {/* First Grid item on the left */}
              <Grid item xs={12} sm={3}>
                <Box
                  sx={{
                    height: "100px",
                    backgroundColor: "#A4BE7B",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px", // Padding for the inner Box
                    borderRadius: "10px",
                  }}
                >
                  <Select
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: "250px",
                        height: "50px",
                      }),
                    }}
                    value={selectedCenter}
                    onChange={handleCenterSelect}
                    options={listOfCenters}
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: "10px",
                    height: "300px",
                    backgroundColor: "#A4BE7B",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Card sx={{ height: "100%", width: "100%", padding: "10px" }}>
                    <Typography variant="h6">Center Details</Typography>
                    <CardContent>
                      {centerDtlRows.length > 0 && (
                        <div>
                          <Typography variant="h6">
                            Center Name: {centerDtlRows[0].centerName}
                          </Typography>
                          <Typography variant="h6">
                            Center Code: {centerDtlRows[0].centerId}
                          </Typography>
                          <Typography variant="h6">
                            IFSC: {centerDtlRows[0].IFSCcode}
                          </Typography>
                          {/* Add additional details as needed */}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>

              {/* Grid item on the right */}
              <Grid item xs={12} sm={9}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "#5F8D4E",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column", // Stack items vertically
                    alignItems: "flex-end", // Align items to the right
                    padding: "20px", // Padding for the inner Box
                    borderRadius: "10px",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow
                          sx={{ backgroundColor: "black", color: "white" }}
                        >
                          <TableCell style={{ color: "white" }}>Slno</TableCell>
                          <TableCell style={{ color: "white" }}>Name</TableCell>
                          <TableCell style={{ color: "white" }}>
                            PhoneNo
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Address
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            DayOfCollection
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            PayCount
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Update
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {clientColumns
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, index) => (
                            <TableRow
                              key={row.slno}
                              sx={alternateRowColor(index)} // Apply styles here
                            >
                              <TableCell>{row.slno}</TableCell>
                              <TableCell>{row.centerId}</TableCell>
                              <TableCell>{row.centerName}</TableCell>
                              <TableCell>{row.IFSCcode}</TableCell>
                              <TableCell>{row.amount}</TableCell>
                              <TableCell>{row.amount}</TableCell>
                              <TableCell>
                                <Button variant="outlined">Update</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={clientColumns.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </TableContainer>
                  {/* Add user Button */}
                  <Box
                    sx={{
                      marginTop: "10px",
                      justifyContent: "flex-end", // Align the button to the right
                    }}
                  >
                    <Button
                      variant="contained"
                      // onClick={() => setAddCenterDialogue(true)}
                      sx={{
                        backgroundColor: "#285430",
                        "&:hover": {
                          backgroundColor: "#224B0C",
                        },
                        marginRight: "5px",
                      }}
                    >
                      Add User
                    </Button>
                    <Button
                      variant="contained"
                      // onClick={() => setAddCenterDialogue(true)}
                      sx={{
                        backgroundColor: "#285430",
                        "&:hover": {
                          backgroundColor: "#224B0C",
                        },
                      }}
                    >
                      Know More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>
        <section mt={10}></section>
      </Box>
    </>
  );
};

export default SalesExecutiveDashboardPage;
