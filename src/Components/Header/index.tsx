import './Header.css';

function Header({
  showChangelog,
  setShowChangelog,
}: {
  showChangelog: boolean;
  setShowChangelog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="wrapper">
      <h1>MakeMeta</h1>
      <h2>Generate Meta Tags for your website</h2>
      <p
        className="whats-new"
        onClick={() => {
          setShowChangelog(!showChangelog);
        }}
      >
        What's new?
      </p>
    </header>
  );
}

export default Header;
