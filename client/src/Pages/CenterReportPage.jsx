import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar";
import {
  Box,
  Grid,
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
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";

const inverstorPieChartData = [
  { id: 0, value: 10, label: "series A" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];
const clientPieChartData = [
  { id: 0, value: 10, label: "series A" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
  { id: 3, value: 20, label: "series C" },
  { id: 4, value: 20, label: "series C" },
];

const CenterReportPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedSalesExecRow, setSelectedSalesExecRow] = useState(null);

  const [centerName, setCenterName] = useState("");
  const [centerCode, setCenterCode] = useState("");
  const [centerIncharge, setCenterIncharge] = useState("");

  const handleCenterRadioChange = (event, value, row) => {
    setSelectedValue(value);
    setSelectedSalesExecRow(row);
  };
  const handleSalesExecRadioChange = (event, value, row) => {
    setSelectedValue(value);
    setSelectedSalesExecRow(row);
  };
  const [addCenterDialogue, setAddCenterDialogue] = useState(false);
  const [addSalesExecDialogue, setAddSalesExecDialogue] = useState(false);
  const [knowClientDtlsDialogue, setKnowClientDtlsDialogue] = useState(false);

  const handleKnowClientDtlsDialogueClose = () => {
    setKnowClientDtlsDialogue(false);
  };

  // transition for know client details modal
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  // Clear the selection when changing the page
  useEffect(() => {
    setSelectedValue(null);
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const alternateRowColor = (index) => {
    const backgroundColor = index % 2 === 0 ? "grey.300" : "#f2f2f2"; // Black and grayish colors
    const textColor = index % 2 === 0 ? "white" : "black"; // White and black text colors
    return { backgroundColor, color: textColor };
  };

  const SalesExecDtlRows = [
    {
      salesExecId: "qwert1234",
      Name: "Muthukumaran S",
      Contact: "1234567891",
      amount: 50000,
    },
    {
      salesExecId: "qwert1235",
      Name: "test2",
      Contact: "1234567892",
      amount: 50000,
    },
    // Add more centerDtlRows as needed
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

  const clientDtlRows = [
    {
      ID: "1",
      SalesExecID: "SE001",
      dateOfLoan: "2022-01-01",
      DayOfCollection: "2022-01-15",
      CenterID: "C001",
      CustomerID: "Cust001",
      LoanAmount: 5000.0,
      Interest: 5.0,
      CurrentPayCount: 2,
      PayCount: 12,
      PrincipalAmount: 3000.0,
      Status: "Active",
    },
    {
      ID: "2",
      SalesExecID: "SE002",
      dateOfLoan: "2022-02-01",
      DayOfCollection: "2022-02-15",
      CenterID: "C002",
      CustomerID: "Cust002",
      LoanAmount: 8000.0,
      Interest: 8.0,
      CurrentPayCount: 4,
      PayCount: 10,
      PrincipalAmount: 6000.0,
      Status: "Inactive",
    },
    // Add more objects as needed
  ];

  return (
    <>
      <AdminNavbar />
      {/* Center Details */}
      <Box sx={{ marginTop: "70px" }}>
        <section className="CenterDetails">
          <Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
                padding: "20px",
              }}
            >
              <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md={8}>
                  <Box
                    sx={{
                      height: "100%",
                      backgroundColor: "#5F8D4E",
                      width: "100%",
                      display: "flex-col",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        minHeight: "20px",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="h4">Center Details</Typography>
                    </Box>

                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow
                            sx={{ backgroundColor: "black", color: "white" }}
                          >
                            <TableCell style={{ color: "white" }}>
                              Slno
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              CenterId
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              CenterName
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              IFSCcode
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Amount
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Select
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {centerDtlRows
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
                                <TableCell>
                                  <RadioGroup
                                    value={selectedValue} // Add state to manage the selected radio button
                                    onChange={(event) =>
                                      handleCenterRadioChange(
                                        event,
                                        row.centerId,
                                        row
                                      )
                                    }
                                  >
                                    <FormControlLabel
                                      value={row.centerId}
                                      control={<Radio />}
                                      label=""
                                    />
                                  </RadioGroup>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={centerDtlRows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableContainer>
                    <Box sx={{ marginTop: "10px", textAlign: "right" }}>
                      <Button
                        variant="contained"
                        onClick={() => setAddCenterDialogue(true)}
                        sx={{
                          backgroundColor: "#285430",
                          "&:hover": {
                            backgroundColor: "#224B0C",
                          },
                        }}
                      >
                        Add Center
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      height: "600px",
                      backgroundColor: "#A4BE7B",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        backgroundColor: "white",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      {/* Content for the white box */}
                      <Typography variant="h5">Investor's data</Typography>
                      <PieChart
                        series={[
                          {
                            data: inverstorPieChartData,
                            highlightScope: {
                              faded: "global",
                              highlighted: "item",
                            },
                            faded: {
                              innerRadius: 20,
                              additionalRadius: -30,
                              color: "gray",
                            },
                          },
                        ]}
                        height={150}
                      />
                      <Typography variant="h5">
                        Sales Executive's data
                      </Typography>

                      <PieChart
                        series={[
                          {
                            data: clientPieChartData,
                            highlightScope: {
                              faded: "global",
                              highlighted: "item",
                            },
                            faded: {
                              innerRadius: 20,
                              additionalRadius: -30,
                              color: "gray",
                            },
                          },
                        ]}
                        height={150}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </section>
      </Box>

      {/* Sales Executives & CLient Details */}
      <Box>
        <section>
          <Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
                padding: "20px",
              }}
            >
              <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      height: "100%",
                      backgroundColor: "#5F8D4E",
                      width: "100%",
                      display: "flex-col",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        minHeight: "20px",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="h4">
                        Sales Executives Details
                      </Typography>
                    </Box>

                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow
                            sx={{ backgroundColor: "black", color: "white" }}
                          >
                            <TableCell style={{ color: "white" }}>
                              Select
                            </TableCell>

                            <TableCell style={{ color: "white" }}>
                              Name
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Contact
                            </TableCell>

                            <TableCell style={{ color: "white" }}>
                              Amount
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {SalesExecDtlRows.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          ).map((row, index) => (
                            <TableRow
                              key={row.salesExecId} // Use salesExecId as the key
                              sx={alternateRowColor(index)} // Apply styles here
                            >
                              <TableCell>
                                <RadioGroup
                                  value={selectedValue}
                                  onChange={(event) =>
                                    handleSalesExecRadioChange(
                                      event,
                                      row.salesExecId,
                                      row
                                    )
                                  }
                                >
                                  <FormControlLabel
                                    value={row.salesExecId}
                                    control={<Radio />}
                                    label=""
                                  />
                                </RadioGroup>
                              </TableCell>
                              <TableCell>{row.Name}</TableCell>
                              <TableCell>{row.Contact}</TableCell>
                              <TableCell>{row.amount}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={centerDtlRows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableContainer>
                    <Box sx={{ marginTop: "10px", textAlign: "right" }}>
                      <Button
                        variant="contained"
                        onClick={() => setAddSalesExecDialogue(true)}
                        sx={{
                          backgroundColor: "#285430",
                          "&:hover": {
                            backgroundColor: "#224B0C",
                          },
                        }}
                      >
                        Add Sales Executive
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Box
                    sx={{
                      height: "100%",
                      backgroundColor: "#A4BE7B",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        minHeight: "20px",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="h5">Client Details</Typography>
                    </Box>

                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow
                            sx={{ backgroundColor: "black", color: "white" }}
                          >
                            <TableCell style={{ color: "white" }}>
                              Slno
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Name
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Loan Date
                            </TableCell>

                            <TableCell style={{ color: "white" }}>
                              Payable Amount
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Status
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {clientDtlRows
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => (
                              <TableRow
                                key={row.CustomerID}
                                sx={alternateRowColor(index)} // Apply styles here
                              >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.CustomerName}</TableCell>
                                <TableCell>{row.dateOfLoan}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.Status}</TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={clientDtlRows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableContainer>
                    <Box sx={{ marginTop: "10px", textAlign: "right" }}>
                      <Button
                        variant="contained"
                        onClick={() => setKnowClientDtlsDialogue(true)}
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
          </Box>
        </section>
      </Box>

      {/* Modal to add Center */}
      <Dialog
        open={addCenterDialogue}
        onClose={() => setAddCenterDialogue(false)}
      >
        <DialogTitle>Add Center</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter Center details:</DialogContentText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              minWidth: "100px",
              width: "500px",
              marginTop: "5px",
            }}
          >
            <TextField
              label="Center Name*"
              value={centerName}
              onChange={(e) => setCenterName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Center Code*"
              value={centerCode}
              onChange={(e) => setCenterCode(e.target.value)}
              fullWidth
            />
            <TextField
              label="Center Incharge"
              value={centerIncharge}
              onChange={(e) => setCenterIncharge(e.target.value)}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "#285430" }}
            onClick={() => setAddCenterDialogue(false)}
          >
            Cancel
          </Button>
          <Button
            // onClick={handleSaveUser}
            // color="white"
            sx={{
              color: "white",
              backgroundColor: "#285430",
              "&:hover": {
                backgroundColor: "#224B0C",
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal to add sales Executive  */}
      <Dialog
        open={addSalesExecDialogue}
        onClose={() => setAddSalesExecDialogue(false)}
      >
        <DialogTitle>Add Sales Executive</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter Sales Executive details:
          </DialogContentText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              minWidth: "100px",
              width: "500px",
              marginTop: "5px",
            }}
          >
            <TextField
              label="Sales Executive Name*"
              value={centerName}
              onChange={(e) => setCenterName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Center Name*"
              value={centerCode}
              onChange={(e) => setCenterCode(e.target.value)}
              fullWidth
            />
            <TextField
              label="Contact No."
              value={centerIncharge}
              onChange={(e) => setCenterIncharge(e.target.value)}
              fullWidth
            />
            <TextField
              label="Address"
              value={centerIncharge}
              onChange={(e) => setCenterIncharge(e.target.value)}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "#285430" }}
            onClick={() => setAddSalesExecDialogue(false)}
          >
            Cancel
          </Button>
          <Button
            // onClick={handleSaveUser}
            // color="white"
            sx={{
              color: "white",
              backgroundColor: "#285430",
              "&:hover": {
                backgroundColor: "#224B0C",
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Full Screen Modal for Client details */}
      <Dialog
        fullScreen
        open={knowClientDtlsDialogue}
        onClose={handleKnowClientDtlsDialogueClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#5F8D4E" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleKnowClientDtlsDialogueClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Client Details
            </Typography>
          </Toolbar>
        </AppBar>

        <Box p={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "black", color: "white" }}>
                  <TableCell style={{ color: "white" }}>Slno</TableCell>
                  <TableCell style={{ color: "white" }}>Name</TableCell>
                  <TableCell style={{ color: "white" }}>Loan Date</TableCell>

                  <TableCell style={{ color: "white" }}>
                    Collection Day
                  </TableCell>

                  <TableCell style={{ color: "white" }}>
                    Principal Amount
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Interest</TableCell>
                  <TableCell style={{ color: "white" }}>
                    Payable Amount
                  </TableCell>
                  <TableCell style={{ color: "white" }}>PayCount</TableCell>
                  <TableCell style={{ color: "white" }}>Status</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {clientDtlRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={row.CustomerID}
                      sx={alternateRowColor(index)} // Apply styles here
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.CustomerName}</TableCell>
                      <TableCell>{row.dateOfLoan}</TableCell>
                      <TableCell>{row.DayOfCollection}</TableCell>
                      <TableCell>{row.PrincipalAmount}</TableCell>
                      <TableCell>{row.Interest}</TableCell>
                      <TableCell>{row.PrincipalAmount}</TableCell>
                      <TableCell>{row.PayCount}</TableCell>
                      <TableCell>{row.Status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Dialog>
    </>
  );
};

export default CenterReportPage;
