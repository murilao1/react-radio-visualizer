import Link from "next/link";
import { styled } from "styled-components";

export const CustomLink = styled(Link)`
  transition: color .4s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary}
  }
`
