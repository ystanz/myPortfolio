import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 85vh;
`

export const Name = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  line-height: 5rem;
`
export const Subtitle = styled.h2`
  font-size: 3.2rem;
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
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  background-color: #141414;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 3rem;
    transition: fill;
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
  width: 150%;
`
export const MyPhoto = styled.img`
  position: relative;
  width: 35rem;
  background-size: contain;
  border-radius: 50%;
`
