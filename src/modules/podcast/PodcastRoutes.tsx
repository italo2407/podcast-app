import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PodcastDetail } from "./pages/PodcastDetail";
import { EpisodeList } from "./pages/EpisodeList";
import { EpisodeDetail } from "./pages/EpisodeDetail";

export function PodcastRoutes() {
  return (
    <Routes>
      <Route element={<Home />} index />
      <Route element={<PodcastDetail />} path="podcast/:podcastId">
        <Route element={<EpisodeList />} index />
				<Route element={<EpisodeDetail />} path="episode/:episodeId" />
      </Route>
    </Routes>
  );
}
