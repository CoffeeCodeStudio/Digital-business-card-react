import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Lägg till denna!
import { SiNetlify } from 'react-icons/si';           // Lägg till denna!

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        
        {/* LinkedIn - Glöm inte att lägga till denna länk också om du vill ha den */}
        <a href="https://linkedin.com/in/DITT-NAMN" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>

        <a href="https://github.com/DITT-ANVÄNDARNAMN" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub size={30} />
        </a>

        <a href="https://app.netlify.com/teams/DITT-NAMN" target="_blank" rel="noreferrer" aria-label="Netlify">
          <SiNetlify size={30} />
        </a>

      </div>
      <p>&copy; 2026 Rami</p>
    </footer>
  );
}