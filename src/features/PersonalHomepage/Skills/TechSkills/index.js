import { Tile, SkillsContent, List, ListItem, Bullet } from "./styled";

const TechSkills = ({ name, skillArray, icon, secondIcon }) => {
  return (
    <SkillsContent>
      <Tile>
        {icon}
        {name}
        {secondIcon}
      </Tile>
      <List>
        {skillArray.map((skill) => (
          <ListItem key={skill}>
            <Bullet />
            {skill}
          </ListItem>
        ))}
      </List>
    </SkillsContent>
  );
};

export default TechSkills;
