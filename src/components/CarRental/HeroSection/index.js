import "./style.css";

function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="carousel-item active">
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 data-aos="fade-down">
                <span>Welcome to</span> Travel2Go
              </h2>
              <p data-aos="fade-up">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <div data-aos="fade-up" data-aos-delay="500">
                <a href="#search-form" className="btn-menu">
                  Let's Go
                </a>
                <a href="#top-cities" className="btn-book">
                  Popular Cities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
