import HomeTemplateProps from "@/templates/home/props";
import { FC } from "react";
import * as S from "./styles";
import Navbar from "@/components/Navbar";
import { HomeConst as C } from "./const";
import CustomLink from "@/components/Link";

const HomeTemplate: FC<HomeTemplateProps> = ({ userData, currentSong }) => {
  const {
    is_playing,
    item: { artists, external_urls, album, name },
  } = currentSong;

  return (
    <>
      <Navbar {...userData} />
      <S.Container>
        <S.IsPlaying>{C.isPlaying}</S.IsPlaying>
        {is_playing && (
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
            <CustomLink href={artists[0].external_urls.spotify}>
              <S.ArtistName>{artists[0].name}</S.ArtistName>
            </CustomLink>
          </S.SongContainer>
        )}
      </S.Container>
    </>
  );
};

export default HomeTemplate;
