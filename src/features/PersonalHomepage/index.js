import ThemeSwitch from "../../common/ThemeSwitch";
import MainInformation from "./MainInformation";
import { Container } from "./styled";
import Skills from "./Skills"
import { skills, newSkills } from "./skillsData";
import Footer from "./Footer";

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
      <Footer />
    </Container>
  )
};

export default PersonalHomepage;