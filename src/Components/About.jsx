import Titles from "./Titles";

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
            <Titles heading="Design" iconName="brush-outline" className="icon">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              laudantium quasi soluta reprehenderit.
            </Titles>

            <Titles
              heading="Development"
              iconName="construct-outline"
              className="icon"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              laudantium quasi soluta reprehenderit.
            </Titles>

            <Titles
              heading="Maintenance"
              iconName="cog-outline"
              className="icon"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              laudantium quasi soluta reprehenderit.
            </Titles>
          </div>
        </div>
      </div>
    </section>
  );
}
