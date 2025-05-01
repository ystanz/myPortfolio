import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyle, { Container } from './styles/global'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

register()
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
