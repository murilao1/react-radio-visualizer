import { getAccessToken } from "@/api/authentication";
import { getUser } from "@/api/user";
import HomeTemplate from "@/templates/home";
import HomeTemplateProps from "@/templates/home/props";
import { GetStaticProps } from "next";

const Home = (props: HomeTemplateProps) => {
  return <HomeTemplate {...props} />;
};

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const { access_token } = await getAccessToken();
  const userData = await getUser();

  return {
    props: {
      access_token,
      userData,
    },
  };
};

export default Home;
