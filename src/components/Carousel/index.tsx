import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { CarouselContainer } from './styles'

interface Project {
  title: string
  image: string
  description: string
  url: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

const Carousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
