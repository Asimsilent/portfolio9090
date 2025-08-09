import "./About.css";

function About() {
  return (
    <section id="about">
      <div>
        <img src="/seen.jpg" alt="About me" />
      </div>

      <div className="about-content">
        <div>
          <h3>Who am I?</h3>
          <p>
            I’m a computer science student passionate about web development. I
            enjoy building responsive websites using React and exploring UI
            design.
          </p>
        </div>
        <div>
          <h3>My goal!</h3>
          <p>
            Currently learning React and improving my frontend skills with
            personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
