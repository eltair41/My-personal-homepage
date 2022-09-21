import { email } from "../email";
import SocialIcons from "./SocialIcons";
import { Address, Email, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

const Footer = () => {
  return (
    <Wrapper>
      <LetsTalk>Let's Talk</LetsTalk>
      <Address>
        <EmailWrapper>
          <Email href={`mailto:${email}`}>
            {email}
          </Email>
        </EmailWrapper>
        <Paragraph>
          I"m looking forward to improving and learning new skills at FrontEnd.
          If you want to give me a chance to demonstrate my knowledge and hire me, please contact me by e-mail or other way.
          I am gladly waiting for any challenges and job opportunities.
        </Paragraph>
      </Address>
      <SocialIcons />
    </Wrapper>
  )
};

export default Footer;