import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export function PodcastRoutes() {
  return (
    <Routes>
      <Route element={<Home />} index />
    </Routes>
  );
}
