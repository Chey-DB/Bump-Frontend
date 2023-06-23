import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Day from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Day", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Day />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });
  it("Display card div", () => {
    const elem = screen.getByRole("div");
    expect(elem).toBeInTheDocument();
  });
});
