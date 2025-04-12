import { socials } from "../data";
import "../styles/intro.css";
import Social from "../widgets/Social";

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>Hi, I'm Jainam!👋</h1>

      <p className="description">
        I'm on a journey to become a good Software Engineer 🚀. I love building
        little projects, trying out new coding techniques and sharing what I
        learn along the way. I believe that a person should learn new things
        everyday and I try to follow the same principle.
      </p>

      <p className="description">
        I currently have{" "}
        <span className="highlight">
          {new Date().getFullYear() - 2021}+ years of experience
        </span>
        . I have a professional experience in building web applications
        using&nbsp;
        <span className="highlight">
          React, Angular, JavaScript and TypeScript
        </span>{" "}
        primarily. I have exposure to other technologies like Node.js, Express,
        MongoDB & PostgreSQL.
      </p>

      <p className="description">
        When I'm not building stuff, I love to watch movies (mostly bollywood)
        and series. I also love to travel and work from cafes, remote places to
        explore nature and culture.
      </p>

      <div className="social-links">
        {socials.map((s) => (
          <Social key={s.url} s={s} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
