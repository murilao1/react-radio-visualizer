import { LinkProps } from "next/link";
import { ReactNode } from "react";

export default interface CustomLinkProps extends LinkProps {
  children?: ReactNode[] | ReactNode;
}
