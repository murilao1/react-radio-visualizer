import { getAccessToken } from "@/api/authentication";
import { getCurrentlyPlayingSong } from "@/api/currentlyPlaying";
import { getUser } from "@/api/user";
import HomeTemplate from "@/templates/home";
import HomeTemplateProps from "@/templates/home/props";
import { GetServerSideProps } from "next";

const Home = (props: HomeTemplateProps) => {
  return <HomeTemplate {...props} />;
};

export const getServerSideProps: GetServerSideProps<
  HomeTemplateProps
> = async () => {
  const { access_token } = await getAccessToken();
  const userData = await getUser();
  const currentSong = await getCurrentlyPlayingSong();

  return {
    props: {
      access_token,
      userData,
      currentSong,
    },
  };
};

export default Home;
