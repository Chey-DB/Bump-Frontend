import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import CommunityPage from ".";
import { PostCard } from "../../components";

const mockData = [
  {
    key: "123asd",
    id: "123asd",
    user_id: "asd123",
    title: "testing title",
    content: "testing content",
    image: "https://www.google.com/",
    comments: [],
    question: false,
    createdAt: "23/-6/2023",
    updatedAt: "23/-6/2023",
  },
];

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

  it("test getPosts", () => {
    const mockFetchData = jest
      .spyOn(CommunityPage, "getPosts")
      .mockImplementation(async () => {
        return [
          {
            name: "kunal",
          },
        ];
      });
  });
});
