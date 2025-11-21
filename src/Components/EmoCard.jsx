import React from 'react';

const EmoCard = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <p className='emoji'>{props.emoji}</p>
        <h2 className='emoji-name'>{props.name}</h2>
        <p>{props.meaning}</p>
      </div>
    </div>
  );
};

export default EmoCard;
