import React from 'react';
import { RecoilRoot } from 'recoil';

import Counter from './Counter';
import CharacterCount from './CharacterCount';
import Dogs from './Dogs';

export const App = () => (
  <RecoilRoot>
    <div>App works!</div>
    <h2>Dog Pictures Example</h2>
    <Dogs />
    <h2>Counter Example</h2>
    <Counter />
    <h2>Character Count Example</h2>
    <CharacterCount />
  </RecoilRoot>
);

export default App;
