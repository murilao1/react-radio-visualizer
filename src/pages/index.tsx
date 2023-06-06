import { getAccessToken } from "@/api/authentication";
import HomeTemplate from "@/templates/home";
import HomeTemplateProps from "@/templates/home/props";
import { GetStaticProps } from "next";

const Home = (props: HomeTemplateProps) => {
  return <HomeTemplate {...props} />;
};

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const { access_token } = await getAccessToken();

  return {
    props: {
      access_token,
    },
  };
};

export default Home;
