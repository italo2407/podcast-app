import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Podcast } from "../domain/podcast";
import { PodcastService } from "../service/PodcastService";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../shared/enum/query-keys";
import { mapError } from "../../../shared/mappers/error.mapper";

export interface UsePodcasts {
  podcasts: Podcast[];
  isLoading: boolean;
  isFetching: boolean;
  error?: string;
  setPodcastFilter: Dispatch<SetStateAction<string | null>>;
}

export const usePodcasts = (): UsePodcasts => {
  const [podcastFilter, setPodcastFilter] = useState<string | null>(null);
  const podcastService = new PodcastService();
  const filterPodcastBYAuthorOrName = useCallback(
    (items: Podcast[]) => {
      if (!podcastFilter) return items;
      return items.filter(
        (item) =>
          item.author.toLowerCase().includes(podcastFilter.toLowerCase()) ||
          item.name.toLowerCase().includes(podcastFilter.toLowerCase())
      );
    },
    [podcastFilter]
  );

  const {
    data: podcasts = [],
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: [QueryKeys.PODCASTS],
    queryFn: podcastService.getTop100,
    select: filterPodcastBYAuthorOrName,
  });

  return {
    podcasts,
    isLoading,
    isFetching,
    error: mapError(error),
    setPodcastFilter,
  };
};
