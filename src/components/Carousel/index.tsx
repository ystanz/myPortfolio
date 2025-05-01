import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselContainer } from './styles'
import { Navigation, Pagination } from 'swiper/modules'

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
        modules={[Navigation, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        initialSlide={2}
        speed={600}
        preventClicks
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <div className="project-card">
              <a href={project.url} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
