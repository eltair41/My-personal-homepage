import ThemeSwitch from "../../common/ThemeSwitch";
import MainInformation from "./MainInformation";
import { Container } from "./styled";
import Skills from "./Skills"
import { skills, newSkills } from "./skillsData";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

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
        <Portfolio />
      </main>
      <Footer />
    </Container>
  )
};

export default PersonalHomepage;