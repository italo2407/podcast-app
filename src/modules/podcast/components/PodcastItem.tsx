import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface PodcastItemProps {
  image: string;
  title: string;
  author: string;
}

export function PodcastItem({ image, title, author }: PodcastItemProps) {
  return (
    <Box sx={{ position: "relative", flex: 1}}>
      <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{
          width: 120,
          height: 120,
          position: "absolute",
          top: -50,
          left: "20%",
        }}
      />
      <Card sx={{ width: 250 }}> 
        <CardActionArea>
          <CardContent sx={{ marginTop: 7 }}>
            <Typography
              gutterBottom
              variant="button"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              Author: {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
