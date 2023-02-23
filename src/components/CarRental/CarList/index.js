import { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import Car from "../Car";
import "./style.css"

const LIMIT = 20

function CarList(props) {
  const carsRef = useRef()
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('*')

  // initialize an Isotope object with configs
  useEffect(() => {
    setIsotope(
      new Isotope(carsRef.current, {
        itemSelector: '.car',
      })
    );
  }, [])

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === '*'
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `${filterKey}` })
    }
  }, [isotope, filterKey])

  const toggleActiveClass = (current, elems) => {
    const activeClass = "filter-active"

    Object.values(elems).map(elem => elem.classList.remove(activeClass))
    current.classList.add(activeClass)
  }

  const handleFilter = (e) => {
    const current = e.target;
    const siblings = current.parentNode.children;
    const filter = current.getAttribute("data-filter")

    toggleActiveClass(current, siblings)
    setFilterKey(filter)
  }

  const carDetails = props.rentals.vehicleRates;
  return (
    <section className="cars">

      <div className="container">
        <div className="container">
          <div className="section-title">
            <h2> Rental <span>Cars</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="cars-flters">
              <li data-filter="*" className="filter-active" onClick={handleFilter}>Show All</li>
              <li data-filter=".filter-suv" onClick={handleFilter}>SUV</li>
              <li data-filter=".filter-van" onClick={handleFilter}>VAN</li>
              <li data-filter=".filter-sedan" onClick={handleFilter}>SEDAN</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container pt-2" data-aos="fade-up">
        <div ref={carsRef} className="row gy-4">
          {Object.keys(carDetails)
            .slice(0, LIMIT)
            .map((carInfo, index) => (
              <Car
                info={carDetails[carInfo]}
                addItem={props.addItem}
                index={index}
                key={index}
              />
            ))}
        </div>
      </div>
    </section >

  );
}

export default CarList;
