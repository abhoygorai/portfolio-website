const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/abhoygorai" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true" title="Abhoy Gorai' GitHub Profile"></i>
        
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/abhoygorai/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Abhoy Gorai' LinkedIn Profile"></i>
        
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/abhoygorai/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Abhoy Gorai' Instagram Profile"></i>
        
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/abhoygorai" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="Abhoy Gorai' Twitter Profile"></i>
        
      </a>
    </div>
  );
};

export default SocialIcons;
