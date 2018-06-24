import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ avatar, name, onClick }) => (
  <span className="card">
    <input
      type="image"
      className="card-img-top"
      src={avatar}
      alt={name}
      style={{ height: 150, display: 'inline-block', padding: '5px' }}
      onClick={() => onClick(name)}
    />
  </span>
);

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CharacterCard;
