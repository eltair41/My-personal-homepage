import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./Icons/github_icon.svg";
import { ReactComponent as LinkedInIcon } from "./Icons/linkedin_icon.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/galerafrontend",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/karol-galera-567690251",
    Icon: styleIcon(LinkedInIcon),
  },
];