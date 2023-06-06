import HomeTemplateProps from "@/templates/home/props";
import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Navbar from "@/components/Navbar";
import { getCurrentlyPlayingSong } from "@/api/currentlyPlaying";
import CurrentlyPlayingResponse from "@/api/currentlyPlaying/response";
import { HomeConst as C } from "./const";
import Link from "next/link";

const HomeTemplate: FC<HomeTemplateProps> = ({ userData }) => {
  const [currentSong, setcurrentSong] = useState<CurrentlyPlayingResponse>();

  useEffect(() => {
    getCurrentlyPlayingSong().then((data) => setcurrentSong(data));
  }, []);

  useEffect(() => {
    console.log(currentSong);
  }, [currentSong]);

  return (
    <>
      <Navbar {...userData} />
      <S.Container>
        <S.IsPlaying>{C.isPlaying}</S.IsPlaying>
        <S.SongContainer>
          <Link
            href={currentSong?.item.external_urls.spotify || ""}
            target="_blank"
          >
            <S.SongImage
              src={currentSong?.item.album.images[0].url || ""}
              width={424}
              height={424}
              alt="Song image"
            />
            <S.SongName>{currentSong?.item.name}</S.SongName>
          </Link>
          <Link
            target="_blank"
            href={currentSong?.item.artists[0].external_urls.spotify || ""}
          >
            <S.ArtistName>{currentSong?.item.artists[0].name}</S.ArtistName>
          </Link>
        </S.SongContainer>
      </S.Container>
    </>
  );
};

export default HomeTemplate;
