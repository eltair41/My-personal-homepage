import {
  Wrapper,
  Photo,
  ThisIs,
  Name,
  Summary,
  StyledButton,
  Icon,
} from "./styled";
import charlesGaleraProfile from "./charles.jpeg";
import { email } from "../email";
import useText from "./useText";
import { phrases } from "./phrases";

const MainInformation = () => {
  const text = useText(phrases);

  return (
    <Wrapper>
      <Photo src={charlesGaleraProfile} alt="Charles Galera" />
      <div>
        <ThisIs>Hello world!</ThisIs>
        <Name>I am {text}</Name>
        <Summary>
          I am a dynamically developing Frontend Developer looking and ready for
          new challenges and jobs opportunities.
        </Summary>
        <StyledButton href={`mailto:${email}`} title={email}>
          <Icon />
          Hire Me
        </StyledButton>
      </div>
    </Wrapper>
  );
};

export default MainInformation;
