import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllAnimations } from '../../action/animations';

import AnimationsList from './AnimationsList/AnimationsList';

import './Animations.scss';

const Animations = () => {
  const dispatch = useDispatch();
  const animations = useSelector((state) => state.animations.allList);

  useEffect(() => {
    const action = fetchAllAnimations();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="animations-section pdg-lr">
      <div className="animations-header">
        <h1 className="primary-title">Les animations</h1>
        <p className="animations-description">
          En plus de déguster des mets succulents, participez à nos événements
          uniques et divertissants qui rythment le festival. Du défi de la plus
          grande chenille à l&apos;élection de M. & Mrs. Street Food, en passant
          par le concours de dégustation de piment et le tournoi de pétanque, il
          y en a pour tous les goûts et toutes les envies !
        </p>
      </div>
      <AnimationsList animations={animations} />
    </div>
  );
};

export default Animations;
