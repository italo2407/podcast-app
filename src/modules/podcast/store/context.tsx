import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProviderInterface } from "../../main/store/context";
import { FC } from "react";

export interface PodcastProviderInterface extends AppProviderInterface {}

const PodcastProvider: FC<PodcastProviderInterface> = ({
  children,
}: PodcastProviderInterface) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        //gcTime: 1000 * 60 * 60 * 24, // 24 hours
        //staleTime: 2000,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { PodcastProvider };
