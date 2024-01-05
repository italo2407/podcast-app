import { ResponseError } from "../../../shared/utils/response-error";
import { Podcast } from "../domain/podcast";
import { BaseService } from "./BaseService";

export class PodcastService extends BaseService {
  constructor() {
    super();
  }

  async getTop100(): Promise<Podcast[]> {
    const response = await fetch(
      `${this.baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (response.ok) {
      console.log("Result Podcast");
      console.log(result);
    }

    this.logError(result);
    throw new ResponseError(
      "Failed to fetch getTop100 from PodcastService",
      response
    );
  }
}
