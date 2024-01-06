import { ResponseError } from "src/shared/utils/response-error";
import { Podcast } from "../domain/podcast";
import { mapperPodcast } from "../mapper/podcast.mapper";

export class PodcastService {
  constructor() {
  }

  async getTop100(): Promise<Podcast[]> {
    const response = await fetch(
      `${'https://itunes.apple.com'}/us/rss/toppodcasts/limit=100/genre=1310/json`,
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
}
