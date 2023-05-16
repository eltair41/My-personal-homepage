import ThemeSwitch from "../../common/ThemeSwitch";
import MainInformation from "./MainInformation";
import { Container } from "./styled";
import Skills from "./Skills";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Goals from "./Goals";

const PersonalHomepage = () => {
  return (
    <Container>
      <ThemeSwitch />
      <MainInformation />

      <main>
        <Skills title={"My skillset Includes"} />
        <Goals title={"What I want to learn next"} />
        <Portfolio />
      </main>
      <Footer />
    </Container>
  );
};

export default PersonalHomepage;
