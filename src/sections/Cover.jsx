const Cover = (props) => (
  <div id="lead">
    <div id="lead-content">
      <h1>{props.data.personName}</h1>
      <h2>{props.data.personField}</h2>
      <a
        href={props.data.resumeUrl}
        className="btn-rounded-white"
        rel="noreferrer"
        target="_blank"
      >
        View Resume
      </a>
    </div>

    <div id="lead-overlay"></div>

    <div id="lead-down">
      <span>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </span>
    </div>
  </div>
);

export default Cover;
