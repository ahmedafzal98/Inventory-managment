import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

import data from "../../../data/data";
import {
  CheckCircleOutlineOutlined,
  CheckOutlined,
  ModeEdit,
} from "@mui/icons-material";
import SimpleDialogDemo from "../dialog/Dialog";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "image",
    numeric: false,
    disablePadding: false,
    label: "Image",
  },
  {
    id: "p_item",
    numeric: false,
    disablePadding: false,
    label: "Product Item",
  },
  {
    id: "p_id",
    numeric: false,
    disablePadding: false,
    label: "Product ID",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "organization",
    numeric: false,
    disablePadding: false,
    label: "Organization",
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography variant="body2" fontSize="18px" fontWeight={700}>
                {headCell.label}
              </Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Inventory
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton onClick={props.openDialog}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("price");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isEdit, setIsEdit] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState();
  const [editedRow, setEditedRow] = React.useState(null);

  const [filterOrganization, setFilterOrganization] = React.useState("");
  const [filterDate, setFilterDate] = React.useState("");
  const [filterPrice, setFilterPrice] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const HandlOpenDialog = () => {
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {filterOrganization.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton
              onClick={() => handleListItemClick(email)}
            ></ListItemButton>
          </ListItem>
        ))}
        {/* <ListItem disableGutters></ListItem> */}
      </List>
    </Dialog>;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const filteredRows = data.productManagmentDetails.filter((row) => {
    const matchesOrganization =
      !filterOrganization || row.prod_organization.includes(filterOrganization);
    const matchesDate = !filterDate || row.prod_date.includes(filterDate);
    const matchesPrice =
      !filterPrice || row.prod_price.toString().includes(filterPrice);

    return matchesOrganization && matchesDate && matchesPrice;
  });
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage - data.productManagmentDetails.length
        )
      : 0;

  const stableSort = (array, compare) => {
    const indexedArray = array.map((value, index) => ({ value, index }));
    indexedArray.sort((a, b) => {
      const comparison = compare(a.value, b.value);
      if (comparison === 0) {
        return a.index - b.index;
      }
      return comparison;
    });
    return indexedArray.map((item) => item.value);
  };

  const visibleRows = React.useMemo(() => {
    return stableSort(filteredRows, getComparator(order, orderBy));
  }, [filteredRows, order, orderBy]);

  const HandleEditClick = (index, row) => {
    console.log(index);

    setSelectedRow(index);
    setIsEdit(true);
    setEditedRow({ ...row });
  };
  const HandleSaveIcon = (index, updatedRow) => {
    setIsEdit(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          openDialog={HandlOpenDialog}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.productManagmentDetails.length}
            />
            <TableBody>
              {visibleRows &&
                visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row.prod_id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  const isEditable = selectedRow === index && isEdit;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.prod_id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer", padding: "none" }}
                    >
                      <TableCell key={row.prod_id} padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <img
                          src={row.image}
                          alt="Product Image"
                          style={{
                            width: "40px", // Adjust width as needed
                            height: "40px", // Adjust height as needed
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        {isEditable ? (
                          <input
                            type="text"
                            onChange={(e) =>
                              setEditedRow({
                                ...editedRow,
                                name: e.target.value,
                              })
                            }
                            value={editedRow?.name || ""}
                          />
                        ) : (
                          row.name
                        )}
                      </TableCell>

                      <TableCell align="left">{row.prod_id}</TableCell>
                      <TableCell align="left">
                        {isEditable ? (
                          <input
                            type="date"
                            onChange={(e) =>
                              setEditedRow({
                                ...editedRow,
                                date: e.target.value,
                              })
                            }
                            value={editedRow?.date || ""}
                          />
                        ) : (
                          row.date
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {isEditable ? (
                          <input
                            type="number"
                            onChange={(e) =>
                              setEditedRow({
                                ...editedRow,
                                price: e.target.value,
                              })
                            }
                            value={editedRow?.price || 0}
                          />
                        ) : (
                          row.price
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {isEditable ? (
                          <input
                            type="text"
                            onChange={(e) =>
                              setEditedRow({
                                ...editedRow,
                                organization: e.target.value,
                              })
                            }
                            value={editedRow?.organization || ""}
                          />
                        ) : (
                          row.organization
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {isEditable ? (
                          <input
                            type="number"
                            onChange={(e) =>
                              setEditedRow({
                                ...editedRow,
                                qty: e.target.value,
                              })
                            }
                            value={editedRow?.qty || 0}
                          />
                        ) : (
                          row.qty
                        )}
                      </TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">
                        {isEdit && selectedRow === index ? (
                          <CheckOutlined
                            onClick={() => HandleSaveIcon(index, row)}
                          />
                        ) : (
                          <ModeEdit
                            onClick={() => HandleEditClick(index, row)}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.productManagmentDetails.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
