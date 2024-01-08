import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { GlobalAppProvider } from "./store/context";

test("load app", async () => {
  await render(
    <GlobalAppProvider>
      <MemoryRouter>
        <App></App>
      </MemoryRouter>
    </GlobalAppProvider>
  );

  const title = screen.getByText("Podcaster");
  expect(title).toBeInTheDocument();
});
