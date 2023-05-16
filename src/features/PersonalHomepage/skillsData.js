import { styledIcon } from "./Skills/TechSkills/styled";
import { ReactComponent as ReactIcon } from "./icons/reactIcon.svg";
import { ReactComponent as NextIcon } from "./icons/nextIcon.svg";
import { ReactComponent as JSIcon } from "./icons/jsIcon.svg";
import { ReactComponent as HtmlIcon } from "./icons/htmlIcon.svg";
import { ReactComponent as CssIcon } from "./icons/cssIcon.svg";
import { ReactComponent as OtherICon } from "./icons/skillIcon.svg";
import { ReactComponent as TsIcon } from "./icons/tsIcon.svg";
import { ReactComponent as TanStackIcon } from "./icons/tanStackIcon.svg";

const skillsName = {
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
  ts: {
    name: "More Typescript",
    Icon: styledIcon(TsIcon),
  },
  rNative: {
    name: "React Native",
    Icon: styledIcon(ReactIcon),
  },
  tanStack: {
    name: "TanStack Query",
    Icon: styledIcon(TanStackIcon),
  },
  master: {
    name: "Mastering my skills",
    Icon: styledIcon(OtherICon),
  },
};

const otherSkills = [
  "Markdown",
  "Git",
  "Type Script (basics)",
  "GitHub Pull Request & Review",
  "NPM",
  "Trello",
  "Figma",
  "Scrum",
  "GraphQL",
  "Apollo Client",
  "MongoDB",
];

const reactSkills = [
  "React Hooks",
  "React Redux",
  "Redux (Toolkit)",
  "Redux-Saga",
  "React Router",
  "React Context",
  "React Portals",
  "Styled-Components",
];

const nextSkills = [
  "Next hooks",
  "Static Site Generation",
  "Server Side Rendering",
  "API Routes",
  "Next-Auth",
];

const jsSkills = [
  "Immutability",
  "Working with API (fetch, axios)",
  "Promises, Async/Await",
  "Error handling",
  "Arrays/Objects",
];

const htmlCssSkills = [
  "Semantic & accesible HTML",
  "Responsive web Design",
  "CSS Grid",
  "CSS Flexbox",
  "CSS BEM convetion",
  "CSS modules",
  "CSS variables",
];

export const skillData = [
  {
    name: skillsName.react.name,
    icon: <skillsName.react.Icon />,
    skillArray: reactSkills,
  },
  {
    name: skillsName.next.name,
    icon: <skillsName.next.Icon />,
    skillArray: nextSkills,
  },
  {
    name: skillsName.js.name,
    icon: <skillsName.js.Icon />,
    skillArray: jsSkills,
  },
  {
    name: skillsName.htmlCss.name,
    icon: <skillsName.htmlCss.Icon />,
    secondIcon: <skillsName.htmlCss.SecondIcon />,
    skillArray: htmlCssSkills,
  },
  {
    name: skillsName.other.name,
    icon: <skillsName.other.Icon />,
    skillArray: otherSkills,
  },
];

export const newSkills = [
  {
    name: skillsName.ts.name,
    icon: <skillsName.ts.Icon />,
  },
  {
    name: skillsName.rNative.name,
    icon: <skillsName.rNative.Icon />,
  },
  {
    name: skillsName.tanStack.name,
    icon: <skillsName.tanStack.Icon />,
  },
  {
    name: skillsName.master.name,
    icon: <skillsName.master.Icon />,
  },
];
