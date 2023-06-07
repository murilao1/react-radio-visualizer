import CustomLink from "@/components/Link"
import Image from "next/image"
import { styled } from "styled-components"

export const Nav = styled.nav`
  position: fixed;
  height: 120px;
  width: 100%;
  padding: 10px 75px;

  display: flex;
  align-items: center;
  
  transition: box-shadow .4s, backdrop-filter .4s;

  &:hover {
    box-shadow: 0px 8px 8px #0001;
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

export const UserName = styled.span`
  font-size: 36px;
  font-weight: 500;

  margin-left: 24px;

  align-self: center;
`
