import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Popover,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Backdrop,
  InputAdornment,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Styles from "../../styles/leftNavBarAccountantStyles";

function LeftNavBarAccountantView(props) {
  const classes = Styles();
  const {
    // state
    getCategory,
    loading,
    // actions
    addCategory,
    deleteCategory,
    categories,
    setCategories,
  } = props;

  const [menu, setMenu] = useState(0);

  // State configuration
  const maxCharacterLength = 10;
  const minCharacterLength = 3;
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [group, setGroup] = useState(false);
  const [showInputPopover, setShowInputPopover] = useState(false);

  useEffect(() => {
    setCategories(() => getCategory);
  }, [loading, getCategory]);

  // Event handler for opening the popover
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler for closing the popover
  const handleClose = () => {
    setAnchorEl(null);
    setShowInputPopover(false);
  };
  const handleMenu = (value) => {
    if (menu === value) {
      setMenu(0);
    } else {
      setMenu(value);
    }
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
    const data = {
      group: group,
      name: inputValue,
    };
    addCategory(data);
    setInputValue("");
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;
  const inputPopoverOpen = showInputPopover && open;
  const inputPopoverId = inputPopoverOpen ? "input-popover" : undefined;

  return (
    <Grid className={classes.root}>
      <Grid className={classes.containerTitle}>
        <Button>CONTROL DE GASTOS</Button>
      </Grid>
      <Button
        className={classes.categoriesButton}
        onClick={() => handleMenu(1)}
      >
        {menu === 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />} Categorias{" "}
        {menu === 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Grid>
        <Grid
          className={`${classes.categoriesContainer} ${
            menu === 1 ? classes.categoriesContainerShow : ""
          }`}
        >
          <Button onClick={handleClick}>Add Category</Button>

          {categories &&
            categories.map((cat, index) => (
              <Grid className={classes.containerItemOption}>
                <Grid className={classes.itemsList} key={index + 1}>
                  {cat.name}
                </Grid>
                <button onClick={() => deleteCategory(cat.id)}>delete</button>
              </Grid>
            ))}

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
        <Button
          className={classes.categoriesButton}
          onClick={() => handleMenu(2)}
        >
          Opciones {menu === 2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
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
