import React, { useState } from "react";
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
    //state
    getCategory,
    //actions
    addCategory,

    categories,
    setCategories,
  } = props;
  const maxCharacterLength = 10;
  const minCharacterLength = 3;
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [group, setGroup] = useState(false);
  const [showInputPopover, setShowInputPopover] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowInputPopover(false);
  };

  const handleInputChange = (event) => {
    if (inputValue.length < 10) setInputValue(event.target.value);
  };

  const handleSelectGroup = (value) => {
    setGroup(value);
    setShowInputPopover(true);
  };

  const handledAddCategory = () => {
    const updatedCategories = [...categories, inputValue]; // Crea una nueva matriz con el nuevo registro agregado al final
    setCategories(updatedCategories); // Actualiza el estado de categories con la nueva matriz de categorías
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
        <Button onClick={handleClick}>Agregar Categoria</Button>
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
              <Button onClick={() => handleSelectGroup("Ingreso")}>
                Ingreso
              </Button>
              <Button onClick={() => handleSelectGroup("Egreso")}>
                Egreso
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
            <Typography>Nuevo {group}</Typography>
            <TextField
              label="Nueva Categoria"
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
              <Typography>minimo {minCharacterLength} caracteres</Typography>
            )}
            <Button onClick={() => handledAddCategory()}>Agregar</Button>
          </Box>
        </Popover>
      </Grid>
      <Grid>
        <Button>LOGOUT</Button>
      </Grid>
    </Grid>
  );
}

export default LeftNavBarAccountantView;
