import React from "react";
import { render } from "@testing-library/react";
import CityIncidents from "./CityIncidents";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("City Incidents", () => {
  it("Should render the City incidents", () => {
    const { getByText } = render(
      <BrowserRouter>
      <CityIncidents
      cityName={"Dover"}
      incidents={[
        {city: "Dover",
        date: "2020-06-09",
        date_text: "June 9th",
        edit_at: "https://github.com/2020PB/police-brutality/blob/master/reports/Delaware.md",
        id: "de-dover-1",
links: ["https://www.usatoday.com/story/news/nation/2020/06…ay-network-reporter-arrested-delaware/5331163002/", "https://v.redd.it/u78faokca3451"],
name: "USA Today journalist arrested",
state: "Delaware"
}
      ]}
      savedStories={{}}
stateName={"Delaware"}

      />
      </BrowserRouter>
    );
    expect(getByText("Stories")).toBeInTheDocument();
    expect(getByText("Go Back")).toBeInTheDocument();
  });
});
