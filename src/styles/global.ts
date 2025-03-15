import { createGlobalStyle } from 'styled-components'
import px2vw from '../utils/px2vs'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Saira, 'sans-serif';
  list-style: none;
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

body { //Gradient background
  overflow-y: scroll;
  background-color: hsla(53, 0%, 9%, 1);
  background-image:
    radial-gradient(circle at 40% 20%, hsla(81, 0%, 9%, 1) 0%, transparent 50%),
    radial-gradient(circle at 80% 0%, hsla(53, 0%, 16%, 1) 0%, transparent 50%),
    radial-gradient(circle at 0% 50%, hsla(173, 0%, 9%, 1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, hsla(33, 0%, 0%, 1) 0%, transparent 50%),
    radial-gradient(
      circle at 0% 100%,
      hsla(53, 0%, 14%, 1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 100%,
      hsla(294, 0%, 0%, 1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 0% 0%, hsla(53, 0%, 18%, 1) 0%, transparent 50%);
  background-blend-mode: normal, normal, normal, normal, normal, normal, normal;

}

:root {
  font-size: ${px2vw(24)};

  @media (min-width: 768px) {
    font-size: ${px2vw(18)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(16)};
  }
}
`
