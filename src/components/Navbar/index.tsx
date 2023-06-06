import Link from "next/link";
import * as S from "./styles";
import { NavbarProps } from "@/components/Navbar/props";

const Navbar = ({ display_name, external_urls, images }: NavbarProps) => {
  return (
    <S.Nav>
      <Link
        target="_blank"
        href={external_urls.spotify}
        style={{ display: "flex" }}
      >
        <S.UserImage
          src={images[0].url}
          alt="User profile picture"
          width={100}
          height={100}
          priority
          quality={100}
        />
        <S.UserName>{display_name}</S.UserName>
      </Link>
    </S.Nav>
  );
};

export default Navbar;
