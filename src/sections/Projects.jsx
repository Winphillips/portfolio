const Projects = (props) => (
  <div id="projects" className="background-alt">
    <h2 className="heading">Projects</h2>
    <div className="container">
      <div className="row">
        {props.data.projectsData.map((inst) => {
          return (
            <div className="project shadow-large" key={inst.name}>
              <div className="project-image">
                <img src={inst.image} alt="" />
              </div>
              <div className="project-info">
                <h3>{inst.name}</h3>
                <p>{inst.description}</p>
                {inst.linkType === 'none' ? null : (
                  <a href={inst.link} rel="noreferrer" target="_blank">
                    {inst.linkType === 'project' ? 'View Project' : 'View Source'}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

Projects.displayName = 'Projects';

export default Projects;
