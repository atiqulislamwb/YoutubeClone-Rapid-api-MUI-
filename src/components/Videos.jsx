import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./index";
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((video, id) => (
        <Box>{video.id.videoId && <VideoCard />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
