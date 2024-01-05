import { render, screen } from "@testing-library/react";
import App from "./App";
import { GlobalAppProvider } from "./store/context";

test("simple render", () => {
  render(
    <GlobalAppProvider>
      <App></App>
    </GlobalAppProvider>
  );

  expect(screen.getByText("Podcaster")).toBeInTheDocument();
});
