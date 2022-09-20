import { Wrapper, Button, Text, Box, IconContainer, Icon } from "./styled";

const ThemeSwitch = () => {
  return(
    <Wrapper>
      <Button>
        <Text>Dark mode off</Text>
        <Box>
          <IconContainer move>
            <Icon />
          </IconContainer>
        </Box>
      </Button>
    </Wrapper>
  )
};

export default ThemeSwitch;