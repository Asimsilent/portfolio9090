import './Footer.css';

function Footer(){
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p>Made using React</p>
      <div className="footer-socials">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Add more if needed */}
      </div>
    </footer>
  );
};

export default Footer;
