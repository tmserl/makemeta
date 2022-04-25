import './Footer.css';
import { useState, useEffect } from 'react';

function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    function getCurrentYear() {
      const date = new Date();
      setYear(date.getFullYear());
    }

    getCurrentYear();
  }, []);

  return (
    <footer>
      <p>
        Made{' '}
        <a
          href="https://www.websitecarbon.com/website/makemeta-app/"
          target="_blank"
          rel="noreferrer"
        >
          sustainably,
        </a>{' '}
        and with ♥️ by{' '}
        <a href="https://tmserl.com" target="_blank" rel="noreferrer">
          Tom Earl
        </a>
        , {year}
      </p>
    </footer>
  );
}

export default Footer;
