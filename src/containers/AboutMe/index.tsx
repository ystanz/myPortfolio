import {
  AboutMeBox,
  AboutMeTitle,
  AboutMeContainer,
  Text,
  Title
} from './styles'

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeTitle>
        <Title>Sobre mim</Title>
      </AboutMeTitle>
      <AboutMeBox>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus eveniet, nobis, facilis ex inventore similique
          repudiandae rerum distinctio animi dolor molestias fuga quo
          consequuntur deleniti esse? Inventore consequuntur officiis corrupti.
        </Text>
      </AboutMeBox>
    </AboutMeContainer>
  )
}

export default AboutMe
