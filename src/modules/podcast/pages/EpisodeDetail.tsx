import { useEffect } from "react";
import { useGlobalAppDispatch } from "src/modules/main/store/context";
import { useParams } from "react-router-dom";
import { useEpisodes } from "../hooks/useEpisodes";
import { AppActions } from "src/modules/main/store/reducer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function EpisodeDetail() {
  const dispacthApp = useGlobalAppDispatch();
  const { podcastId, episodeId } = useParams();
  const { episodes, isLoading } = useEpisodes(
    podcastId || "",
    Number(episodeId)
  );

  useEffect(() => {
    dispacthApp({
      type: isLoading ? AppActions.StartFetching : AppActions.FinishedFetching,
    });
  });

  return (
    episodes.length > 0 && (
      <>
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: 700 }}
            >
              {episodes[0].trackName}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              {episodes[0].description}
            </Typography>
            {/* <video controls>
              <source src={episodes[0].episodeUrl} type="audio/x-wav" />
            </video> */}
            <audio controls style={{ width: "100%", marginTop: 24 }}>
              <source src={episodes[0].episodeUrl} type="audio/mpeg" />
            </audio>
          </CardContent>
        </Card>
      </>
    )
  );
}
