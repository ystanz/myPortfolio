import Carousel from '../../components/Carousel'

const projects = [
  {
    title: 'Portfolio',
    image: 'https://placecats.com/300/160',
    description: 'Site pessoal feito com React e Styled-Components.',
    url: 'https://seusite.dev'
  },
  {
    title: 'Dashboard Admin',
    image: 'https://placecats.com/300/160',
    description: 'Dashboard responsiva com autenticação e gráficos.',
    url: '#'
  },
  {
    title: 'Clone Netflix',
    image: 'https://placecats.com/300/160',
    description: 'Clone da interface da Netflix com TMDB API.',
    url: '#'
  }
]

const Projects = () => {
  return (
    <section className="centralizer">
      <h2 className="title">Projetos</h2>
      <>
        <Carousel projects={projects} />
      </>
    </section>
  )
}

export default Projects
