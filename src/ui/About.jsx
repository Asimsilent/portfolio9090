function About() {
  return (
    <section id="about" className="d-flex justify-content-center align-items-center " style={{padding:"60px 250px"}}>
      <div className="">
        <img
          className=" "
          style={{ width: "450px", height: "550px", objectFit: "cover" }}
          src="/seen.jpg"
          alt="image"
        />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center p-5 gap-5">
        <div>
          <div>Who am i?</div>
          <div>
            I’m a computer science student passionate about web development. I
            enjoy building responsive websites using React and exploring UI
            design
          </div>
        </div>
        <div>
          <div>My goal!</div>
          <div>
            Currently learning React and improving my frontend skills with
            personal projects.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
