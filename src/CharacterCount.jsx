import React from 'react';
import { atom, useRecoilState, selector, useRecoilValue } from 'recoil';

const characterState = atom({
  key: 'characterState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const chars = get(characterState);
    return chars.length;
  },
});

export const CharacterCount = () => {
  const [char, setChar] = useRecoilState(characterState);
  const charCount = useRecoilValue(charCountState);
  return (
    <div className="example">
      <span>count: {charCount} </span>
      <input
        type="text"
        value={char}
        onChange={(e) => setChar(e.target.value)}
      />
    </div>
  );
};

export default CharacterCount;
