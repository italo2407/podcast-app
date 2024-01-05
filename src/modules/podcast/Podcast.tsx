import { PodcastProvider } from "./store/context";
import { PodcastRoutes } from "./PodcastRoutes";

export function Podcast() {
  return (
    <PodcastProvider>
      <PodcastRoutes></PodcastRoutes>
    </PodcastProvider>
  );
}
