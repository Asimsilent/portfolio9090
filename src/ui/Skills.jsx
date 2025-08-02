import "./Skills.css"; // We'll create this CSS file next

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "🖊️" },
  { name: "Figma", icon: "📐" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">🛠️ Tech Stack I Work With</h2>
      <p className="skills-intro">
        Here are some of the technologies and tools I’ve worked with during my
        learning journey and projects.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} title={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
