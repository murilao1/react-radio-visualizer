/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
        pathname: "/platform/profilepic/**",
      },
    ],
  },
};

module.exports = nextConfig;

// https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=832463093574679&height=300&width=300&ext=1688658276&hash=AeQMwHI_Za-SPl0r4oU
