import { Wrapper, Photo, ThisIs, Name, Summary, StyledButton, Icon } from "./styled";
import charlesGaleraProfile from "./profile.jpg";

const MainInformation = () => {
  return (
    <Wrapper>
      <Photo src={charlesGaleraProfile} alt="Charles Galera" />
      <div>
        <ThisIs>This Is</ThisIs>
        <Name>Charles Galera</Name>
        <Summary>
          I am a dynamically developing Frontend Developer 
          looking and ready for new challenges and jobs opportunities.
        </Summary>
        <StyledButton>
          <Icon />
          Hire Me
        </StyledButton>
      </div>
    </Wrapper>
  )
};

export default MainInformation;