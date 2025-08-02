import "./Work.css";

const projects = [
  {
    title: "Wordle Game",
    description: "Small worlde game build on basic UI and logic.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/wordle.png",
    liveLink: "https://wordle-game-azure-beta.vercel.app",
  },
  {
    title: "Popcorn",
    description: "Small worlde game build on basic UI and logic.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/popcorn.png",
    liveLink: "https://popcorn-plum.vercel.app",
  },
  {
    title: "Weather",
    description: "Small worlde game build on basic UI and logic.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/weather.png",
    liveLink: "https://weather-swart-alpha.vercel.app",
  },
  {
    title: "Animation",
    description: "Small worlde game build on basic UI and logic.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/motion_animation.png",
    liveLink: "https://motion-animation-psi.vercel.app",
  },
  {
    title: "Split Bill",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/split_bill.png",
    liveLink: "https://split-bill-eta-amber.vercel.app",
  },
  {
    title: "Accordion",
    description: "Simple to-do list app with local storage support.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/accordion.png",
    liveLink: "https://accordion-one-khaki.vercel.app",
  },
  {
    title: "Bank Account",
    description: "small bank account with simple transactions",
    tech: ["React", "API", "CSS"],
    image: "/bank_account.png",
    liveLink: "https://bank-account-pink.vercel.app",
  },
  {
    title: "Steps",
    description: "Fetches live weather data using OpenWeather API.",
    tech: ["React", "API", "CSS"],
    image: "/steps.png",
    liveLink: "https://accordion-kkwf.vercel.app",
  },
  {
    title: "Currency Converter",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/currency_converter.png",
    liveLink: "https://currency-converter-nine-rouge.vercel.app",
  },
  {
    title: "Bill and Tip",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/bill_tip.png",
    liveLink: "https://bill-tip.vercel.app",
  },
  {
    title: "My Days",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/my_days.png",
    liveLink: "https://my-days.vercel.app",
  },
  {
    title: "Pizza",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/pizza.png",
    liveLink: "https://pizza-lovat-pi.vercel.app",
  },
  {
    title: "Quiz",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/quiz.png",
    liveLink: "https://quiz-seven-self.vercel.app",
  },
  {
    title: "Redux Bank",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/redux_bank.png",
    liveLink: "https://redux-bank-beige.vercel.app",
  },
  {
    title: "Slider Date",
    description: "Friendly site to have money exchange with friends.",
    tech: ["React", "API", "CSS"],
    image: "/slider_date.png",
    liveLink: "https://slider-date.vercel.app",
  },
];

function Work() {
  return (
    <section id="work" className="projects-section">
      <h2 className="projects-title">🧳 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Tech:</strong> {project.tech.join(", ")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Work;
