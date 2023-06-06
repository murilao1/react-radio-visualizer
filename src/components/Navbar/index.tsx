import * as S from "./styles";
import { NavbarProps } from "@/components/Navbar/props";

const Navbar = ({ userImage }: NavbarProps) => {
  return (
    <S.Nav>
      <S.UserImage
        src={userImage}
        alt="User profile picture"
        width={100}
        height={100}
        priority
        quality={100}
      />
    </S.Nav>
  );
};

export default Navbar;
