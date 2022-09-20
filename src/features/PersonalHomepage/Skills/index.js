import { Bullet, List, ListItem, Section, StyledHeaader } from "./styled";

const Skills = ({ title, skills }) => {
  return (
    <Section>
      <StyledHeaader>{title}</StyledHeaader>
      <List>
        {skills.map(skill => (
          <ListItem
            key={skill}
          >
            <Bullet />
            {skill}
          </ListItem>
        ))}
      </List>
    </Section>
  )
};

export default Skills;