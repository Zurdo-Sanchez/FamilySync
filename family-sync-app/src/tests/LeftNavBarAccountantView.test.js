import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LeftNavBarAccountantView from "../component/leftNavBarAccountant/leftNavBarAccountantView";

import theme from "../utils/Theme"; // Importa el archivo del tema

const mockProps = {
  getCategory: [],
  loading: false,
  addCategory: jest.fn(),
  deleteCategory: jest.fn(),
  categories: [],
  setCategories: jest.fn(),
};

const customRender = (ui) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("LeftNavBarAccountantView", () => {
  test("renders the component correctly", () => {
    customRender(<LeftNavBarAccountantView {...mockProps} />);

    const titleElement = screen.getByText("CONTROL DE GASTOS");
    expect(titleElement).toBeInTheDocument();
  });

  test("calls the deleteCategory function on button click", async () => {
    customRender(
      <LeftNavBarAccountantView
        {...mockProps}
        categories={[{ id: 1, name: "Category 1", group: "Income" }]}
      />
    );

    await waitFor(() => {
      const deleteIcon = screen.queryByTestId("delete-icon-Income-1");
      if (deleteIcon) {
        fireEvent.click(deleteIcon);
        return true;
      }
      return false;
    });

    expect(mockProps.deleteCategory).toHaveBeenCalledWith(1);
  });

  test("calls the addCategory function on button click", () => {
    customRender(<LeftNavBarAccountantView {...mockProps} />);

    const addButton = screen.getByText("Agregar Categoria");
    fireEvent.click(addButton);

    const incomeButton = screen.getByText("Income");
    fireEvent.click(incomeButton);

    const inputField = screen.getByTestId("new-category");
    fireEvent.change(inputField, { target: { value: "New Category" } });

    const addCategoryButton = screen.getByText("Add");
    fireEvent.click(addCategoryButton);

    expect(mockProps.addCategory).toHaveBeenCalledWith({
      group: "Income",
      name: "New Category",
    });
  });

  test("opens the popover on button click", () => {
    customRender(<LeftNavBarAccountantView {...mockProps} />);

    const addButton = screen.getByText("Agregar Categoria");
    fireEvent.click(addButton);

    const popover = screen.getByTestId("first-popover");
    expect(popover).toBeInTheDocument();
  });

  test("selects a category group", () => {
    customRender(<LeftNavBarAccountantView {...mockProps} />);

    const addButton = screen.getByText("Agregar Categoria");
    fireEvent.click(addButton);

    const incomeButton = screen.getByText("Income");
    fireEvent.click(incomeButton);

    const expenseButton = screen.getByText("Expense");
    fireEvent.click(expenseButton);

    const newExpenseButton = screen.getByText("New Expense");
    fireEvent.click(newExpenseButton);

    expect(screen.getByText("New Expense")).toBeInTheDocument();
  });

  test("renders categories based on showCategory value", () => {
    const categories = [
      { id: 1, name: "Category 1", group: "Income" },
      { id: 2, name: "Category 2", group: "Expense" },
    ];

    customRender(
      <LeftNavBarAccountantView {...mockProps} categories={categories} />
    );

    const incomeButton = screen.getByText("Ingresos");
    fireEvent.click(incomeButton);

    const expenseButton = screen.getByText("Egresos");
    fireEvent.click(expenseButton);

    const incomeCategory = screen.queryByTestId("category-income");
    expect(incomeCategory).toBeInTheDocument();

    const expenseCategories = screen.queryAllByTestId("category-expense");
    expect(incomeCategory).toBeInTheDocument();
  });

  // test("handles input change and character limit", () => {
  //   customRender(<LeftNavBarAccountantView {...mockProps} />);

  //   const inputField = screen.getByTestId("new-category"); // Utiliza "new-category" en lugar de "New Category"
  //   fireEvent.change(inputField, { target: { value: "New Category" } });

  //   expect(inputField.value).toBe("New Category");

  //   fireEvent.change(inputField, {
  //     target: { value: "Very long category name" },
  //   });

  //   expect(inputField.value).toBe("New Category");
  // });

  test("logs out on button click", () => {
    customRender(<LeftNavBarAccountantView {...mockProps} />);

    const logoutButton = screen.getByText("LOGOUT");
    fireEvent.click(logoutButton);

    // Agrega tu afirmación para el comportamiento de cierre de sesión aquí
  });
});
