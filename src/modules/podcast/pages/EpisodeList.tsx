import { useEffect } from "react";
import { useGlobalAppDispatch } from "src/modules/main/store/context";
import { useParams } from "react-router-dom";
import { useEpisodes } from "../hooks/useEpisodes";
import { AppActions } from "src/modules/main/store/reducer";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { EpisodeTable } from "../components/EpisodeTable";

export function EpisodeList() {
  const dispacthApp = useGlobalAppDispatch();
  const { podcastId } = useParams();
  const { episodes, isLoading } = useEpisodes(podcastId || "");

  useEffect(() => {
    dispacthApp({
      type: isLoading ? AppActions.StartFetching : AppActions.FinishedFetching,
    });
  }, [dispacthApp, isLoading]);

  return (
    <Stack spacing={3}>
      <Card sx={{padding: 2}}>
        <Typography variant="h6" component="div">
          Episodes: {episodes.length}
        </Typography>
      </Card>
			<EpisodeTable episodes={episodes}/>
    </Stack>
  );
}
