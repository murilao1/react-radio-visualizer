import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 150vh;
  padding: 18rem 37rem;
  
  @media (max-width: 1024px) {
    padding: 18rem 12rem;
  }

  @media (max-width: 440px) {
    padding: 18rem 2rem;
  }
`

export const IsPlaying = styled.p`
  font-size: 4.8rem;
  font-weight: 500;
`

export const SongImage = styled(Image)`
  border-radius: 2%;
  margin: 4rem 0 4rem 0;
`

export const SongContainer = styled.div`
  position: relative;
  height: 60rem;
  
  @media (max-width: 1024px) {
    height: 40rem;
  }

  ${SongImage} {
    object-fit: contain;
    height: 100% !important;
    position: relative !important;
    width: unset !important;
  }

`

export const SongName = styled.p`
  font-weight: 500;
  font-size: 2.8rem;
`

export const ArtistName = styled.span`
  font-size: 2.2rem;
`

export const NotPlaying = styled.p`
  font-size: 3.2rem;
  font-weight: 300;
  margin-top: 3.6rem;
`
