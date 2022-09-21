import { Header, Wrapper, Text } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";
import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";

const Error = () => {
  return (
    <Wrapper>
      <WarningIcon />
      <Header>Ooops! Something went wrong ...</Header>
      <Text>
        Sorry, failed to load GitHub projects.
        You&nbsp;can check them directly on GitHub.
      </Text>
      <ButtonLink
        href={`https://github.com/${githubUsername}`}
        title={`https://github.com/${githubUsername}`}
        target="_blank"
      >
        Go to GitHub
      </ButtonLink>
    </Wrapper>
  )
};

export default Error;