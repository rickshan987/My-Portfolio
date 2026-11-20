
import { useState } from 'react';
import './App.css';

function App() {

  const [page, setPage] = useState("Home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>

      <h1>My Portfolio</h1>

      <nav>
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("About")}>About</button>
        <button onClick={() => setPage("Projects")}>Projects</button>
        <button onClick={() => setPage("Education")}>Education</button>
        <button onClick={() => setPage("Contact")}>Contact</button>
      </nav>

      {page === "Home" && (
        <div>
          <h2>Hello, I'm Rickshan</h2>
          <h3>Welcome to My Portfolio</h3>
          <p>I am a student interested in web development.</p>
        </div>
      )}

      {page === "About" && (
        <div>
          <h2>About Me</h2>
          <p>Name: Rickshan</p>
          <p>Department: Computer Science</p>
          <p>Skills: HTML, CSS, JavaScript, React</p>
        </div>
      )}

      {page === "Projects" && (
        <div>
          <h2>My Projects</h2>
          <p>1. Student Profile</p>
          <p>2. Counter Application</p>
          <p>3. Portfolio Website</p>
        </div>
      )}

      {page === "Education" && (
        <div>
          <h2>Education</h2>
          <p>College: Your College Name</p>
          <p>Department: Computer Science</p>
          <p>Year: 3rd Year</p>
        </div>
      )}

      {page === "Contact" && (
        <div>
          <h2>Contact Me</h2>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={() => alert("Thank you " + name)}>
            Submit
          </button>

        </div>
      )}

    </div>
  );
}

export default App;
