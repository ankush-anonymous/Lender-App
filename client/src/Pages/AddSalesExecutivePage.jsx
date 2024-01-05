import React, { useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Radio from "@mui/material/Radio";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AddSalesExecutivePage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRowSalesExec, setSelectedRowSalesExec] = useState(null);
  const [selectedRowClient, setSelectedRowClient] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [clientPage, setClientPage] = useState(0);
  const [clientRowsPerPage, setClientRowsPerPage] = useState(5);

  const handleChangeClientPage = (event, newPage) => {
    setClientPage(newPage);
  };

  const handleChangeClientRowsPerPage = (event) => {
    setClientRowsPerPage(+event.target.value);
    setClientPage(0);
  };

  const handleAddUser = () => {
    setOpenDialog(true);
  };

  const handleSaveUser = () => {
    // Handle saving new user data here
    console.log("New User Data:", newUserData);
    setOpenDialog(false);
    // Reset input fields after saving if needed
    setNewUserData({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    // Perform save logic here if needed
  };

  // Replace with your data or initialize as needed
  const columns = [
    { id: "slno", label: "Slno.", minWidth: 100 },
    { id: "name", label: "Name", minWidth: 170 },
    { id: "phoneNumber", label: "Phone Number", minWidth: 170 },
    { id: "amountFloated", label: "Amount", minWidth: 170, align: "center" },
  ];

  const createData = (slno, name, phoneNumber, amountFloated) => {
    return { slno, name, phoneNumber, amountFloated };
  };

  const rows = [
    createData(1, "John Doe", "123-456-7890", 500),
    createData(2, "Jne Smith", "987-654-3210", 750),
    createData(3, "Jae Smith", "987-654-2345", 750),
    createData(4, "Jan Smith", "987-654-3212", 753),
    createData(5, "Joe Smith", "987-654-3219", 753),
    // Add more data...
  ];

  const alternateRowColor = (index) => {
    return index % 2 === 0 ? "#f2f2f2" : "#dddddd"; // Grayish and blackish colors
  };

  const handleRowSelectSalesExec = (event, row) => {
    setSelectedRowSalesExec(row.name);
    setSelectedRowData(row);
    console.log(row); // Log the selected row details
  };

  const handleRowSelectClient = (event, row) => {
    setSelectedRowClient(row.phoneNumber); // Set the selected client using row.phoneNumber
    console.log("Selected Client Row:", row); // Log the selected client row details
  };

  const clientColumns = [
    { id: "slno", label: "Slno.", minWidth: 50 },
    { id: "name", label: "Name", minWidth: 100 },
    { id: "phoneNumber", label: "Phone Number", minWidth: 100 },
    { id: "dateOfLoan", label: "Date of Loan", minWidth: 100 },
    { id: "amount", label: "Amount", minWidth: 100, align: "center" },
  ];

  const createClientData = (slno, name, phoneNumber, dateOfLoan, amount) => {
    return { slno, name, phoneNumber, dateOfLoan, amount };
  };

  const clientRows = [
    createClientData(1, "John Doe", "123-456-7890", "2023-01-01", 500),
    createClientData(2, "John Doe", "123-456-7891", "2023-01-01", 500),
    createClientData(3, "John Doe", "123-456-7892", "2023-01-01", 500),
    createClientData(4, "John Doe", "123-456-7893", "2023-01-01", 500),
    createClientData(5, "John Doe", "123-456-7894", "2023-01-01", 500),
    createClientData(6, "John Doe", "123-456-7895", "2023-01-01", 500),
    // Add more client data...
  ];

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
          <Typography variant="h5">Sales Excecutives </Typography>
        </Box>
      </section>

      {/* SalesExecDetails */}
      <section className="SalesExecDetails">
        <Box>
          <Box
            sx={{
              backgroundColor: "grey.200",
              width: "100%",
              height: "680px",
              padding: "20px",
            }}
          >
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={7}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "white",
                    width: "100%",
                    display: "flex-col",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow style={{ backgroundColor: "black" }}>
                            <TableCell style={{ background: "black" }} />
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                  background: "black",
                                  minWidth: column.minWidth,
                                  color: "white",
                                }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.slno}
                              style={{
                                backgroundColor: alternateRowColor(index),
                              }}
                              // Handle selection for Sales Executives table
                              onClick={(event) =>
                                handleRowSelectSalesExec(event, row)
                              }
                            >
                              <TableCell>
                                <Radio
                                  value={row.phoneNumber} // Use a unique identifier for the value
                                  checked={selectedRowSalesExec === row.name} // Compare with the same field used for selection
                                  onChange={(event) =>
                                    handleRowSelectSalesExec(event, row)
                                  }
                                />
                              </TableCell>
                              {columns.map((column) => (
                                <TableCell key={column.id} align={column.align}>
                                  {column.id !== "slno" ? (
                                    <>
                                      {column.format &&
                                      typeof row[column.id] === "number"
                                        ? column.format(row[column.id])
                                        : row[column.id]}
                                    </>
                                  ) : (
                                    <>{row.slno}</>
                                  )}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 15]}
                      component="div"
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                  <Box sx={{ marginTop: "20px", textAlign: "right" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddUser}
                    >
                      Add user
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "white",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "20px",
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
                    }}
                  >
                    <Box>
                      <Grid container spacing={2} alignItems="center">
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Avatar
                            alt="User Logo"
                            src="/path_to_your_user_logo.jpg"
                            sx={{ width: 100, height: 100 }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Name"
                            value={selectedRowData ? selectedRowData.name : ""}
                            disabled={!isEditMode} // Enable/disable based on isEditMode
                            onChange={(e) =>
                              setSelectedRowData({
                                ...selectedRowData,
                                name: e.target.value,
                              })
                            }
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Email"
                            value={selectedRowData ? selectedRowData.email : ""}
                            disabled={!isEditMode} // Enable/disable based on isEditMode
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Phone Number"
                            value={
                              selectedRowData ? selectedRowData.phoneNumber : ""
                            }
                            disabled={!isEditMode} // Enable/disable based on isEditMode
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Address"
                            value={
                              selectedRowData ? selectedRowData.address : ""
                            }
                            disabled={!isEditMode} // Enable/disable based on isEditMode
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Box sx={{ marginTop: "20px", textAlign: "right" }}>
                    {isEditMode ? ( // Conditionally render Save/Edit button based on edit mode
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleEdit}
                      >
                        Edit
                        <EditIcon fontSize="sm" />
                      </Button>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* ClientDetails */}
      <section className="ClientDetails">
        <Box>
          <Box
            sx={{
              backgroundColor: "grey.200",
              width: "100%",
              height: "680px",
              padding: "20px",
            }}
          >
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "white",
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
                      padding: "20px",
                    }}
                  >
                    <Typography variant="h5">Customer Details </Typography>
                  </Box>
                  <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow style={{ backgroundColor: "black" }}>
                            <TableCell style={{ background: "black" }} />
                            {clientColumns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                  background: "black",
                                  minWidth: column.minWidth,
                                  color: "white",
                                }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {clientRows
                            .slice(
                              clientPage * clientRowsPerPage,
                              clientPage * clientRowsPerPage + clientRowsPerPage
                            )
                            .map((row, index) => (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.slno}
                                style={{
                                  backgroundColor:
                                    index % 2 === 0 ? "#f2f2f2" : "#dddddd",
                                }}
                                // Handle selection for Client Details table
                                onClick={(event) =>
                                  handleRowSelectClient(event, row)
                                }
                              >
                                <TableCell>
                                  <Radio
                                    value={row.phoneNumber} // Use a unique identifier for the value
                                    checked={
                                      selectedRowClient === row.phoneNumber
                                    } // Compare with the phoneNumber field used for selection
                                    onChange={(event) =>
                                      handleRowSelectClient(event, row)
                                    }
                                  />
                                </TableCell>
                                {clientColumns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.id !== "slno" ? (
                                      <>{row[column.id]}</>
                                    ) : (
                                      <>{row.slno}</>
                                    )}
                                  </TableCell>
                                ))}
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 15]}
                      component="div"
                      count={clientRows.length}
                      rowsPerPage={clientRowsPerPage}
                      page={clientPage}
                      onPageChange={handleChangeClientPage}
                      onRowsPerPageChange={handleChangeClientRowsPerPage}
                    />
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "white",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "20px",
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
                    }}
                  >
                    {/* Content for the white box */}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* Modal to add user */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter user details:</DialogContentText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              minWidth: "lg",
            }}
          >
            <TextField
              label="Name"
              value={newUserData.name}
              onChange={(e) =>
                setNewUserData({ ...newUserData, name: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Email"
              value={newUserData.email}
              onChange={(e) =>
                setNewUserData({ ...newUserData, email: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Phone Number"
              value={newUserData.phoneNumber}
              onChange={(e) =>
                setNewUserData({ ...newUserData, phoneNumber: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Address"
              value={newUserData.address}
              onChange={(e) =>
                setNewUserData({ ...newUserData, address: e.target.value })
              }
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveUser} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddSalesExecutivePage;
