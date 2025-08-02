import './Contact.css';

function Contact(){
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">📞 Get In Touch</h2>
      <p className="contact-text">
        Feel free to reach out to me via email or connect with me on GitHub and LinkedIn.
      </p>

      <div className="contact-links">
        <a href="mailto:your.email@example.com" className="contact-link" target="_blank" rel="noopener noreferrer">
          📧 Email
        </a>
        <a href="https://github.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
          🐙 GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
          💼 LinkedIn
        </a>
      </div>

      {/* Optional Contact Form */}
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
