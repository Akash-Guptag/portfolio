import { useState } from "react";
import "./App.css";
const email = "gupta.akash258258@gmail.com";
const linkedin = "https://www.linkedin.com/in/akash-guptag/";
const sections = [
  ["01", "About me", "#about"],
  ["02", "Selected work", "#work"],
  ["03", "Expertise", "#expertise"],
  ["04", "Let’s connect", "#contact"],
];
const projects = [
  {
    name: "Redcell",
    type: "Cybersecurity agent · In development",
    kind: "security",
    title: "Better agents. Better evaluation.",
    body: "Developing an AI cybersecurity agent and using LLM-as-a-judge to evaluate its responses.",
    detail:
      "My work brings agent development and response evaluation together. The focus is on building Redcell and examining the quality of its answers through LLM-as-a-judge.",
    tags: "AI agents / LLM evaluation",
  },
  {
    name: "Testing workflows",
    type: "Software, website & security testing",
    kind: "testing",
    title: "From a task to an orchestrated workflow.",
    body: "Built and orchestrated AI agents for software, website and security testing.",
    detail:
      "Managed workflow deployment and execution alongside building the agents, connecting technical implementation with the work of running them.",
    tags: "Orchestration / Deployment",
  },
  {
    name: "Generative products",
    type: "Image & video generation · Shipped",
    kind: "creative",
    title: "Bring creative possibilities to market.",
    body: "Shipped image-generation and video-generation products at ModelsLab.",
    detail:
      "Worked across ML, backend and frontend teams to prioritize delivery in a fast-paced AI environment with 24-hour launch targets for new features and products.",
    tags: "Product launches / Generative AI",
  },
  {
    name: "Marketing agents",
    type: "AI workflows & product growth",
    kind: "marketing",
    title: "Build. Listen. Improve.",
    body: "Built marketing agents and used customer-led insights to guide product improvements.",
    detail:
      "Google Analytics, A/B testing and customer feedback informed product decisions. Discovery, prioritization and cross-functional coordination kept the work focused.",
    tags: "Marketing agents / Analytics",
  },
];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function ProjectArt({ kind }) {
  return (
    <div className={`project-art ${kind}`} aria-hidden="true">
      {kind === "security" ? (
        <>
          <div className="shield">
            R<span>✧</span>
          </div>
          <span className="art-caption">
            redcell / intelligence under review
          </span>
        </>
      ) : kind === "testing" ? (
        <>
          <div className="orbit">
            <i />
            <i />
            <i />
            <b>✳</b>
          </div>
          <span className="art-caption">Observe. Execute. Evaluate.</span>
        </>
      ) : kind === "creative" ? (
        <>
          <div className="sculpture">
            <i />
            <i />
            <i />
          </div>
          <span className="art-caption">An idea, made visible.</span>
        </>
      ) : (
        <>
          <div className="signal">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="art-caption">Turn feedback into direction.</span>
        </>
      )}
    </div>
  );
}
function Workflow() {
  const [selected, setSelected] = useState(0);
  const flows = [
    [
      "Test",
      "Software & websites",
      "Orchestrate testing",
      "Review the findings",
    ],
    ["Evaluate", "Agent responses", "LLM-as-a-judge", "Evaluate quality"],
    ["Create", "An idea worth making", "Generative AI", "Images & video"],
  ];
  return (
    <div className="workflow">
      <div className="workflow-title">
        <h3>From intent to execution.</h3>
        <span>Illustrative workflow</span>
      </div>
      <div
        className="workflow-switch"
        role="group"
        aria-label="Explore an illustrative workflow"
      >
        {flows.map(([name], i) => (
          <button
            key={name}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="flow-stage" aria-live="polite" key={selected}>
        {flows[selected].slice(1).map((text, i) => (
          <div key={text}>
            <span className="flow-count">0{i + 1}</span>
            <span>{text}</span>
            {i < 2 && <b aria-hidden="true">→</b>}
          </div>
        ))}
      </div>
    </div>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="brand" href="#home" aria-label="Akash Gupta home">
          <span className="monogram">
            A<span>G</span>
          </span>
          <span>
            AI Product Manager
            <br />& hands-on builder
          </span>
        </a>
        <nav
          id="navigation"
          className={menuOpen ? "is-open" : ""}
          aria-label="Main navigation"
        >
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Expertise", "#expertise"],
          ].map(([name, href]) => (
            <a key={name} href={href} onClick={() => setMenuOpen(false)}>
              {name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <Arrow />
          </a>
        </nav>
        <span className="edition">Portfolio / 2026</span>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>
      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-word" aria-hidden="true">
            PORTFOLIO
          </div>
          <img
            className="hero-portrait"
            src={`${process.env.PUBLIC_URL}/images/akash-cutout.png`}
            alt="Akash Gupta in a black blazer and white shirt"
            width="1254"
            height="1254"
            fetchpriority="high"
          />
          <div className="hero-left">
            <p className="eyebrow">Ideas into impact</p>
            <h1 id="hero-title">
              AI PRODUCT
              <br />
              MANAGER.
              <br />
              AGENT BUILDER.
            </h1>
            <p>
              I turn real problems into AI products, thoughtful workflows and
              things worth shipping.
            </p>
            <a className="signature" href="#about">
              Akash Gupta
            </a>
            <span className="signature-label">Curiosity meets execution.</span>
          </div>
          <div className="hero-right">
            <span className="gold-line" />
            <p>
              Product instinct.
              <br />
              Engineering roots.
              <br />A builder’s mindset.
            </p>
            <a
              className="circle-link"
              href="#work"
              aria-label="Explore my work"
            >
              ↓
            </a>
            <p className="hero-location">
              <span aria-hidden="true">⌖</span> Mumbai, India
              <br />
              <span>Currently at ModelsLab</span>
            </p>
          </div>
          <div className="portrait-caption">
            AKASH GUPTA <span>AI / PRODUCT / PEOPLE</span>
          </div>
        </section>
        <section className="contents wrap" aria-label="Explore this portfolio">
          <div className="contents-heading">
            <h2>
              A LITTLE
              <br />
              EXPLORATION.
            </h2>
            <p>
              The work, the thinking,
              <br />
              and the person behind it.
            </p>
          </div>
          <div className="contents-links">
            {sections.map(([n, label, href]) => (
              <a href={href} key={n}>
                <span>{n}</span>
                {label}
                <Arrow />
              </a>
            ))}
          </div>
          <div className="contents-art" aria-hidden="true">
            <div />
            <span>✦</span>
          </div>
        </section>
        <section id="work" className="work-section wrap">
          <div className="section-heading">
            <h2>SELECTED WORK</h2>
            <span className="rule" />
            <p>Built & led at ModelsLab</p>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.name}>
                <ProjectArt kind={project.kind} />
                <div className="project-title">
                  <span>0{i + 1}</span>
                  <h3>{project.name}</h3>
                </div>
                <p className="project-type">{project.type}</p>
                <p>{project.body}</p>
                <details>
                  <summary>
                    Explore the work <span aria-hidden="true">+</span>
                  </summary>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.detail}</p>
                    <span className="tags">{project.tags}</span>
                  </div>
                </details>
              </article>
            ))}
          </div>
          <div className="work-practice">
            <article>
              <span className="eyebrow">Customer-led product improvements</span>
              <h3>Let the evidence shape the next move.</h3>
              <p>
                Used Google Analytics, A/B testing and customer feedback to
                guide product improvements. Data analytics and data-driven
                decision-making connect what customers need with what gets
                prioritized.
              </p>
            </article>
            <article>
              <span className="eyebrow">Cross-functional product delivery</span>
              <h3>Bring the people and priorities together.</h3>
              <p>
                Coordinated ML, backend and frontend teams through Jira and
                Agile practices, prioritizing work and tracking delivery against
                tight deadlines. Managed competing priorities in a fast-paced AI
                environment with 24-hour launch targets for new features and
                products.
              </p>
            </article>
          </div>
          <p className="work-note">
            Concept illustrations accompanying selected work at ModelsLab.
          </p>
        </section>
        <section className="about-section wrap" id="about">
          <div className="about-intro">
            <p className="eyebrow">The person behind the products</p>
            <h2>
              STRATEGIC THINKER.
              <br />
              HANDS-ON DOER.
            </h2>
            <p>
              I’m Akash, a product manager and AI agent builder with a backend
              engineering background. I enjoy getting close to a problem, asking
              the right questions and building something useful.
            </p>
            <p>
              At ModelsLab, I connect ML, backend and frontend teams to turn
              competing priorities into focused delivery. I combine technical
              delivery, data analytics and product leadership to build, deploy
              and run agent workflows. Customer feedback and experimentation
              guide what we improve next.
            </p>
            <a
              className="text-link"
              href={`${process.env.PUBLIC_URL}/Akash-Gupta-Resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Read my résumé <Arrow />
            </a>
          </div>
          <div className="experience">
            <p className="eyebrow">The journey so far</p>
            <article>
              <span className="experience-date">Jan 2023 — Present</span>
              <h3>ModelsLab</h3>
              <p>
                Product Manager <span>Mumbai, India</span>
              </p>
              <p>
                AI agents, generative products, evaluation and cross-functional
                product leadership.
              </p>
            </article>
            <article>
              <span className="experience-date">Mar 2018 — Mar 2021</span>
              <h3>Accenture</h3>
              <p>
                Data Annotator <span>Mumbai, India</span>
              </p>
            </article>
            <article>
              <span className="experience-date">2014 — 2017</span>
              <h3>Mumbai University</h3>
              <p>Bachelor of Management Studies</p>
            </article>
          </div>
        </section>
        <section className="expertise-section wrap" id="expertise">
          <div className="section-heading">
            <h2>THINK. BUILD. REFINE.</h2>
            <span className="rule" />
            <p>A toolkit for the whole journey</p>
          </div>
          <div className="data-approach" aria-labelledby="data-approach-title">
            <p className="eyebrow">My product approach</p>
            <h3 id="data-approach-title">
              Data <span aria-hidden="true">→</span> Discovery{" "}
              <span aria-hidden="true">→</span> Impact
            </h3>
            <p className="approach-intro">
              Data-driven decision-making, grounded in customer needs. Turn
              evidence into a clearer problem, then into a product improvement
              worth testing.
            </p>
            <ol className="approach-steps">
              <li>
                <span className="step-number">01</span>
                <h4>Read the signals.</h4>
                <p>
                  Bring together data analytics, Google Analytics, A/B testing
                  and customer feedback to understand what needs attention.
                </p>
              </li>
              <li>
                <span className="step-number">02</span>
                <h4>Discover the right problem.</h4>
                <p>
                  Use those insights to guide product discovery, challenge
                  assumptions and prioritize the roadmap around customer needs.
                </p>
              </li>
              <li>
                <span className="step-number">03</span>
                <h4>Build, test and learn.</h4>
                <p>
                  Translate priorities into delivery, evaluate the experience
                  and use the next round of evidence to guide improvements.
                </p>
              </li>
            </ol>
          </div>
          <div className="expertise-grid">
            {[
              [
                "✳",
                "Agents & AI",
                [
                  "AI agent workflows & orchestration",
                  "RAG",
                  "LLMs",
                  "MCP",
                  "Claude Code",
                  "Claude Skills & subagents",
                ],
              ],
              [
                "◈",
                "AI evaluation",
                ["LLM evaluation", "LLM-as-a-judge", "RAGAS", "Langfuse"],
              ],
              [
                "◎",
                "Testing & deployment",
                [
                  "Software testing",
                  "Website testing",
                  "Security testing",
                  "API testing",
                  "SQL / database testing",
                  "Deployment & workflow execution",
                ],
              ],
              [
                "↗",
                "Data analytics & decisions",
                [
                  "Data analytics",
                  "Data-driven decision-making",
                  "Google Analytics",
                  "A/B testing",
                  "Customer feedback",
                  "DBMS / MySQL",
                ],
              ],
              [
                "◇",
                "Product strategy",
                [
                  "API products",
                  "Product discovery",
                  "Roadmapping",
                  "Prioritization",
                  "Image & video generation product launches",
                  "Marketing agents",
                ],
              ],
              [
                "⊞",
                "Leadership & delivery",
                [
                  "Team leadership",
                  "ML, backend & frontend coordination",
                  "Jira",
                  "Agile / Scrum",
                  "Delivery tracking & deadline management",
                  "Competing priorities & launch planning",
                ],
              ],
            ].map(([icon, title, items]) => (
              <article key={title}>
                <span className="expertise-icon" aria-hidden="true">
                  {icon}
                </span>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Workflow />
        </section>
        <section className="contact-section wrap" id="contact">
          <div className="contact-message">
            <p className="eyebrow">
              The next good idea starts with a conversation.
            </p>
            <h2>
              LET’S BUILD
              <br />
              SOMETHING THAT MATTERS<span>.</span>
            </h2>
            <a className="contact-button" href={`mailto:${email}`}>
              Say hello <Arrow />
            </a>
          </div>
          <div className="contact-details">
            <span className="contact-star" aria-hidden="true">
              ✦
            </span>
            <a href={`mailto:${email}`}>
              <span>Email</span>
              {email}
              <Arrow />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <span>Connect</span>Meet me on LinkedIn <Arrow />
            </a>
            <p>
              <span>Based in</span>Mumbai, India
            </p>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a href="#home">Akash Gupta</a>
        <span>Built with intent. Always evolving.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
export default App;
