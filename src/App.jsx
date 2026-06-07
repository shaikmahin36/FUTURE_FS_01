import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Shaik Mahin</h1>
        <p>B.Tech CSE Student | Aspiring Full Stack Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering student passionate about web
          development, programming, and technology. I enjoy building websites
          and learning new technologies.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Mobile Apps Awareness Project</li>
          <li>Community Service Project (CSP)</li>
          <li>Personal Portfolio Website</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          B.Tech in Computer Science Engineering<br />
          RISE Krishna Sai Prakasam Engineering College, Ongole
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" /><br /><br />
          <input type="email" placeholder="Your Email" /><br /><br />
          <textarea placeholder="Your Message"></textarea><br /><br />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Mahin Shaik</p>
      </footer>
    </div>
  );
}

export default App;