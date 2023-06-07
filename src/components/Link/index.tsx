import CustomLinkProps from "@/components/Link/props";
import * as S from "./styles";

const CustomLink = (props: CustomLinkProps) => {
  return (
    <S.CustomLink target="_blank" {...props}>
      {props.children}
    </S.CustomLink>
  );
};

export default CustomLink;
