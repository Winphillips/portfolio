const About = (props) => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading-wrapper">
            <h2 className="heading">About Me</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div className="heading-spacer">
            <p>{props.data.aboutString}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

About.displayName = 'About';

export default About;
