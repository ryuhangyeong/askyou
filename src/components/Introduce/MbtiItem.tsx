import React from 'react';
import { MBTI } from '../../mbti/getMBTIs';

export type MbtiItemProps = {
  mbti: MBTI;
};

export default ({ mbti }: MbtiItemProps) => {
  return (
    <li>
      <span>{mbti.type}</span>
    </li>
  );
};
