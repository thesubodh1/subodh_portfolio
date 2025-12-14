import profilePicture from "../assets/Profile.jpg";
import Button from "./Button";
import Icons from "./Icon";

export default function Hero({
  downloadCount,
  onDownload,
  onHandleDarkMode,
  isDark,
}) {
  return (
    <>
      <section className="section-hero">
        <div className="hero-text-box">
          <p className="hero-intro">Hi, I am</p>
          <h1 className="hero-heading">Subodh Dahal</h1>
          <p className="hero-desc">
            Python | React | Machine Learning
          </p>
          <div>
            <a
              href="/Savya Resume.pdf"
              download
              className="resume-btn"
              onClick={onDownload}
            >
              &darr; Download Resume
            </a>
            <p className="download-count">
              <strong>{downloadCount}</strong> Resume Downloaded
            </p>
          </div>

          <div>
            <Button onClick={onHandleDarkMode} className="btn">
              {isDark ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>

          <div className="hero-icon-section">
            <a href="#">
              <Icons name="logo-linkedin" className="social-logo" />
            </a>
            <a href="#">
              <Icons name="logo-github" className="social-logo" />
            </a>
            <a href="#">
              <Icons name="logo-facebook" className="social-logo" />
            </a>
          </div>
        </div>
        <div className="hero-img-box">
          <img src={profilePicture} alt="Subodh Image" className="hero-img" />
        </div>
      </section>

      <section className="hero-description">
        <p className="desc-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore vel,
          alias ipsa veritatis debitis ullam placeat fugit id rerum illo iusto
          sequi praesentium ipsum aperiam beatae excepturi, laudantium dolore
          expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore vel, alias ipsa veritatis debitis ullam placeat fugit id rerum
          illo iusto sequi praesentium ipsum aperiam beatae excepturi,
          laudantium dolore expedita.
        </p>
      </section>
    </>
  );
}
