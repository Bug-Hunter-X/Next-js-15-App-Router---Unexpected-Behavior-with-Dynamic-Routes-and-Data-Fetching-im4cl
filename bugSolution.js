```javascript
// app/page.js

import { Suspense } from 'react';

export default async function Home() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  return (
    <div>
      {data.results.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}
```