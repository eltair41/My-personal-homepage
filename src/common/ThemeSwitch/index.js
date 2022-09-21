import { Wrapper, Button, Text, Box, IconContainer, Icon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconContainer move={isDarkTheme}>
            <Icon />
          </IconContainer>
        </Box>
      </Button>
    </Wrapper>
  )
};

export default ThemeSwitch;