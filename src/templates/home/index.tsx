import HomeTemplateProps from "@/templates/home/props";
import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Navbar from "@/components/Navbar";
import { getCurrentlyPlayingSong } from "@/api/currentlyPlaying";
import CurrentlyPlayingResponse from "@/api/currentlyPlaying/response";
import { HomeConst as C } from "./const";

const HomeTemplate: FC<HomeTemplateProps> = ({ userImage }) => {
  const [currentSong, setcurrentSong] = useState<CurrentlyPlayingResponse>();

  useEffect(() => {
    getCurrentlyPlayingSong().then((data) => setcurrentSong(data));
  }, []);

  useEffect(() => {
    console.log(currentSong);
  }, [currentSong]);

  return (
    <>
      <Navbar userImage={userImage} />
      <S.Container>
        <S.IsPlaying>{C.isPlaying}</S.IsPlaying>
      </S.Container>
    </>
  );
};

export default HomeTemplate;
