import React from "react";
import { render } from "@testing-library/react";
import USState from "./USState";
import "@testing-library/jest-dom";
import { BrowserRouter, Router } from "react-router-dom";

describe("USState", () => {
  it("Should render the state component", () => {
    const { getByText } = render(
      <BrowserRouter>
      <USState
      stateName={"Colorado"}
      stateIncidents={[
        {
        city: "Colorado Springs",
        date: "2020-06-01",
        date_text: "June 1st",
        edit_at: "https://github.com/2020PB/police-brutality/blob/master/reports/Colorado.md",
        id: "co-coloradosprings-1",
         links: ["https://www.facebook.com/Shawn.R.Russ/videos/10221345617964005/", "https://www.kktv.com/content/news/Colorado-Springs…use-of-force-arrest-during-protest-570969681.html"],
         name: "Multiple cops pin man to ground while repeatedly punching him",
        state: "Colorado"
        }
      ]}
      savedStories={{}}/>
      </BrowserRouter>
    );
    expect(getByText("Colorado")).toBeInTheDocument();
    expect(getByText("Colorado Springs: 1")).toBeInTheDocument();
  });
});
