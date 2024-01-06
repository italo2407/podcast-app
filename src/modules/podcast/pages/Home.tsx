import { ChangeEvent, useEffect } from "react";
import { usePodcasts } from "../hooks/usePodcasts";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { PodcastItem } from "../components/PodcastItem";
import { useGlobalAppDispatch } from "src/modules/main/store/context";
import { AppActions } from "src/modules/main/store/reducer";
import CustomInput from "src/shared/components/CustomInput";

export function Home() {
  const dispacthApp = useGlobalAppDispatch();
  const { podcasts, isLoading, setPodcastFilter } = usePodcasts();

  useEffect(() => {
    dispacthApp({
      type: isLoading ? AppActions.StartFetching : AppActions.FinishedFetching,
    });
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPodcastFilter(e.target.value);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <Chip
          label={podcasts.length}
          color="secondary"
          sx={{ fontWeight: 700, fontSize: 18 }}
        />
        <CustomInput placeholder="Filter podcasts ..." onChange={onChange} />
      </Stack>
      <Grid
        container
        rowSpacing={15}
        columnSpacing={{ xs: 1, sm: 2 }}
        sx={{ marginTop: 1 }}
      >
        {podcasts.map((item) => (
          <Grid item xs={2}>
            <PodcastItem
              image={item.imgUrl}
              title={item.name}
              author={item.author}
            ></PodcastItem>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
