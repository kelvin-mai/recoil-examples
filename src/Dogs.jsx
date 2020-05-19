import React, { Suspense } from 'react';
import { selector, useRecoilValue } from 'recoil';

const dogPictureApi = 'https://dog.ceo/api/breeds/image/random/3';

const dogsState = selector({
  key: 'dogsState',
  get: async ({ get }) => {
    const res = await fetch(dogPictureApi);
    const json = await res.json();
    return json.message;
  },
});

export const DogsLoaded = () => {
  const dogs = useRecoilValue(dogsState);
  return (
    <div>
      {dogs.map((src, i) => (
        <img
          style={{ width: '100%' }}
          src={src}
          alt={`dog${i}`}
          key={`dog${i}`}
        />
      ))}
    </div>
  );
};

export const Dogs = () => {
  return (
    <div className="example" style={{ display: 'flex' }}>
      <Suspense fallback={<>Loading...</>}>
        <DogsLoaded />
      </Suspense>
    </div>
  );
};

export default Dogs;
