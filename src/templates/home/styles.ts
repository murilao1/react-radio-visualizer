import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 300vh;
  padding: 140px 370px;
`

export const IsPlaying = styled.p`
  font-size: 42px;
  font-weight: 500;
`
export const SongContainer = styled.div``

export const SongImage = styled(Image)`
  border-radius: 2%;
  margin: 40px 0 40px 0;
`

export const SongName = styled.p`
  font-weight: 500;
  font-size: 28px;
`

export const ArtistName = styled.p`
  font-size: 18px;
`
