import { createGlobalStyle } from "styled-components";

import { reset } from "./reset";

import { colors } from "./color";

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'KCC-Hanbit';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/KCC-Hanbit.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
}

* {
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}

html {
  font-size: 10px;
  width: 100vw;
  scroll-behavior: smooth;
}

body {
    background-color: ${colors.background};
}



html,
body,
#app,
#root,
#__next {
  width: 100%;
  height: 100%;
}

#app,
#root,
#__next {
  font-size: .9rem;
  font-weight: 400;
  font-family: 'KCC-Hanbit', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  letter-spacing: -0.03em;
}
html,body{
@media screen and (max-width: 2600px) and (min-width: 2000px) {
    font-size: 18px;
};

@media screen and (max-width: 2000px) and (min-width: 1500px) {
    font-size: 16px;
};

@media screen and (max-width: 1500px) and (min-width: 1000px) {
    font-size: 16px;
};

@media screen and (max-width: 1000px) and (min-width: 700px) {
    font-size: 14px;
};

@media screen and (max-width: 700px) and (min-width: 500px) {
    font-size: 12px;
};

@media screen and (max-width: 500px) and (min-width: 300px) {
    font-size: 14px;
};
}

`;
