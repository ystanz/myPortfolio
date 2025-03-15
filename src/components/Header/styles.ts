import styled from 'styled-components'

export const HeaderBox = styled.div`
  position: sticky;
  top: 0;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 7rem;
  margin-bottom: 3rem;
  border-bottom: 4px solid;
  border-image: linear-gradient(to top, #1f1f1f, #3d3d3d);
  border-image-slice: 2;
  background-color: #0b0b0b;
  opacity: 0.9;
`
export const Logo = styled.div`
  a {
    color: #00ad6f;
    font-size: 2.5rem;
    font-weight: 450;
    &::before {
      content: '<';
      color: #757575;
    }
    &::after {
      content: '/>';
      color: #757575;
    }
  }
`
