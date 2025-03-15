import NavBar from '../NavBar'
import { Container, HeaderBox, Logo } from './styles'

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Logo>
          <a href="/">YS Dev</a>
        </Logo>
        <NavBar />
      </Container>
    </HeaderBox>
  )
}

export default Header
