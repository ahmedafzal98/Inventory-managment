import { TablePagination } from "@mui/material";
import { useState } from "react";

const Pagination = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{
        "& .MuiTablePagination-toolbar": {
          fontSize: "1.2rem", // Increase font size
          color: "#9499a1", // Set text color
        },
      }}
    />
  );
};

export default Pagination;
