export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sachin Kumar Dagar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate Software Developer skilled in C++ and Python, blending
            innovation with a solid computer science foundation. Eager team
            contributor with a knack for crafting efficient solutions. Adaptable
            and constantly expanding my toolkit, from front-end development to
            scalable applications using ReactJS and Node.js. Known for
            user-centric designs and problem-solving prowess. Ready to
            contribute to dynamic teams and impactful projects.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/sachin-kumar-dagar-a430521ba/")
          }
        >
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/heroimg.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
