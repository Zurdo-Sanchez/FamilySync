import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Popover,
  TextField,
  Checkbox,
  Button,
  Box,
  Grid,
  Typography,
  Backdrop,
  InputAdornment,
} from "@mui/material";

import Styles from "../../styles/leftNavBarAccountantStyles";

function LeftNavBarAccountantView(props) {
  const classes = Styles();
  const {
    // state
    getCategory,
    // actions
    addCategory,

    categories,
    setCategories,
  } = props;

  // State configuration
  const maxCharacterLength = 10;
  const minCharacterLength = 3;
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [group, setGroup] = useState(false);
  const [showInputPopover, setShowInputPopover] = useState(false);

  useEffect(() => {
    setCategories(getCategory);
  }, [categories]);

  // Event handler for opening the popover
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler for closing the popover
  const handleClose = () => {
    setAnchorEl(null);
    setShowInputPopover(false);
  };

  // Event handler for input change
  const handleInputChange = (event) => {
    if (inputValue.length < 10) setInputValue(event.target.value);
  };

  // Event handler for selecting a group
  const handleSelectGroup = (value) => {
    setGroup(value);
    setShowInputPopover(true);
  };

  // Event handler for adding a category
  const handledAddCategory = () => {
    addCategory(inputValue);
    setInputValue("");
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;
  const inputPopoverOpen = showInputPopover && open;
  const inputPopoverId = inputPopoverOpen ? "input-popover" : undefined;

  return (
    <Grid className={classes.root}>
      <Grid>
        <Button>LOGOUT</Button>
      </Grid>
      <Grid>
        <Button onClick={handleClick}>Add Category</Button>
        <Backdrop open={open} sx={{ zIndex: 1, backdropFilter: "blur(4px)" }}>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Button onClick={() => handleSelectGroup("Income")}>
                Income
              </Button>
              <Button onClick={() => handleSelectGroup("Expense")}>
                Expense
              </Button>
            </Box>
          </Popover>
        </Backdrop>
        <Popover
          id={inputPopoverId}
          open={inputPopoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography>New {group}</Typography>
            <TextField
              label="New Category"
              value={inputValue}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {inputValue.length}/{maxCharacterLength}
                  </InputAdornment>
                ),
              }}
            />
            {inputValue.length < minCharacterLength && (
              <Typography>Minimum {minCharacterLength} characters</Typography>
            )}
            <Button onClick={() => handledAddCategory()}>Add</Button>
          </Box>
        </Popover>
      </Grid>
      <Grid>
        <Button>LOGOUT</Button>
      </Grid>
    </Grid>
  );
}

// Specify the types of required props
LeftNavBarAccountantView.propTypes = {
  getCategory: PropTypes.array.isRequired,
  addCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default LeftNavBarAccountantView;
