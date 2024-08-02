import './HomeFoodtrucks.scss';
import { Link } from 'react-router-dom';

function HomeFoodtrucks() {
  return (
    <section className="foodtrucks">
      <h2 className="primary-title">Les foodtrucks</h2>
      <div className="foodtrucks-container">
        <div className="foodtrucks-content">
          <Link to="/foodtrucks" className="light-button">
            Je découvre
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeFoodtrucks;
