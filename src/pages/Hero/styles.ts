import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  color: #fff;
  height: 85vh;
  width: 90%; /* Garante que o container tenha um bom respiro nas laterais */
  margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
  padding: 1.6rem 1.5rem; /* Recuo interno para evitar que o conteúdo encoste nas bordas */

  @media (max-width: 768px) {
    width: 95%; /* Para telas menores, aumenta a largura para melhor aproveitamento */
    padding: 0 1rem;
  }
`

export const Name = styled.h1`
  font-size: 3.7rem;
  font-weight: 600;
  line-height: 3.5rem;
  color: #fff;
`
export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
  color: #ed145b;
`
export const SocialLinks = styled.ul`
  display: inline-flex;
  justify-content: start;
  align-items: center;
`

export const SocialLinksItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  background-color: #141414;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 2rem;
    transition: fill 0.2s ease-in-out;
    &:hover {
      fill: #ed145b;
    }
  }
`
export const PhotoCard = styled.div`
  position: relative;
`

export const BackgroundPhoto = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
`
export const MyPhoto = styled.img`
  position: relative;
  width: 24rem;
  height: 24rem;
  background-size: contain;
  border-radius: 50%;
`
