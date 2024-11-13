import HeroPageHeader from "../../components/heroPage/Header";
import Trending from "./Trending";
import LandingPage from "./LandingPage";
import Summary from "./Summary";
import Category from "./Category";
const HeroPage = () => {
  return (
    <div className="">
      <HeroPageHeader />
      <LandingPage />
      <div className="w-full pt-10 py-5">
        <Summary />
      </div>
      <Trending/>
      <Category/>
    </div>
  );
};

export default HeroPage;
