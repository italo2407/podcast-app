import { Routes, Route } from "react-router-dom";
import { Podcast } from "../podcast/Podcast";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Podcast />} path="/" />
    </Routes>
  );
}
