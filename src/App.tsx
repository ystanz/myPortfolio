import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyle, { Container } from './styles/global'

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
