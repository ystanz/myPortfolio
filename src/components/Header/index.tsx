import NavBar from '../NavBar'
import { HeaderContainer, HeaderBox, Logo } from './styles'

const Header = () => {
  return (
    <HeaderBox>
      <HeaderContainer>
        <Logo>
          <a href="/">YS Dev</a>
        </Logo>
        <NavBar />
      </HeaderContainer>
    </HeaderBox>
  )
}

export default Header
