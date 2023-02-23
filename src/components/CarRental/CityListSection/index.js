import "./style.css";

function CityListSection() {
  return (
    <section
      id="top-cities"
      className="top-cities d-flex align-items-center flex-column justify-content-center"
    >
      <div className="container">
        <div className="section-title">
          <h2>
            Check out some of the <span>Popular Cities</span>
          </h2>
          <p>
            Here's just a few of the places you might visit while self driving in our luxurious cars.
          </p>
        </div>

        <div className="d-flex justify-content-evenly flex-wrap" data-aos="fade-up">
          <div className="p-2">
            <div className="container-box">
              <div className="card-box">
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon">
                      <img src={process.env.PUBLIC_URL + "/images/ny.jpeg"} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="content">
                    <h3>New York</h3>
                    <p>Trust yourself and keep going.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="container-box">
              <div className="card-box">
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon">
                      <img src={process.env.PUBLIC_URL + "/images/ldn.jpg"} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="content">
                    <h3>London</h3>
                    <p>Trust yourself and keep going.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="container-box">
              <div className="card-box">
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon">
                      <img src={process.env.PUBLIC_URL + "/images/dubai.jpg"} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="content">
                    <h3>Dubai Desert</h3>
                    <p>Trust yourself and keep going.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CityListSection;
