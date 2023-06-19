import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1.6rem 'Chillax-Variable', sans-serif;
  }

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }

  html {
    font-size: calc(100vw / 1920 * 10);
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    
    @media (max-width: 1024px) {
      font-size: calc(100vw / 1024 * 10);
    }

    @media (max-width: 440px) {
      font-size: calc(100vw / ${440} * 10);
    }
  }


  @font-face {
    font-family: 'Chillax-Variable';
    src: url('../fonts/Chillax-Variable.woff2') format('woff2'),
        url('../fonts/Chillax-Variable.woff') format('woff'),
        url('../fonts/Chillax-Variable.ttf') format('truetype');
        font-weight: 200 700;
        font-display: swap;
        font-style: normal;
  }


  @font-face {
    font-family: 'Chillax-Extralight';
    src: url('../fonts/Chillax-Extralight.woff2') format('woff2'),
        url('../fonts/Chillax-Extralight.woff') format('woff'),
        url('../fonts/Chillax-Extralight.ttf') format('truetype');
        font-weight: 200;
        font-display: swap;
        font-style: normal;
  }


  @font-face {
    font-family: 'Chillax-Light';
    src: url('../fonts/Chillax-Light.woff2') format('woff2'),
        url('../fonts/Chillax-Light.woff') format('woff'),
        url('../fonts/Chillax-Light.ttf') format('truetype');
        font-weight: 300;
        font-display: swap;
        font-style: normal;
  }


  @font-face {
    font-family: 'Chillax-Regular';
    src: url('../fonts/Chillax-Regular.woff2') format('woff2'),
        url('../fonts/Chillax-Regular.woff') format('woff'),
        url('../fonts/Chillax-Regular.ttf') format('truetype');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
  }


  @font-face {
    font-family: 'Chillax-Medium';
    src: url('../fonts/Chillax-Medium.woff2') format('woff2'),
        url('../fonts/Chillax-Medium.woff') format('woff'),
        url('../fonts/Chillax-Medium.ttf') format('truetype');
        font-weight: 500;
        font-display: swap;
        font-style: normal;
  }


  @font-face {
    font-family: 'Chillax-Semibold';
    src: url('../fonts/Chillax-Semibold.woff2') format('woff2'),
        url('../fonts/Chillax-Semibold.woff') format('woff'),
        url('../fonts/Chillax-Semibold.ttf') format('truetype');
        font-weight: 600;
        font-display: swap;
        font-style: normal;
  }


  @font-face {
    font-family: 'Chillax-Bold';
    src: url('../fonts/Chillax-Bold.woff2') format('woff2'),
        url('../fonts/Chillax-Bold.woff') format('woff'),
        url('../fonts/Chillax-Bold.ttf') format('truetype');
        font-weight: 700;
        font-display: swap;
        font-style: normal;
  }
`
