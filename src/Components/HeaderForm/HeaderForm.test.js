import React from "react";
import { render } from "@testing-library/react";
import HeaderForm from "./HeaderForm";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("HeaderForm", () => {
  it("Should render the header", () => {
    const { getByText } = render(
      <BrowserRouter>
      <HeaderForm
      />
      </BrowserRouter>
    );
    expect(getByText("Incidents of Police Brutality Against Protesters")).toBeInTheDocument();
    expect(getByText("Select a state:")).toBeInTheDocument();
  });
});
