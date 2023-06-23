import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import CommunityPage from ".";

describe("Post Card component", () => {
  beforeEach(() => {
    render(<CommunityPage />);
  });
  afterEach(() => {
    cleanup();
  });
  it("Display card div", () => {
    const elem = screen.getByRole("div");
    expect(elem).toBeInTheDocument();
  });
});
