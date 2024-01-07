import { Link } from "react-router-dom";
import { PodcastEpisode } from "../domain/podcastEpisode";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { convertMillisecToMinAndSec } from "src/shared/utils/millisec-to-min-sec";
import { DateTime, Duration } from "luxon";

interface EpisodeTableProps {
  episodes: PodcastEpisode[];
}

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f7f7f7",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function EpisodeTable({ episodes }: EpisodeTableProps) {
  return (
    <Card sx={{ padding: 3 }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((row) => (
              <StyledTableRow key={row.trackId} hover>
                <TableCell>
                  <Link
                    to={`episode/${row.trackId}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      color="secondary"
                      variant="body2"
                      noWrap
                      component="div"
                    >
                      {row.trackName}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell>
                  {DateTime.fromISO(row.releaseDate).toFormat("dd/LL/yyyy")}
                </TableCell>
                <TableCell>
                  {Duration.fromMillis(row.trackTimeMillis).toFormat('hh:mm:ss')}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
