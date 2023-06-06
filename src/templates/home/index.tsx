import HomeTemplateProps from "@/templates/home/props";
import { FC } from "react";

const HomeTemplate: FC<HomeTemplateProps> = ({ access_token }) => {
  return <>{access_token}</>;
};

export default HomeTemplate;
