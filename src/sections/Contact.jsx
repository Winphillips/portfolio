const Contact = (props) => (
  <div id="contact">
    <h2>Get in Touch</h2>
    <div id="contact-buttons">
      <div className="contact-button">
        <a href="tel:501-551-9935" style={{ color: '#2A047B' }}>
          501-551-9935
        </a>
      </div>
      <div className="contact-button">
        <a href="mailto:winston.phillips@proton.me" style={{ color: '#2A047B' }}>
          winston.phillips@proton.me
        </a>
      </div>
    </div>
  </div>
);

Contact.displayName = 'Contact';

export default Contact;
