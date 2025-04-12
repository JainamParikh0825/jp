import "../styles/social.css";

const Social = ({ s }) => {
  const { name, url } = s;
  const Icon = s.icon;

  return (
    <a className="social-link" href={url} target="_blank" title={name}>
      <Icon size={20} />
    </a>
  );
};

export default Social;
