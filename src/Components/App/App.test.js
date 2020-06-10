import React from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
// import { fetchData } from "../../ApiCalls.js";

// jest.mock("../../ApiCalls.js");

describe("App", () => {


//   beforeEach(() => {
//     fetchData.mockResolvedValue({
//       data: [
//
//           {
//             city: "Bentonville",
// date: "2020-06-01",
// date_text: "June 1st",
// edit_at: "https://github.com/2020PB/police-brutality/blob/master/reports/Arkansas.md",
// id: "ar-bentonville-1",
// links: ["https://twitter.com/courtenay_roche/status/1267653137969623040", "https://twitter.com/yagirlbrookie09/status/1267647898365427714", "https://www.4029tv.com/article/bentonville-police-deploy-tear-gas-on-protesters/32736629#"],
// name: "Law enforcement gas a crowd chanting “we want peace” right after exiting the building.",
// state: "Arkansas"
//           }
//
//        ]
//   });
//   })


  it("Should render the app", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText("Incident Reports")).toBeInTheDocument();
  });

  it("Should render the drop down", () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(getByText("Select a state:")).toBeInTheDocument();
});

it("Should display go button upon changing drop down to a state", async () => {
  const { getByText, getByPlaceholderText, getByTitle, getByDisplayValue, getByRole, getByTestId, container, getByLabelText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  fireEvent.change(getByLabelText("Select a state:"), {
    target: { value: "Colorado" },
  });
  const goButton = await waitFor(() => getByTitle("go-button"));
  expect(goButton).toBeInTheDocument();
 });

it("Should display city buttons after clicking go", async () => {
  const { getByText, getByPlaceholderTexts, getAllByTitle, getByTitle, getByLabelText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  fireEvent.change(getByLabelText("Select a state:"), {
    target: { value: "Arkansas" },
  });
  const goButton = await waitFor(() => getByTitle("go-button"));
  fireEvent.click(goButton);
  const cityHeader = await waitFor(() => getByText("No incidents reported in Arkansas."));
  expect(cityHeader).toBeInTheDocument();
});




})
