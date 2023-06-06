import { getCurrentlyPlayingSong } from "@/api/currentlyPlaying";
import CurrentlyPlayingResponse from "@/api/currentlyPlaying/response";
import { getUser } from "@/api/user";
import UserResponse from "@/api/user/response";
import HomeTemplateProps from "@/templates/home/props";
import { FC, useEffect, useState } from "react";

const HomeTemplate: FC<HomeTemplateProps> = ({ access_token }) => {
  const [user, setUser] = useState<UserResponse>();

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {access_token}
      {user?.display_name}
    </>
  );
};

export default HomeTemplate;
