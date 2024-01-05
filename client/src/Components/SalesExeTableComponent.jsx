import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const columns = [
  { id: "slno", label: "Slno.", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "amountFloated",
    label: "Amount Floated",
    minWidth: 170,
    align: "right",
  },
];

function createData(slno, name, amountFloated) {
  return { slno, name, amountFloated };
}

const rows = [
  createData(1, "Frozen yoghurt", 3.99),
  createData(2, "Ice cream sandwich", 4.99),
  createData(3, "Eclair", 3.79),
  createData(4, "Cupcake", 2.5),
  createData(5, "Gingerbread", 1.5),
  createData(5, "Gingerbread", 1.5),
];

export default function SalesExeTableComponent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const alternateRowColor = (index) => {
    return index % 2 === 0 ? "#f2f2f2" : "#dddddd"; // Grayish and blackish colors
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    background: "black",
                    minWidth: column.minWidth,
                    color: "white", // Text color
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.slno}
                  style={{ backgroundColor: alternateRowColor(index) }}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id !== "slno" ? (
                        <>
                          {column.format && typeof row[column.id] === "number"
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
  );
}
