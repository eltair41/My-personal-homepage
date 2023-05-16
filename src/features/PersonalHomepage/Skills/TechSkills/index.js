import { useState } from "react";
import { Tile, SkillsContent, List, ListItem, Bullet } from "./styled";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const TechSkills = ({ name, skillArray, icon, secondIcon }) => {
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <SkillsContent ref={ref} className={visible ? "animate" : ""}>
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
