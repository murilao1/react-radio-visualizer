import CustomLink from "@/components/Link"
import Image from "next/image"
import { styled } from "styled-components"

export const Nav = styled.nav`
  position: fixed;
  height: 12rem;
  width: 100%;
  padding: 1rem 7.5rem;
  
  @media (max-width: 440px) {
    padding: 1rem 2rem;

    z-index: 10;
    box-shadow: 0 8px 8px #0001;
    backdrop-filter: blur(3px) brightness(120%);
  }

  display: flex;
  align-items: center;
  
  transition: box-shadow .4s, backdrop-filter .4s;

  &:hover {
    box-shadow: 0 8px 8px #0001;
    backdrop-filter: blur(3px) brightness(120%);
  }
`

export const Link = styled(CustomLink)`
  display: flex;
  
  img {
    transition: filter .4s;
  }

  &:hover {
    img {
      filter: brightness(125%);
    }
  }
`

export const UserImage = styled(Image)`
  border-radius: 50%;
`

export const ImageContainer = styled.div`
  height: 8rem;
  position: relative;

  ${UserImage} {
    object-fit: contain;
    height: 100% !important;
    position: relative !important;
    width: unset !important;
  }
`

export const UserName = styled.span`
  font-size: 3.6rem;
  font-weight: 500;

  margin-left: 2.4rem;

  align-self: center;
`
