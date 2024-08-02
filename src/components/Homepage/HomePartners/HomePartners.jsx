import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPartners } from '../../../action/partners';
import HomePartner from './HomePartner/HomePartner';
import './HomePartners.scss';

function HomePartners() {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partners.list);

  useEffect(() => {
    const action = fetchPartners();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="partners">
      <h2 className="highlight-title">Nos partenaires</h2>
      <div className="partners-container">
        <div className="partners-content">
          {partners.map((partner) => (
            <HomePartner key={partner.id} {...partner} />
          ))}
        </div>
        <div className="partners-content">
          {partners.map((partner) => (
            <HomePartner key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePartners;
