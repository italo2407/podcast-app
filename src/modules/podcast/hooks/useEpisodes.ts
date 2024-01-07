import { useQuery } from "@tanstack/react-query";
import { PodcastService } from "../service/PodcastService";
import { mapError } from "src/shared/mappers/error.mapper";
import { useCallback } from "react";
import { PodcastEpisode } from "../domain/podcastEpisode";

export const useEpisodes = (podcastId: string, episodeId?: number) => {
  const podcastService = new PodcastService();
  const filterEpisodeById = useCallback(
    (items: PodcastEpisode[]) => {
      if (episodeId) {
        return items.filter((item) => item.trackId === episodeId);
      }

      return items;
    },
    [episodeId]
  );

  const {
    data: episodes = [],
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["podcast", podcastId],
    queryFn: () => podcastService.getEpisodesByPodcastId(podcastId),
    enabled: !!podcastId,
    select: filterEpisodeById,
  });

  return {
    episodes,
    isLoading,
    isFetching,
    error: mapError(error),
  };
};
