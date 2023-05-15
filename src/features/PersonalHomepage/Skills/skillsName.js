import { styledIcon } from "./TechSkills/styled";
import { ReactComponent as ReactIcon } from "./icons/reactIcon.svg";
import { ReactComponent as NextIcon } from "./icons/nextIcon.svg";
import { ReactComponent as JSIcon } from "./icons/jsIcon.svg";
import { ReactComponent as HtmlIcon } from "./icons/htmlIcon.svg";
import { ReactComponent as CssIcon } from "./icons/cssIcon.svg";
import { ReactComponent as OtherICon } from "./icons/skillIcon.svg";

export const skillsName = {
  react: {
    name: "React.js",
    Icon: styledIcon(ReactIcon),
  },
  next: {
    name: "Next.js",
    Icon: styledIcon(NextIcon),
  },
  js: {
    name: "JavaScript ES6+",
    Icon: styledIcon(JSIcon),
  },
  htmlCss: {
    name: "HTML/CSS",
    Icon: styledIcon(HtmlIcon),
    SecondIcon: styledIcon(CssIcon),
  },
  other: {
    name: "Other Skills",
    Icon: styledIcon(OtherICon),
  },
};
