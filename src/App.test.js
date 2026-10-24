import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("workflow selector switches the illustrative content and selected state", () => {
  render(<App />);
  const evaluate = screen.getByRole("button", { name: "Evaluate" });
  fireEvent.click(evaluate);
  expect(evaluate).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button", { name: "Test" })).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  expect(screen.getByText("Agent responses")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Create" }));
  expect(screen.getByText("An idea worth making")).toBeInTheDocument();
});

test("mobile navigation opens and closes after selecting a section", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Menu" }));
  expect(screen.getByRole("button", { name: "Close" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  fireEvent.click(screen.getByRole("link", { name: "About" }));
  expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
});

test("contact and resume destinations use verified source information", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /Say hello/ })).toHaveAttribute(
    "href",
    "mailto:gupta.akash258258@gmail.com",
  );
  expect(
    screen.getByRole("link", { name: /Meet me on LinkedIn/ }),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/akash-guptag/");
  expect(screen.getByRole("link", { name: /Read my résumé/ })).toHaveAttribute(
    "href",
    "/Akash-Gupta-Resume.pdf",
  );
});
