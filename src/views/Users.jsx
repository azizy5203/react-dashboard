import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <span>Users</span>
      <NavLink to="/">
        <Button label="back" icon="pi pi-chevron-left" />
      </NavLink>
    </div>
  );
};

export default About;
