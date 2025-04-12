import "../styles/social.css";

const Social = ({ s }) => {
  const { name, icon, url } = s;

  return (
    <a className="social-link" href={url} target="_blank" title={name}>
      {icon}
    </a>
  );
};

export default Social;
