import HeroSection from "../HeroSection";
import CityListSection from "../CityListSection";
import SearchFormSection from "../SearchFormSection";
import "./style.css";

function Home(props) {
  return (
    <div>
      <HeroSection />

      <main id="main">
        <CityListSection />
        <SearchFormSection setCarData={props.setCarData} />
      </main>
    </div>
  );
}

export default Home;
