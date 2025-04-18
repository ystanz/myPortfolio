import styled from 'styled-components'

export const CarouselContainer = styled.div`
  margin: 2rem 0;

  .project-swiper {
    padding: 1rem 0;
  }

  .project-slide {
    width: 300px; // Largura fixa dos cards
  }

  .project-card {
    background-color: #1e1e1e;
    border-radius: 12px;
    padding: 1rem;
    color: white;
    height: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .project-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .project-card p {
    font-size: 0.9rem;
    color: #bbb;
  }
`
