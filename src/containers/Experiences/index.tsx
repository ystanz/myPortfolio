import {
  ExperiencesBox,
  ExperiencesCard,
  ExperiencesContainer,
  ExperiencesDate,
  ExperiencesInfo,
  ExperiencesLink,
  ExperiencesText,
  ExperiencesTitle
} from './styles'

const Experiences = () => {
  return (
    <ExperiencesContainer>
      <h2 className="title">Experiências</h2>
      <ExperiencesBox>
        <ExperiencesCard>
          <ExperiencesTitle>Freelancer</ExperiencesTitle>
          <ExperiencesText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            nihil nostrum suscipit laborum harum, aperiam, unde dolorem tempore
            velit, veniam nisi dignissimos beatae temporibus molestias error
            quibusdam eaque omnis culpa!
          </ExperiencesText>
          <ExperiencesInfo>
            <ExperiencesDate>2025</ExperiencesDate>
            <ExperiencesLink>Projeto</ExperiencesLink>
          </ExperiencesInfo>
        </ExperiencesCard>
        <ExperiencesCard>
          <ExperiencesTitle>Freelancer</ExperiencesTitle>
          <ExperiencesText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            nihil nostrum suscipit laborum harum, aperiam, unde dolorem tempore
            velit, veniam nisi dignissimos beatae temporibus molestias error
            quibusdam eaque omnis culpa!
          </ExperiencesText>
          <ExperiencesInfo>
            <ExperiencesDate>2025</ExperiencesDate>
            <ExperiencesLink>Projeto</ExperiencesLink>
          </ExperiencesInfo>
        </ExperiencesCard>
        <ExperiencesCard>
          <ExperiencesTitle>Freelancer</ExperiencesTitle>
          <ExperiencesText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            nihil nostrum suscipit laborum harum, aperiam, unde dolorem tempore
            velit, veniam nisi dignissimos beatae temporibus molestias error
            quibusdam eaque omnis culpa!
          </ExperiencesText>
          <ExperiencesInfo>
            <ExperiencesDate>2025</ExperiencesDate>
            <ExperiencesLink>Projeto</ExperiencesLink>
          </ExperiencesInfo>
        </ExperiencesCard>
      </ExperiencesBox>
    </ExperiencesContainer>
  )
}

export default Experiences
