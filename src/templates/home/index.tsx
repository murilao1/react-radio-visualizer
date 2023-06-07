import HomeTemplateProps from "@/templates/home/props";
import React, { FC /*, useEffect, useState*/ } from "react";
import * as S from "./styles";
import Navbar from "@/components/Navbar";
import { HomeConst as C } from "./const";
import CustomLink from "@/components/Link";
// import { getCurrentlyPlayingSong } from "@/api/currentlyPlaying";
// import { getUser } from "@/api/user";

const HomeTemplate: FC<HomeTemplateProps> = ({ userData, currentSong }) => {
  const { is_playing, item } = currentSong;

  // const [current, setCurrent] = useState<any>();
  // const [user, setUser] = useState<any>();

  // useEffect(() => {
  //   getCurrentlyPlayingSong().then((current) => setCurrent(current));
  //   getUser().then((user) => setUser(user));
  // }, []);

  // useEffect(() => {
  //   console.log(current);

  //   return () => {};
  // }, [current]);

  // useEffect(() => {
  //   console.log(user);

  //   return () => {};
  // }, [user]);

  const getContent = () => {
    if (!is_playing) return <S.NotPlaying>{C.notPlaying}</S.NotPlaying>;
    if (!item) return;

    const { external_urls, album, artists, name } = item;

    return (
      <S.SongContainer>
        <CustomLink href={external_urls.spotify}>
          <S.SongImage
            src={album.images[0].url}
            width={424}
            height={424}
            alt="Song image"
            priority
          />
          <S.SongName>{name}</S.SongName>
        </CustomLink>
        {artists.map((artist, index) => {
          return (
            <React.Fragment key={index}>
              {index >= 1 ? ", " : null}
              <CustomLink href={artist.external_urls.spotify}>
                <S.ArtistName>{artist.name}</S.ArtistName>
              </CustomLink>
            </React.Fragment>
          );
        })}
      </S.SongContainer>
    );
  };

  return (
    <>
      <Navbar {...userData} />
      <S.Container>
        <S.IsPlaying>{C.isPlaying}</S.IsPlaying>
        {getContent()}
      </S.Container>
    </>
  );
};

export default HomeTemplate;
