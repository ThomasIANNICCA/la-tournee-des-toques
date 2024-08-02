import pictureLaurent from '../../../assets/images/contact/laurent.png';
import pictureMarine from '../../../assets/images/contact/marine.png';
import pictureThomas from '../../../assets/images/contact/thomas.png';

import './Team.scss';

const Team = () => {
  return (
    <div className="team">
      <h2 className="secondary-title">On vous répond !</h2>
      <div className="team-members-container">
        <div className="member">
          <figure className="member-image">
            <img src={pictureLaurent} alt="Portrait de Laurent" />
          </figure>
          <h3 className="member-name">Laurent</h3>
        </div>
        <div className="member">
          <figure className="member-image">
            <img src={pictureMarine} alt="Portrait de Marine" />
          </figure>
          <h3 className="member-name">Marine</h3>
        </div>

        <div className="member">
          <figure className="member-image">
            <img src={pictureThomas} alt="Portrait de Thomas" />
          </figure>
          <h3 className="member-name">Thomas</h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
