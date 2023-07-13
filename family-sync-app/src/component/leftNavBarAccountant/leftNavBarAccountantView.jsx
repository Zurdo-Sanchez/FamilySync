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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
  const [showCategory, setShowCategories] = useState(true); // true = show income - false = shew expense

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;
  const inputPopoverOpen = showInputPopover && open;
  const inputPopoverId = inputPopoverOpen ? "input-popover" : undefined;

  useEffect(() => {
    setCategories(() => getCategory);
  }, [loading, getCategory, setCategories]);

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
    setShowCategories(value === "Income" ? 1 : 0);
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

  const handleShowCategory = (value) => {
    setShowCategories(value);
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.containerTitle}>
        <Typography className={classes.title}>CONTROL DE GASTOS</Typography>
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
          <Button onClick={handleClick}>Agregar Categoria</Button>
          <Grid>
            <Grid className={classes.containerSubTitle}>
              <Typography
                className={classes.buttonIncome}
                onClick={() => handleShowCategory(1)}
                data-testid={"category-income"}
              >
                Ingresos
              </Typography>
              <Typography
                className={classes.buttonExpense}
                onClick={() => handleShowCategory(0)}
                data-testid={"category-expense"}
              >
                Egresos
              </Typography>
            </Grid>
            <Grid
              className={
                showCategory
                  ? classes.containerIncome
                  : classes.containerExpense
              }
            >
              {categories &&
                categories
                  .filter(
                    (cat) => cat.group === (showCategory ? "Income" : "Expense")
                  )
                  .map((cat, index) => (
                    <Grid
                      className={classes.containerItemOption}
                      key={index + 1}
                    >
                      <Grid className={classes.itemsList}>{cat.name}</Grid>
                      <DeleteForeverIcon
                        id={`delete-button-${cat.id}`}
                        onClick={() => deleteCategory(cat.id)}
                        data-testid={`delete-icon-${cat.group}-${index + 1}`}
                      />
                    </Grid>
                  ))}
            </Grid>
          </Grid>

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
              data-testid={`first-popover`}
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
                inputProps={{
                  "data-testid": "new-category", // Aquí está el atributo correcto
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
