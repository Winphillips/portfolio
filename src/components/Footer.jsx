export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p></p>
          </div>
          <div className="col-sm-2 top">
            <span id="to-top">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-sm-5 social">
            <ul>
              {props.data.footerLinks.map((linkDict) => (
                <li key={linkDict.link}>
                  <a
                    href={linkDict.link}
                    title={linkDict.iconClass.split('-')[1]}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className={'fa ' + linkDict.iconClass} aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
