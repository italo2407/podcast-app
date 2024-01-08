import { ResponseError } from "src/shared/utils/response-error";
import { Podcast } from "../domain/podcast";
import { mapperPodcast } from "../mapper/podcast.mapper";
import { PodcastEpisode } from "../domain/podcastEpisode";
import { BASE_URL } from "src/shared/const/base-url";

export class PodcastService {
  constructor() {}

  async getTop100(): Promise<Podcast[]> {
    const response = await fetch(
      `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (response.ok) {
      return mapperPodcast(result.feed.entry);
    }
    throw new ResponseError(
      "Failed to fetch getTop100 from PodcastService",
      response
    );
  }

  async getEpisodesByPodcastId(podcastId: string): Promise<PodcastEpisode[]> {
    const response = await fetch(
      `${BASE_URL}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (response.ok) {
      return result.results.slice(1, result.results.length);
    }
    throw new ResponseError(
      "Failed to fetch getTop100 from PodcastService",
      response
    );
  }
}
