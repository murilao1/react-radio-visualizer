import * as S from "./styles";
import { NavbarProps } from "@/components/Navbar/props";

const Navbar = ({ display_name, external_urls, images }: NavbarProps) => {
  return (
    <S.Nav>
      <S.Link href={external_urls.spotify}>
        <S.UserImage
          src={images[0].url}
          alt="User profile picture"
          width={100}
          height={100}
          priority
          quality={100}
        />
        <S.UserName>{display_name}</S.UserName>
      </S.Link>
    </S.Nav>
  );
};

export default Navbar;
