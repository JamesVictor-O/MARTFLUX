import LandingPage from "./LandingPage";
import Category from "./Category";
import Trending from "./Trending";
import Summary from "./Summary";
import Hotsales from "./Hotsales";
const HeroPage = () => {
  return (
    <div className="">
      
      <LandingPage />
      <Summary/>
      <Category/>
      <Trending/>
      <Hotsales/>
    </div>
  );
};

export default HeroPage;
