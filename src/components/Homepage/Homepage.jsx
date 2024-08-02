import HomeAnimations from './HomeAnimations/HomeAnimations';
import HomeFoodtrucks from './HomeFoodtrucks/HomeFoodtrucks';
import HomeHeader from './HomeHeader/HomeHeader';
import HomePartners from './HomePartners/HomePartners';

function Homepage() {
  return (
    <>
      <HomeHeader />
      <HomeFoodtrucks />
      <HomeAnimations />
      <HomePartners />
    </>
  );
}

export default Homepage;
