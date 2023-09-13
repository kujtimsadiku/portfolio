const NavigationBar = () => {
  const padding = {
    padding: 5,
  };

  return (
    <>
      <header className="navigation-bar">
        <nav>
          <ul className="wrapper-nav">
            <li>
              <a style={padding}>About</a>
            </li>
            <li>
              <a style={padding}>Experience</a>
            </li>
            <li>
              <a style={padding}>Projects</a>
            </li>
            <li>
              <a style={padding}>Education</a>
            </li>
            <li>
              <a style={padding}>CV</a>
            </li>
            <li>
              <a style={padding}>Contact me</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
