import React, { useState } from "react";
import Styles from "../../styles/accountantStyles";
import { Grid, Input, Typography } from "@mui/material";
import LeftNavBarAccountanContainer from "../../containers/leftNavBarAccountanContainer";
function AccountantView(props) {
  const classes = Styles();
  const {
    //state
    getCategory,
    //actions
    addCategory,
  } = props;
  const [categories, setCategories] = useState(getCategory);
  const [inputCategory, setInputCategory] = useState();
  const handledAddCategory = () => {
    if (
      validateInput(inputCategory, 3, 10) &&
      checkIfTheCategoryNoExists(inputCategory)
    ) {
      const updatedCategories = [...categories, inputCategory]; // Crea una nueva matriz con el nuevo registro agregado al final
      setCategories(updatedCategories); // Actualiza el estado de categories con la nueva matriz de categorías
      addCategory(inputCategory);
    }
  };
  const validateInput = (inputValue, minLong, maxLong) => {
    //     if (!inputValue) {
    //       console.log("El input no puede estar vacío");
    //       return false;
    //     }
    //     // Verificar si el input tiene caracteres especiales
    //     const specialCharsRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    //     const hasSpecialChars = specialCharsRegex.test(inputValue);
    //     // Verificar si el input tiene la cantidad de digitos aceptada
    //     const longMaxAccepted = inputValue && inputValue.length > maxLong;
    //     const longMinAccepted = inputValue && inputValue.length < minLong;
    //     // Validar el resultado de ambas verificaciones
    //     if (hasSpecialChars) {
    //       console.log("El input contiene caracteres especiales");
    //       return false;
    //     } else if (longMinAccepted) {
    //       console.log(`El input tiene menos de ${minLong} dígitos`);
    //       return false;
    //     } else if (longMaxAccepted) {
    //       console.log(`El input tiene más de ${maxLong} dígitos`);
    //       return false;
    //     } else {
    //       console.log("El input es válido");
    //       return true;
    //     }
  };
  const checkIfTheCategoryNoExists = (category) => {
    const isCategoryNoExists = !categories.includes(category); // verifica que no este la categori ene l arreglo
    console.log("no existe", isCategoryNoExists);
    return isCategoryNoExists;
  };
  return (
    <>
      <Grid className={classes.root}>
        <LeftNavBarAccountanContainer />
        <Grid>
          <Grid>Acountant </Grid>
          <Grid>
            <Typography>Nueva Categoria</Typography>
            <Input
              onChange={(e) => {
                setInputCategory(e.currentTarget.value);
              }}
            ></Input>
            <button onClick={handledAddCategory}>ADD NEW CATEGORY</button>
          </Grid>
          <Grid>
            {categories.map((cat, index) => (
              <Grid key={index + 1}>
                cat N°{index}: {cat}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default AccountantView;

// import React, { useState } from "react";
// import {
//   Popover,
//   TextField,
//   Checkbox,
//   Button,
//   Box,
// } from "@mui/material";

// function AccountantView() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [inputValue, setInputValue] = useState("");
//   const [checked, setChecked] = useState(false);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleCheckboxChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   const handleButtonSubmit = () => {
//     // Lógica para manejar el botón de enviar aquí
//     console.log("Input:", inputValue);
//     console.log("Checked:", checked);
//     handleClose();
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "popover" : undefined;

//   return (
//     <div>
//       <Button onClick={handleClick}>Abrir ventana emergente</Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <TextField
//             label="Input"
//             value={inputValue}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <Checkbox checked={checked} onChange={handleCheckboxChange} />
//           <Button onClick={handleButtonSubmit}>Enviar</Button>
//         </Box>
//       </Popover>
//     </div>
//   );
// }

// export default AccountantView;
