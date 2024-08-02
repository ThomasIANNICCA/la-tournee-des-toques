import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchHomeAnimations } from '../../../action/animations';
import HomeAnimation from './HomeAnimation/HomeAnimation';
import Loader from '../../App/Loader/Loader';
import './HomeAnimations.scss';

function HomeAnimations() {
  const dispatch = useDispatch();
  const animations = useSelector((state) => state.animations.homeList);

  useEffect(() => {
    const action = fetchHomeAnimations();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="animations">
      <h2 className="secondary-title">Les animations</h2>
      <div className="animations-container">
        {animations ? (
          animations.map((animation) => {
            return <HomeAnimation key={animation.id} {...animation} />;
          })
        ) : (
          <Loader />
        )}
      </div>
      <Link to="/animations" className="alternative-button">
        Toutes les animations
      </Link>
    </section>
  );
}

export default HomeAnimations;
