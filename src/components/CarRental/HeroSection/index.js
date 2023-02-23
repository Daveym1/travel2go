import "./style.css";

function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="carousel-item active">
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 data-aos="fade-down">
                <span>Welcome to</span> Travel2Go <span>Cars</span>
              </h2>
              <p data-aos="fade-up">
                Drive your way with Ease! Say goodbye to the hassle of finding and renting a car. 
                Looking  for a hassle-free way to rent a car? look no further than Travel2GO! With our user friendly interface, 
                you CarRentaleasily search for available cars, compare prices and features, and make a reservation in just a few clicks.
                Our app offer a range of rental options to suit your needs from short-term to long-term rental.
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
