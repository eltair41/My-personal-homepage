import ThemeSwitch from "../../common/ThemeSwitch";
import MainInformation from "./MainInformation";
import { Container } from "./styled";
import Skills from "./Skills"
import { skills, newSkills } from "./skillsData";

const PersonalHomepage = () => {
  return (
    <Container>
      <ThemeSwitch />
      <MainInformation />

      <main>
        <Skills
          title={"My skillset Includes"}
          skills={skills}
        />
        <Skills
          title={"What I want to learn next"}
          skills={newSkills}
        />
      </main>
    </Container>
  )
};

export default PersonalHomepage;