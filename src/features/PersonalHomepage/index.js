import ThemeSwitch from "../../common/ThemeSwitch";
import MainInformation from "./MainInformation";
import { Container } from "./styled";

const PersonalHomepage = () => {
  return (
    <Container>
      <ThemeSwitch />
      <MainInformation />
    </Container>
  )
};

export default PersonalHomepage;