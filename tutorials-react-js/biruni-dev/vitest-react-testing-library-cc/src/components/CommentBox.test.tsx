import { render, screen } from "@testing-library/react";
import CommentBox from "./CommentBox";

describe("CommentBox Unit Test", () => {
  it("should render the textarea", () => {
    const mockAddComponentFn = vi.fn();
    render(<CommentBox onAddComment={mockAddComponentFn} />);
    const textarea = screen.getByTestId("comment-input");
    expect(textarea).toBeDefined();
  });

  it("should render the submit button", () => {
    const mockAddComponentFn = vi.fn();
    render(<CommentBox onAddComment={mockAddComponentFn} />);
    const btnSubmit = screen.getByTestId("btn-comment-form");
    expect(btnSubmit).toBeInTheDocument();
    expect(btnSubmit).toBeVisible();
  });
});
