import { MyRecentProjects, Section, StyledIcon, Header } from "./styled";
import { SubHeader } from "../SubHeader";

const Portfolio = () => {
  return (
    <Section>
      <Header>
        <StyledIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
    </Section>
  )
};

export default Portfolio;