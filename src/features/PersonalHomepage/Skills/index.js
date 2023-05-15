import {
  htmlCssSkills,
  jsSkills,
  nextSkills,
  reactSkills,
  restSkills,
} from "./skillsData";
import TechSkills from "./TechSkills";
import { Section, StyledHeaader } from "./styled";
import { skillsName } from "./skillsName";

const Skills = ({ title }) => {
  return (
    <>
      <StyledHeaader>{title}</StyledHeaader>
      <Section>
        <TechSkills
          name={skillsName.react.name}
          icon={<skillsName.react.Icon />}
          skillArray={reactSkills}
        />
        <TechSkills
          name={skillsName.next.name}
          icon={<skillsName.next.Icon />}
          skillArray={nextSkills}
        />
        <TechSkills
          name={skillsName.js.name}
          icon={<skillsName.js.Icon />}
          skillArray={jsSkills}
        />
        <TechSkills
          name={skillsName.htmlCss.name}
          icon={<skillsName.htmlCss.Icon />}
          secondIcon={<skillsName.htmlCss.SecondIcon />}
          skillArray={htmlCssSkills}
        />
        <TechSkills
          name={skillsName.other.name}
          icon={<skillsName.other.Icon />}
          skillArray={restSkills}
        />
      </Section>
    </>
  );
};

export default Skills;
