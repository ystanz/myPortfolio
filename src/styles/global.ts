import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Saira, 'sans-serif';
  list-style: none;
  text-decoration: none;
  color: #fff;
  transition: all .3s ease-in-out;
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
`
export default GlobalStyle

export const Container = styled.div`
  max-width: 1200px; /* Largura máxima do conteúdo */
  width: 90%; /* Garante que o container tenha um bom respiro nas laterais */
  margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
  padding: 0 1.5rem; /* Recuo interno para evitar que o conteúdo encoste nas bordas */

  @media (max-width: 768px) {
    width: 95%; /* Para telas menores, aumenta a largura para melhor aproveitamento */
    padding: 0 1rem;
  }
`
