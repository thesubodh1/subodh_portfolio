import Titles from "./Titles";
import Icons from "./Icon";

export default function About() {
  return (
    <section className="section-about">
      <div className="about-header">
        <h2 className="about-heading">About Me</h2>
        <p className="about-intro-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vitae
          similique voluptatem ipsa, est quaerat molestiae repellat voluptates,
          architecto fuga consectetur impedit libero, vel reprehenderit adipisci
          nostrum ducimus. Omnis, tenetur.
        </p>
      </div>

      <div className="about-content">
        <h3 className="about-subheading">Explore</h3>
        <div className="about-contents">
          <div className="about-titles">
            <Titles heading="Development" iconName="brush-outline" className="icon brush">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              laudantium quasi soluta reprehenderit.
            </Titles>

            <Titles
              heading="Testing"
              iconName="construct-outline"
              className="icon development"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              laudantium quasi soluta reprehenderit.
            </Titles>

            <Titles
              heading="Maintenance"
              iconName="cog-outline"
              className="icon cog"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              laudantium quasi soluta reprehenderit.
            </Titles>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <h2 className="about-heading">Skills</h2>

        <div className="section-using-now">
            <p className="subheading">using now:</p>
            <div className="technologies">
                <div><Icons name="logo-html5" className="tech-icons html"/><span>HTML</span></div>
                <div><Icons name="logo-css3" className="tech-icons css"/><span>CSS</span></div>
                <div><Icons name="logo-javascript" className="tech-icons javascript"/><span>JAVASCRIPT</span></div>
                <div><Icons name="logo-python" className="tech-icons python"/><span>PYTHON</span></div>
                <div><Icons name="analytics-outline" className="tech-icons api"/><span>REST API</span></div>
                <div><Icons name="logo-python" className="tech-icons django"/><span>DJANGO</span></div>
                <div><Icons name="logo-github" className="tech-icons github"/><span>GITHUB</span></div>
                <div><Icons name="logo-ionitron" className="tech-icons ai"/><span>MACHINE LEARNING</span></div>
                <div><Icons name="logo-react" className="tech-icons react"/><span>REACT</span></div>
            </div>
        </div>
        <p className="subheading margin-top">learning:</p>
        <div className="technologies">
                <div><Icons name="logo-react" className="tech-icons react"/><span>REACT</span></div>
                <div><Icons name="logo-docker" className="tech-icons docker"/><span>DOCKER</span></div>
                <div><Icons name="logo-nodejs" className="tech-icons node"/><span>NODE JS</span></div>
            </div>
      </div>

      <div className="portfolio-image margin-top">
        <h2 className="portfolio-text">Portfolio</h2>
      </div>
    </section>
  );
}
