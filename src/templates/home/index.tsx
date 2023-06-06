import { getCurrentlyPlayingSong } from "@/api/currentlyPlaying";
import CurrentlyPlayingResponse from "@/api/currentlyPlaying/response";
import HomeTemplateProps from "@/templates/home/props";
import { FC, useEffect, useState } from "react";

const HomeTemplate: FC<HomeTemplateProps> = ({ access_token }) => {
  const [currentSong, setCurrentSong] = useState<CurrentlyPlayingResponse>();

  useEffect(() => {
    getCurrentlyPlayingSong().then((data) => setCurrentSong(data));
  }, []);

  useEffect(() => {
    console.log(currentSong);
  }, [currentSong]);

  return (
    <>
      {access_token}
      {currentSong?.item.name}
    </>
  );
};

export default HomeTemplate;
