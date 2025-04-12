import { socials } from "../data";
import Social from "../widgets/Social";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Made with ❤️ and 💪🏻</p>
      <div className="social-links">
        {socials.map((s) => (
          <Social key={s.url} s={s} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
