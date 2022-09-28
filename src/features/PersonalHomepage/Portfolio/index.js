import {
  downloadRepositoriesPending,
  selectRepositories,
  selectRepositoriesStatus
} from "../../personalHomepageSlice";
import { useSelector, useDispatch } from "react-redux";
import { MyRecentProjects, Section, StyledIcon, Header } from "./styled";
import { SubHeader } from "../SubHeader";
import Content from "./Content";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";

const Portfolio = () => {
  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(downloadRepositoriesPending(githubUsername));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Content
        status={repositoriesStatus}
        repositories={repositories}
      />
    </Section>
  )
};

export default Portfolio;