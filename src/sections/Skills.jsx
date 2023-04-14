const Skills = (props) => (
  <div id="skills">
    <h2 className="heading">Languages and Technologies</h2>
    <ul>
      {props.data.skillsData.map((inst) => {
        return <li key={inst}>{inst}</li>;
      })}
    </ul>
  </div>
);

Skills.displayName = 'Skills';

export default Skills;
