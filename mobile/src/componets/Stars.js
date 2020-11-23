import React from 'react';
import styled from 'styled-components';

import StarFull from '../assets/star';
import StarHalf from '../assets/star_half';
import StarEmpty from '../assets/star_empty';

const StarArea = styled.View`
  flex-direction: row;
`;
const StarView = styled.View``;
const StarText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color: #737373
`;

export default ({note, showN}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(note)
  let left = note - floor;

  for(var i=0;i<floor;i++){
      s[i] = 2;
  }
  if(left > 0){
      s[i] = 1;
  }

  return (
    <StarArea>
      {s.map((i, key) => (
        <StarView key={key}>
          {i === 0 && <StarEmpty width="18" height="18" fill="#FF9200" />}
          {i === 1 && <StarHalf width="18" height="18" fill="#FF9200" />}
          {i === 2 && <StarFull width="18" height="18" fill="#FF9200" />}
        </StarView>
      ))}
      {showN && <StarText>{note}</StarText>}
    </StarArea>
  );
};