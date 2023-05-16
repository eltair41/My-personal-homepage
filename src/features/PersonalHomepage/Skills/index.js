import { skillData } from "../skillsData";
import TechSkills from "./TechSkills";
import { Section, StyledHeaader } from "./styled";

const Skills = ({ title }) => {
  return (
    <>
      <StyledHeaader>{title}</StyledHeaader>
      <Section>
        {skillData.map((data) => (
          <TechSkills key={data.name} {...data} />
        ))}
      </Section>
    </>
  );
};

export default Skills;
