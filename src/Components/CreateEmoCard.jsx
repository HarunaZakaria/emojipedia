import React from 'react';
import EmoCard from './EmoCard';
const CreateEmoCard = (props) => {
  return (
    <div>
      <EmoCard
        emoji={props.emoji}
        name={props.name}
        meaning={props.meaning.substring(0, 50)}
      />
    </div>
  );
};

export default CreateEmoCard;
