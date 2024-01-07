import { Outlet, useParams } from "react-router-dom";
import { usePodcasts } from "../hooks/usePodcasts";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export function PodcastDetail() {
  const { podcastId } = useParams();
  const { podcasts } = usePodcasts(podcastId);

  return (
    <>
      {podcasts.length > 0 && (
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Card sx={{ width: 250 }}>
              <CardContent>
                <Stack divider={<Divider flexItem />} spacing={2}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 150, height: 150, textAlign: "center" }}
                      image={podcasts[0].imgUrl}
                      alt={podcasts[0].name}
                    />
                  </Stack>

                  <Stack>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {podcasts[0].name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ fontStyle: "italic" }}
                    >
                      by {podcasts[0].author}
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Description:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontStyle: "italic" }}
                    >
                      {podcasts[0].summary}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Outlet></Outlet>
          </Grid>
        </Grid>
      )}
    </>
  );
}
