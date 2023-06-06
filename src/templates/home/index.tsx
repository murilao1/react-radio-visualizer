import HomeTemplateProps from "@/templates/home/props";
import { FC } from "react";
import * as S from "./styles";
import Navbar from "@/components/Navbar";

const HomeTemplate: FC<HomeTemplateProps> = ({ userImage }) => {
  return (
    <>
      <Navbar userImage={userImage} />
      <S.Container></S.Container>
    </>
  );
};

export default HomeTemplate;
