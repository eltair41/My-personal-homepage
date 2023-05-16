import { useEffect, useState } from "react";
import { newSkills } from "../skillsData";
import { Item, StyledHeaader, List } from "./styled";
import { useInView } from "react-intersection-observer";

const Goals = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <>
      <StyledHeaader>{title}</StyledHeaader>
      <List ref={ref}>
        {newSkills.map((skill) => (
          <Item key={skill.name} className={visible ? "animate" : ""}>
            {skill.icon}
            {skill.name}
          </Item>
        ))}
      </List>
    </>
  );
};

export default Goals;
