import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function FilterDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Filter Options</DialogTitle>
      <DialogContent>
        {/* Add filter options content here */}
        <p>Place filter options here.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Apply Filters
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FilterDialog;
