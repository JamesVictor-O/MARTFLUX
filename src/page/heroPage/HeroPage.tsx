import LandingPage from "./LandingPage";
import Category from "./Category";
import Trending from "./Trending";
import Summary from "./Summary";
const HeroPage = () => {
  return (
    <div className="">
      <LandingPage />
      <Category/>
      <Trending/>
      <Summary/>
    </div>
  );
};

export default HeroPage;
