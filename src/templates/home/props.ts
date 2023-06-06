import UserResponse from "@/api/user/response";

export default interface HomeTemplateProps {
  access_token: string;
  userData: UserResponse
}
